import React, { useState } from "react";
import { Workspace } from "../../types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import WorkspaceList from "../WorkspaceList";

interface DashboardProps {
  onAddWorkspace: (workspace: Workspace) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onAddWorkspace }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWorkspace, setNewWorkspace] = useState({
    name: "",
    organization: "",
    tags: "",
    description: "",
    publishedOn: "Today",
    modifiedOn: "Today",
    users: 0,
    domains: 0,
    dataSources: 0,
    pendingApprovals: 0,
    type: "owned",
  });
  const [errors, setErrors] = useState({
    name: "",
    organization: "",
    tags: "",
    description: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewWorkspace({
      name: "",
      organization: "",
      tags: "",
      description: "",
      publishedOn: "Today",
      modifiedOn: "Today",
      users: 0,
      domains: 0,
      dataSources: 0,
      pendingApprovals: 0,
      type: "owned",
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewWorkspace({ ...newWorkspace, [name]: value });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!newWorkspace.name.trim())
      newErrors.name = "Workspace name is required.";
    if (!newWorkspace.description.trim())
      newErrors.description = "Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddWorkspace = () => {
    if (!validate()) {
      return;
    }

    const updatedWorkspace = {
      ...newWorkspace,
      id: String(Date.now()),
    };
    onAddWorkspace(updatedWorkspace);
    handleCloseModal();
  };

  return (
    <div>
      <div
        style={{
          display: "block",
          padding: "1.5rem",
          borderBottom: "3px solid black",
        }}
      >
        <span style={{ fontSize: "larger", fontWeight: 600 }}>Dashboard</span>
        <Button
          onClick={handleOpenModal}
          style={{ float: "inline-end" }}
          variant="outlined"
          size="medium"
        >
          Create New Workspace
        </Button>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Create New Workspace</DialogTitle>
        <DialogContent>
          <TextField
            label="Workspace Name"
            name="name"
            value={newWorkspace.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Organization"
            name="organization"
            value={newWorkspace.organization}
            onChange={handleChange}
            error={!!errors.organization}
            helperText={errors.organization}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Tags"
            name="tags"
            value={newWorkspace.tags}
            onChange={handleChange}
            error={!!errors.tags}
            helperText={errors.tags}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Description"
            name="description"
            value={newWorkspace.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            fullWidth
            margin="dense"
            multiline
            rows={3}
          />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="workspace-type-label"
              name="type"
              value={newWorkspace.type}
              onChange={handleChange}
            >
              <FormControlLabel
                value="owned"
                control={<Radio />}
                label="Owned"
              />
              <FormControlLabel
                value="external"
                control={<Radio />}
                label="External"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddWorkspace} color="primary">
            Add Workspace
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
