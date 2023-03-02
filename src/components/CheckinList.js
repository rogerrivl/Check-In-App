import React, { useState, useEffect } from "react";
import { Table, Form, Container } from "react-bootstrap";

function CheckinList() {
  const [checkins, setCheckins] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const storedCheckins = JSON.parse(localStorage.getItem("checkins")) || [];
    setCheckins(storedCheckins);
  }, []);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredCheckins = checkins.filter((checkin) =>
    `${checkin.firstName} ${checkin.lastName}`
      .toLowerCase()
      .includes(searchName.toLowerCase())
  );

  return (
    <Container>
      <div style={{ marginTop: "50px" }}>
        <h2>Check-in List</h2>
        <Form>
          <Form.Group controlId="searchName">
            <Form.Label>Search by Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={searchName}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Service Type</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredCheckins.map((checkin, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{checkin.firstName}</td>
                <td>{checkin.lastName}</td>
                <td>{checkin.serviceType}</td>
                <td>{checkin.date}</td>
                <td>{checkin.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default CheckinList;
