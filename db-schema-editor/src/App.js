import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TableList from './components/TableList';
import TableEditor from './components/TableEditor';
import ExportButton from './components/ExportButton';
import './App.css';

function App() {
  const [tables, setTables] = useState([]);
  const [selectedTableIndex, setSelectedTableIndex] = useState(null);

  const addTable = () => {
    const newTable = { name: 'NewTable', columns: [] };
    setTables([...tables, newTable]);
  };

  const deleteTable = (index) => {
    const updatedTables = tables.filter((_, i) => i !== index);
    setTables(updatedTables);
    if (selectedTableIndex === index) {
      setSelectedTableIndex(null);
    } else if (selectedTableIndex > index) {
      setSelectedTableIndex(selectedTableIndex - 1);
    }
  };

  const updateTable = (index, updatedTable) => {
    const updatedTables = tables.map((table, i) =>
      i === index ? updatedTable : table
    );
    setTables(updatedTables);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Database Schema Editor
      </Typography>
      <div className="app-container">
        <TableList
          tables={tables}
          selectTable={setSelectedTableIndex}
          addTable={addTable}
          deleteTable={deleteTable}
          selectedTableIndex={selectedTableIndex}
        />
        {selectedTableIndex !== null && (
          <TableEditor
            tables={tables}
            tableIndex={selectedTableIndex}
            updateTable={updateTable}
          />
        )}
      </div>
      <ExportButton tables={tables} />
    </Container>
  );
}

export default App;
