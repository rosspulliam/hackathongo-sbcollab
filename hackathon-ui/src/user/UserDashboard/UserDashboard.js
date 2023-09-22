import React from "react";
import { useState } from "react";
import { Container, Nav, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import "../UserDashboard/UserDashboard.css";

export default function UserDashboard() {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };
  return (
    <div className="user-dashboard">
      <Container fluid>
        <Row>
          <Col sm={2} className="user-nav">
            <Nav className="flex-column">
              <Nav.Link className="nav-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="#services">
                Services
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={10} className="user-main">
            <div className="user-main-wrapper">
              <div className="user-main-top">
                <div className="user-main-top-wrapper">
                <Row>
                  <Col sm={5} className="user-main-left">
                    <div className="personal-info">
                      <Card>
                          <Card.Header>Personal Information</Card.Header>
                        <Card.Body>
                          {editMode ? (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="firstName"
                              >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter first name"
                                />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter last name"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="dateOfBirth"
                              >
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" />
                              </Form.Group>
                            </Form>
                          ) : (
                            <div>
                              <p>
                                <strong>First Name:</strong> Jane
                              </p>
                              <p>
                                <strong>Last Name:</strong> Doe
                              </p>
                              <p>
                                <strong>Date of Birth:</strong> 09/08
                              </p>
                            </div>
                          )}
                          {editMode ? (
                            <Button variant="primary" onClick={handleSaveClick}>
                              Save
                            </Button>
                          ) : (
                            <Button
                              variant="secondary"
                              onClick={handleEditClick}
                            >
                              Edit
                            </Button>
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col sm={5} className="user-main-right">
                  <Card>
        <Card.Header>Activity Feed</Card.Header>
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          time
        </Card.Subtitle>
        <Card.Text>description</Card.Text>
      </Card.Body>
    </Card>
                  </Col>
                </Row>
                </div>
              </div>
              <div className="user-main-bottom">
              <Card>
      <Card.Header>Services</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
            <ListGroup.Item >Medical</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
