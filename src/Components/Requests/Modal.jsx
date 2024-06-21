import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Model(props) {
  console.log(props.record);
  const handleGrant = async (record) => {
    const res = await axios.post(
      "https://ups-api-f0me.onrender.com/user/grant",
      record
    );
    if (res.status === 200) {
      console.log(res);
      props.onHide();
    }
  };
  const handleReject = async (record) => {
    console.log(record);
    const res = await axios.post(
      "https://ups-api-f0me.onrender.com/user/reject",
      record
    );
    if (res.status === 200) {
      console.log(res);
      props.onHide();
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Subject : <i>{props.record.subject}</i>
        </p>
        <div>
          Body:
          <div className="record-body">{props.record.body}</div>
        </div>
        <p>
          Docs :{" "}
          <a href={props.record.docs} target="_blank" rel="noreferrer">
            {" "}
            Link
          </a>
        </p>
        <p>Status :{props.record.status} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        {props.record.status === "pending" && (
          <>
            <Button variant="success" onClick={() => handleGrant(props.record)}>
              Grant
            </Button>
            <Button variant="danger" onClick={() => handleReject(props.record)}>
              Reject
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Model;
