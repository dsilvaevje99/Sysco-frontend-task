import React from 'react';
//IMPORT MUI COMPONENTS
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const DataTable = ({data}) => {
    return ( 
        <TableContainer component={Paper}>
            <Table aria-label="data table">
                <TableHead className="tableHeader">
                    <TableCell><strong>Navn</strong></TableCell>
                    <TableCell><strong>Beskrivelse</strong></TableCell>
                    <TableCell><strong>URL</strong></TableCell>
                    <TableCell><strong>Stjerner</strong></TableCell>
                    <TableCell><strong>Open Issues</strong></TableCell>
                </TableHead>
                <TableBody>
                    {
                        data.length !== 0 && data.map((repo, key) => {
                            return(
                                <TableRow key={key}>
                                    <TableCell>{repo.name}</TableCell>
                                    <TableCell>{repo.description}</TableCell>
                                    <TableCell><a href={repo.clone_url} target="_blank" rel="noreferrer">{repo.clone_url}</a></TableCell>
                                    <TableCell>{repo.stargazers_count}</TableCell>
                                    <TableCell>{repo.open_issues_count}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
     );
}
 
export default DataTable;