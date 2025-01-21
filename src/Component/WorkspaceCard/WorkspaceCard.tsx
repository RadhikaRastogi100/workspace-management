import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  CardActions,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Workspace } from "../../types";
import FavoriteButton from "../FavoriteButton";

interface WorkspaceCardProp {
  workspace: Workspace;
  onClick: () => void;
  onDelete: (id: any) => void;
}

const WorkspaceCard: React.FC<WorkspaceCardProp> = ({
  workspace,
  onClick,
  onDelete,
}) => {
  return (
    <>
      <Card style={{ marginBottom: "1rem" }}>
        <CardContent>
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
              <FavoriteButton />
              <Button
                startIcon={<DeleteIcon />}
                onClick={() => onDelete(workspace.id)}
                style={{ margin: "0.5rem" }}
                color="error"
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          onClick={onClick}
          style={{ borderTop: "1px solid #dddddd", cursor: "pointer" }}
        >
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

          {/* <Button
            startIcon={<DeleteIcon />}
            onClick={() => onDelete(workspace.id)}
            style={{ margin: "0.5rem" }}
            color="error"
          >
            Delete
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default WorkspaceCard;
