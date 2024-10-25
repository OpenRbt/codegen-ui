import React from 'react';
import {
  TextField,
  Typography,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import ColumnEditor from './ColumnEditor';

function TableEditor({ tables, tableIndex, updateTable }) {
  const table = tables[tableIndex];

  const updateTableName = (e) => {
    const updatedTable = { ...table, name: e.target.value };
    updateTable(tableIndex, updatedTable);
  };

  const addColumn = () => {
    const newColumn = { name: 'NewColumn', type: 'string' };
    const updatedTable = {
      ...table,
      columns: [...table.columns, newColumn],
    };
    updateTable(tableIndex, updatedTable);
  };

  const handleUpdateColumn = (colIndex, updatedColumn) => {
    const updatedColumns = table.columns.map((col, i) =>
      i === colIndex ? updatedColumn : col
    );
    const updatedTable = { ...table, columns: updatedColumns };
    updateTable(tableIndex, updatedTable);
  };

  const handleDeleteColumn = (colIndex) => {
    const updatedColumns = table.columns.filter((_, i) => i !== colIndex);
    const updatedTable = { ...table, columns: updatedColumns };
    updateTable(tableIndex, updatedTable);
  };

  return (
    <Paper className="table-editor" elevation={3}>
      <Typography variant="h5" gutterBottom>
        Edit Table: {table.name}
      </Typography>
      <TextField
        label="Table Name"
        value={table.name}
        onChange={updateTableName}
        fullWidth
        margin="normal"
      />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Columns
      </Typography>
      {table.columns.map((column, index) => (
        <ColumnEditor
          key={index}
          column={column}
          tables={tables}
          updateColumn={(updatedColumn) =>
            handleUpdateColumn(index, updatedColumn)
          }
          deleteColumn={() => handleDeleteColumn(index)}
        />
      ))}
      <Button
        variant="outlined"
        color="primary"
        onClick={addColumn}
        style={{ marginTop: '20px' }}
      >
        Add Column
      </Button>
    </Paper>
  );
}

export default TableEditor;
