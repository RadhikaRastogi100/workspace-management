import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import OwnedWorkspace from "./Component/OwnedWorkspace";
import ExternalWorkspace from "./Component/ExternalWorkspace";
import ShowJsonList from "./Component/ShowJsonList";
import WorkspaceDetails from "./Component/WorkspaceDetail/WorkspaceDetail";
import Navbar from "./Component/Navbar/Navbar";
import Breadcrumbs from "./Component/Breadcrumbs";
import { Workspace } from "./types";
import workspacesData from "./workspaces";

const App: React.FC = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>(workspacesData);

  const handleAddWorkspace = (newWorkspace: Workspace) => {
    setWorkspaces((prev) => [...prev, newWorkspace]);
  };

  const handleDeleteWorkspace = (id: string) => {
    // const filteredList = workspaces?.filter((item)=>item.id !== id)
    // setWorkspaces(filteredList)
    setWorkspaces((prev) => prev.filter((workspace) => workspace.id !== id));
  };

  return (
    <Router>
      <AppContent
        workspaces={workspaces}
        onAddWorkspace={handleAddWorkspace}
        onDeleteWorkspace={handleDeleteWorkspace}
      />
    </Router>
  );
};

const AppContent: React.FC<{
  workspaces: Workspace[];
  onAddWorkspace: (workspace: Workspace) => void;
  onDeleteWorkspace: (id: string) => void;
}> = ({ workspaces, onAddWorkspace, onDeleteWorkspace }) => {
  const location = useLocation();
  const showWorkspaceDetailsPage =
    location.pathname.startsWith("/workspace-details");

  return (
    <div>
      <Dashboard onAddWorkspace={onAddWorkspace} />
      <div>
        {showWorkspaceDetailsPage ? <Breadcrumbs /> : <Navbar />}
        <Routes>
          <Route
            path="/owned-workspace"
            element={
              <OwnedWorkspace
                workspaces={workspaces.filter(
                  (workspace) => workspace.type === "owned"
                )}
                onDeleteWorkspace={onDeleteWorkspace}
              />
            }
          />
          <Route
            path="/external-workspace"
            element={
              <ExternalWorkspace
                workspaces={workspaces.filter(
                  (workspace) => workspace.type === "external"
                )}
                onDeleteWorkspace={onDeleteWorkspace}
              />
            }
          />
          <Route path="/workspace-details/:id" element={<WorkspaceDetails />} />
          <Route path="/json-list" element={<ShowJsonList />} />
          <Route
            path="/"
            element={
              <OwnedWorkspace
                workspaces={workspaces.filter(
                  (workspace) => workspace.type === "owned"
                )}
                onDeleteWorkspace={onDeleteWorkspace}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
