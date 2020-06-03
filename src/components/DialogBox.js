import React, { useState } from "react";
import {
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";
export default function ({ open, onCloseDialog }) {
  const [openValue, setOpenValue] = useState(open);
  const handleClose = () => {
    setOpenValue(false);
    onCloseDialog(false);
  };
  return (
    <div>
      <Dialog open={openValue} onClose={handleClose}>
        <DialogTitle>Create a new Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter these details and it will appear in the left pane
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
