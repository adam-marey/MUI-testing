import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 }
];

const rowsData = [
  { id: 1, firstName: 'Adam', lastName: 'Marey', age: 85 },
  { id: 2, firstName: 'Kristin', lastName: 'Whalen', age: 26 },
  { id: 3, firstName: 'Chris', lastName: 'Nieves', age: 25 }
];

const StyledBox = styled(Box)({
  backgroundColor: '#f0f0f0',
  padding: '1rem'
});

function Home() {
  const [rows, setRows] = useState(rowsData);
  useEffect(
    () => {
      console.log('rows:', rows);
    },
    [rows]
  );

  return (
    <StyledBox>
      <DataGrid columns={columns} rows={rows} autoHeight />
    </StyledBox>
  );
}

export default Home;
