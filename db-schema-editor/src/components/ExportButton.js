import React from 'react';
import { js2xml } from 'xml-js';
import { Button } from '@mui/material';

function ExportButton({ tables }) {
  const exportToXML = () => {
    const schema = {
      elements: [
        {
          type: 'element',
          name: 'Schema',
          elements: tables.map((table) => ({
            type: 'element',
            name: 'Table',
            attributes: { name: table.name },
            elements: table.columns.map((column) => ({
              type: 'element',
              name: 'Column',
              attributes: { name: column.name, type: column.type },
            })),
          })),
        },
      ],
    };

    const xml = js2xml(schema, { compact: false, spaces: 4 });

    const blob = new Blob([xml], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'schema.xml';
    link.click();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={exportToXML}
      style={{ marginTop: '20px' }}
    >
      Export Schema
    </Button>
  );
}

export default ExportButton;
