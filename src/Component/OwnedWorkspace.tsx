import React, { useCallback } from "react";
import WorkspaceList from "./WorkspaceList";
import { useNavigate } from "react-router-dom";
import { Workspace } from "../types";

interface OwnedWorkspaceProps {
  workspaces: Workspace[];
  onDeleteWorkspace: (id: string) => void;
}

const OwnedWorkspace: React.FC<OwnedWorkspaceProps> = ({
  workspaces,
  onDeleteWorkspace,
}) => {
  const navigate = useNavigate();

  const handleWorkspaceClick = useCallback((id: string) => {
    navigate(`/workspace-details/${id}`);
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <WorkspaceList
        workspace={workspaces}
        onSelect={handleWorkspaceClick}
        onDelete={onDeleteWorkspace}
      />
    </div>
  );
};

export default OwnedWorkspace;
