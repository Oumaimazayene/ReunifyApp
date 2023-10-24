import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow"; // Correction de l'importation
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    paddingLeft: "300px", // Ajoutez une marge à gauche
    border: "2px solid #000", // Ajoutez un cadre autour du tableau
  },
  filterContainer: {
    display: "flex",
    justifyContent: "space-between", // Aligner à droite
    alignItems: "center",
    marginBottom: "20px", // Ajoutez un espacement en bas
  },
  title: {
    fontWeight: "bold",
    fontSize: "20px",
    flex: 1, // Permet au titre de prendre tout l'espace disponible à gauche
    textAlign: "left",
    marginLeft: "300px",
    // Centre le texte
  },
  addButton: {
    backgroundColor: "green",
    color: "white",
  },
});

function RoomTable() {
  const classes = useStyles();

  const [newRoomCapacity, setNewRoomCapacity] = useState(0);

  // Sample data for rooms
  const initialRooms = [
    { name: "Room 1", capacity: 20 },
    { name: "Room 2", capacity: 30 },
    { name: "Room 3", capacity: 25 },
  ];

  const [rooms, setRooms] = useState(initialRooms);

  // Function to handle room deletion
  const handleDeleteRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    setRooms(updatedRooms);
  };

  // Function to handle room editing (you should implement this)
  const handleEditRoom = (index) => {
    // Add your edit room logic here
  };

  // Function to handle room addition
  const handleAddRoom = () => {
    // Implement the logic to add a new room
    const newRoom = { name: "New Room", capacity: newRoomCapacity };
    setRooms([...rooms, newRoom]);
  };

  return (
    <div>
      <div className={classes.filterContainer}>
        <div className={classes.title}>Les Salles</div>
        <Button
          variant="contained"
          className={classes.addButton}
          onClick={handleAddRoom}
        >
          Add Room
        </Button>
      </div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Room Name</StyledTableCell>
              <StyledTableCell align="right">Capacity</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room, index) => (
              <StyledTableRow key={room.name}>
                <StyledTableCell component="th" scope="row">
                  {room.name}
                </StyledTableCell>
                <StyledTableCell align="right">{room.capacity}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => handleEditRoom(index)}
                  ></Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteRoom(index)}
                  ></Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RoomTable;
