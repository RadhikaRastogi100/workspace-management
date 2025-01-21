import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" style={{ padding: "20px" }}>
      <Link to="/" style={{ textDecoration: "none", color: "Blue" }}>
        Dashboard
      </Link>
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={routeTo} color="text.primary">
            {value.replace(/-/g, " ")}
          </Typography>
        ) : (
          <Link
            key={routeTo}
            to={routeTo}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {value.replace(/-/g, " ")}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
