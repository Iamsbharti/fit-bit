import React from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Button,
  Toolbar,
} from "@material-ui/core";
import { MenuOutlined, AddBoxOutlined } from "@material-ui/icons";
export default function () {
  const styles = {
    marginTop: 12,
  };
  return (
    <div>
      <AppBar position="static" style={styles}>
        <Toolbar>
          <IconButton>
            <MenuOutlined />
          </IconButton>
          <Typography style={{ flex: 1 }}>Move It</Typography>
          <Button edge="end">
            <AddBoxOutlined />
            Add Exercise
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
