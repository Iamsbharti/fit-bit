import React, { Fragment, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { connect } from "react-redux";
import PropsTypes from "prop-types";

function InputForm({ category }) {
  const [title, setTilte] = useState("");
  const [muscles, setMuscles] = useState("");
  const [description, setDesc] = useState("");
  return (
    <Fragment>
      <TextField
        autoFocus
        name="title"
        placeholder="exercise name"
        label="Exercise"
        fullWidth
        margin="dense"
        value={title}
        onChange={(e) => setTilte(e.target.value)}
      />
      <InputLabel htmlFor="muscles">Muscles</InputLabel>
      <Select
        label="Muscles"
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
        autoFocus
        name="description"
        value={description}
        placeholder="descriptions"
        label="Description"
        fullWidth
        rows={4}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <br />
      <Button variant="outlined" color="primary">
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
export default connect(mapStateToProps)(InputForm);
