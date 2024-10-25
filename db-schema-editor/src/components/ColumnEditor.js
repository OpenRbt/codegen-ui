import React from 'react';
import {
  TextField,
  Select,
  MenuItem,
  IconButton,
  Grid,
  InputLabel,
  FormControl,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ColumnEditor({ column, tables, updateColumn, deleteColumn }) {
  const basicTypes = ['string', 'date', 'int', 'decimal'];
  const customTypes = tables.map((t) => t.name);
  const arrayTypes = customTypes.map((t) => `[]${t}`);

  const allTypes = [...basicTypes, ...customTypes, ...arrayTypes];

  const handleNameChange = (e) => {
    updateColumn({ ...column, name: e.target.value });
  };

  const handleTypeChange = (e) => {
    updateColumn({ ...column, type: e.target.value });
  };

  return (
    <Grid container spacing={2} alignItems="center" className="column-editor">
      <Grid item xs={5}>
        <TextField
          label="Column Name"
          value={column.name}
          onChange={handleNameChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={5}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={column.type}
            onChange={handleTypeChange}
            label="Type"
          >
            {allTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={deleteColumn}
          color="secondary"
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ColumnEditor;
