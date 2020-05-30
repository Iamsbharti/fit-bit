import React, { Fragment } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Button,
  Icon,
  Toolbar,
} from "@material-ui/core";
import { MenuOutlined, NoteAdd } from "@material-ui/icons";
export default function () {
  const styles = {
    marginTop: 12,
  };
  return (
    <div>
      <AppBar position="static" style={styles}>
        <Toolbar>
          <IconButton edge="start">
            <MenuOutlined />
          </IconButton>
          <Typography>Move It</Typography>
          <IconButton edge="end">
            <NoteAdd />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
