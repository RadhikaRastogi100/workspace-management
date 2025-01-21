import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Workspace } from "../../types";
import workspacesData from "../../workspaces";
import { useParams } from "react-router-dom";

const WorkspaceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [workspace, setWorkspace] = useState<Workspace | null>(null);

  useEffect(() => {
    const foundWorkspace = workspacesData.find((ws) => ws.id === id);
    setWorkspace(foundWorkspace || null);
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      <Card style={{ marginBottom: "1rem" }}>
        <CardContent style={{ cursor: "pointer" }}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                {workspace?.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "grey" }}
              >{`Organization: ${workspace?.organization} | Tags: ${workspace?.tags}`}</Typography>
              <Typography
                variant="body2"
                sx={{ color: "grey" }}
              >{`Description: ${workspace?.description}`}</Typography>
              <Typography
                variant="body2"
                sx={{ color: "grey" }}
              >{`PublishedOn: ${workspace?.publishedOn} | Last modifiedOn: ${workspace?.modifiedOn}`}</Typography>
            </Grid>
            <Grid item xs={2}>
              {/* <FavoriteButton/>l */}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions style={{ borderTop: "1px solid #dddddd" }}>
          <Grid container spacing={4}>
            {/* values */}
            <Grid item xs={3}>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                {workspace?.dataSources}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                {workspace?.domains}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                {workspace?.users}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                {workspace?.pendingApprovals}
              </Typography>
            </Grid>

            {/* title */}
            <Grid item xs={3}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontSize: "1rem" }}
              >
                Data Source
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontSize: "1rem" }}
              >
                Domain
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontSize: "1rem" }}
              >
                Users
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontSize: "1rem" }}
              >
                Pending Approvals
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};

export default WorkspaceDetails;
