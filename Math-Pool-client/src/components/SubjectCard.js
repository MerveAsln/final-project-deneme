import React from "react";
import { NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SubjectCard = () => {
  return (
    <Card className="m-5">
      <Card.Img
        variant="top"
        src="https://abakcus.com/wp-content/uploads/2022/06/100-Beautiful-Math-Poster-Designs-for-Your-Classroom-500x412.png.webp"
      />

      <Card.Body>
        <Card.Title className="fw-5 text-bold mb-5">Subject</Card.Title>
        <div>
          {" "}
          <Link
            to="/math"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Math
          </Link>
        </div>
        <div>
          <Link
            to="/geometry"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Geometry
          </Link>
        </div>
      </Card.Body>
      {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
    </Card>
  );
};

export default SubjectCard;
