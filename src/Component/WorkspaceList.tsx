import React, { useEffect, useState } from "react";
import WorkspaceCard from "./WorkspaceCard/WorkspaceCard";
import { Workspace } from "../types";
import { Box, Button, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

interface WorkspaceListProps {
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  workspace: Workspace[];
}

const WorkspaceList: React.FC<WorkspaceListProps> = ({
  onSelect,
  onDelete,
  workspace,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [filteredWorkspace, setFilteredWorkspace] = useState(workspace);
  const workspacePerPage = 3;

  const startIndex = (currentPage - 1) * workspacePerPage;
  const endIndex = startIndex + workspacePerPage;

  // Filter the workspace data for the current page
  const paginatedWorkspace = filteredWorkspace.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const onHandleSearch = (e: any) => {
    e.preventDefault();
    const searchValue = searchVal.trim().toLowerCase();
    if (searchValue === "") {
      setFilteredWorkspace(workspace);
    } else {
      const filteredList = workspace?.filter((item) =>
        item?.name?.toLowerCase().includes(searchValue)
      );
      setFilteredWorkspace(filteredList);
      setCurrentPage(1);
    }
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ height: "50%", padding: "0px 0px 20px 13px" }}
      >
        <Grid item xs={11}>
          <input
            type="string"
            placeholder="Search Workspace"
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={onHandleSearch}
            endIcon={<FilterAltOutlinedIcon />}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            padding: 2,
          }}
        >
          {paginatedWorkspace?.map((workspace: Workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onClick={() => onSelect(workspace.id)}
              onDelete={() => onDelete(workspace.id)}
            />
          ))}
        </Box>

        {/* Pagination */}
        <Stack spacing={2} alignItems="center" mt={4}>
          <Pagination
            count={Math.ceil(workspace.length / workspacePerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};

export default WorkspaceList;
