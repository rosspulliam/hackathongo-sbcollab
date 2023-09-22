import React from "react";
import { useState, useEffect } from "react";
import { Container, Nav, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import "../UserDashboard/UserDashboard.css";

export default function UserDashboard() {
  const [editMode, setEditMode] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://pg3ackaqdv.us-east-1.awsapprunner.com/getServices')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);
  console.log(services)
//   const [activityData, setActivityData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
 
//         try {
//             const response = await axios.get('https://pg3ackaqdv.us-east-1.awsapprunner.com/getActivity?id=3');
//             setActivityData(response.data);
//           } catch (error) {
//             console.error('Error fetching activity data:', error);
//             throw error;
//           }
//     };

//     fetchData();
//   }, []);

//   console.log(activityData)

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
                                    <p>
                                <strong>First Name:</strong> Jane
                              </p>
                              <p>
                                <strong>Last Name:</strong> Doe
                              </p>
                              <p>
                                <strong>Date of Birth:</strong> 09/08
                              </p>
                              <p>
                                <strong>Case Manager:</strong> John Doe
                              </p>
                              <Form.Group
                                className="mb-3"
                                controlId="phoneNumber"
                              >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control placeholder="1231231234" />
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
                              <p>
                                <strong>Case Manager:</strong> John Wiilliams
                              </p>
                              <p>
                                <strong>Phone Number:</strong> 0000
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
        <Card.Title>September 26, 2023
</Card.Title>
<Card.Text><strong>You </strong>have an upcoming appointment with<strong> Community Health</strong></Card.Text>
        {""}
        <Card.Title>September 29, 2023
</Card.Title>
<Card.Text><strong>You </strong>have an upcoming appointment with<strong> Community Health</strong></Card.Text>
      </Card.Body>
    </Card>
                  </Col>
                </Row>
                </div>
              </div>
              <div className="user-main-bottom">
              <Card>
      <Card.Header>Your Services</Card.Header>
      <Card.Body>
      <ListGroup variant="flush">
            <ListGroup.Item >
              <Row>
                <Col md={6}>
                  <strong>Community Health</strong>
                </Col>
                <Col md={6}>
                  123 Main Street
                </Col>
              </Row>
            </ListGroup.Item>
            {" "}
            <ListGroup.Item >
              <Row>
                <Col md={6}>
                  <strong>Community Health</strong>
                </Col>
                <Col md={6}>
                  123 Main Street
                </Col>
              </Row>
            </ListGroup.Item>
            {" "}
            <ListGroup.Item >
              <Row>
                <Col md={6}>
                  <strong>Community Health</strong>
                </Col>
                <Col md={6}>
                  123 Main Street
                </Col>
              </Row>
            </ListGroup.Item>
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
