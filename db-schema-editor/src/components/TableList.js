import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TableList({
  tables,
  selectTable,
  addTable,
  deleteTable,
  selectedTableIndex,
}) {
  return (
    <div className="table-list">
      <Button variant="contained" color="primary" onClick={addTable}>
        Add Table
      </Button>
      <List component="nav">
        {tables.map((table, index) => (
          <ListItem
            button
            key={index}
            selected={selectedTableIndex === index}
            onClick={() => selectTable(index)}
          >
            <ListItemText primary={table.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTable(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TableList;
