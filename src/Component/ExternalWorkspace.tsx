import React, { useCallback } from "react";
import WorkspaceList from "./WorkspaceList";
import { Workspace } from "../types";
import { useNavigate } from "react-router-dom";

interface ExternalWorkspaceProps {
  workspaces: Workspace[];
  onDeleteWorkspace: (id: string) => void;
}

const ExternalWorkspace: React.FC<ExternalWorkspaceProps> = ({
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

export default ExternalWorkspace;
