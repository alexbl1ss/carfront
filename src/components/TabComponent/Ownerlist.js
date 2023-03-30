import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants.js'
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function OwnerList() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = () => {
    // Read the token from the session storage
    // and include it to Authorization header 
    const token = sessionStorage.getItem("jwt"); 

    fetch(SERVER_URL + 'api/owners', {
      headers: { 'Authorization' : token }
    })
    .then(response => response.json())
    .then(data => setOwners(data._embedded.owners))
    .catch(err => console.error(err));    
  }

  function getFullName(params) {
    return `${owners.firstname || ''} ${owners.lastname || ''}`;
  }
  
  const columns = [
    {field: 'firstname', headerName: 'Forename', width: 200},
    {field: 'lastname', headerName: 'Surname', width: 200},
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 160,
      valueGetter: getFullName,
    },
];
    return(
      <React.Fragment>
      <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={owners}
        columns={columns}
        disableSelectionOnClick={true}
        getRowId={row => row._links.self.href}
        components={{ Toolbar: CustomToolbar }}/>
     </div>
    </React.Fragment>
);
}

export default OwnerList;
