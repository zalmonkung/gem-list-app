//import * as React from 'react';
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Avatar from "@mui/material/Avatar";

import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Gems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //UserGet();
  }, []);
  /*
  const UserGet = () => {
    fetch("http://localhost:2005/gems")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      );
  };
*/
  const UserDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:2001/gems/delete/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") UserGet();
      })
      .catch((error) => console.log("error", error));
  };

  const UserUpdate = (id) => {
    window.location = "/update/" + id;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Gems
              </Typography>
            </Box>
            <Box>
              <Link href="create">
                <Button variant="contained">Create</Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>SKU</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Weight</TableCell>
                  <TableCell align="right">Size</TableCell>
                  <TableCell align="right">Color</TableCell>
                  <TableCell align="right">clarity</TableCell>
                  <TableCell align="right">origin</TableCell>
                  <TableCell align="right">Treatment</TableCell>
                  <TableCell align="right">certificate</TableCell>
                  <TableCell align="right">seller</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Box displat="flex" justifyContent="center">
                        <Avatar alt={row.username} src={row.avatar} />
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.weight}</TableCell>
                    <TableCell align="right">{row.size}</TableCell>
                    <TableCell align="right">{row.color}</TableCell>
                    <TableCell align="right">{row.clarity}</TableCell>
                    <TableCell align="right">{row.origin}</TableCell>
                    <TableCell align="right">{row.treatment}</TableCell>
                    <TableCell align="right">{row.certificate}</TableCell>
                    <TableCell align="right">{row.seller}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                      >
                        <Button onClick={() => UserUpdate(row.id)}>Edit</Button>
                        <Button onClick={() => UserDelete(row.id)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
