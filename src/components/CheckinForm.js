import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

function CheckinForm({ onCheckin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [checkins, setCheckins] = useState([]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkinInfo = {
      firstName,
      lastName,
      serviceType,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    onCheckin(checkinInfo);
    setFirstName("");
    setLastName("");
    setServiceType("");
    saveCheckinInfo(checkinInfo);
  };

  const saveCheckinInfo = (checkinInfo) => {
    const storedCheckins = JSON.parse(localStorage.getItem("checkins")) || [];
    const newCheckins = [...storedCheckins, checkinInfo];
    localStorage.setItem("checkins", JSON.stringify(newCheckins));
    setCheckins(newCheckins);
  };

  useEffect(() => {
    const storedCheckins = JSON.parse(localStorage.getItem("checkins")) || [];
    setCheckins(storedCheckins);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Form.Group>

        <Form.Group controlId="serviceType">
          <Form.Label>Service Type</Form.Label>
          <div>
            <Form.Check
              inline
              type="checkbox"
              label="Token Pick up"
              value="Token Pick up"
              checked={serviceType === "Token Pick up"}
              onChange={handleServiceTypeChange}
            />
            <Form.Check
              inline
              type="checkbox"
              label="Pin Reset"
              value="Pin Reset"
              checked={serviceType === "Pin Reset"}
              onChange={handleServiceTypeChange}
            />
            <Form.Check
              inline
              type="checkbox"
              label="Token Drop off"
              value="Token Drop off"
              checked={serviceType === "Token Drop off"}
              onChange={handleServiceTypeChange}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Check in
        </Button>
      </Form>
    </Container>
  );
}

export default CheckinForm;
