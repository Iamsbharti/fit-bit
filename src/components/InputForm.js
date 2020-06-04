import React, { Fragment, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  withStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import PropsTypes from "prop-types";

const styles = (theme) => ({
  FormControl: {
    width: 300,
    marginTop: 10,
  },
});
function InputForm({ category, classes }) {
  const [title, setTilte] = useState("");
  const [muscles, setMuscles] = useState("");
  const [description, setDesc] = useState("");
  const handleClick = (event) => {};
  return (
    <Fragment>
      <TextField
        className={classes.FormControl}
        autoFocus
        name="title"
        placeholder="exercise name"
        label="Exercise"
        margin="dense"
        value={title}
        onChange={(e) => setTilte(e.target.value)}
      />
      <InputLabel htmlFor="muscles">Muscles</InputLabel>
      <Select
        className={classes.FormControl}
        value={muscles}
        onChange={(e) => setMuscles(e.target.value)}
      >
        {category.map((cat, index) => (
          <MenuItem key={index} value={cat.name}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        className={classes.FormControl}
        autoFocus
        name="description"
        value={description}
        placeholder="descriptions"
        label="Description"
        rowsMax={4}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <br />
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Create
      </Button>
    </Fragment>
  );
}
const mapStateToProps = ({ muscles }) => ({
  category: muscles,
});
InputForm.propTypes = {
  category: PropsTypes.array.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(InputForm));
