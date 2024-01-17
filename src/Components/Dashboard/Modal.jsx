import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import granted from '../../imgs/granted.png'
import pending from '../../imgs/pending.png'
import rejected from '../../imgs/rejected.png'
function MyVerticallyCenteredModal(props) {
    // console.log(props)

    let img = props.record?.status;
    if(img === 'granted') img = granted
    else if(img === 'pending') img = pending
    else img = rejected
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Subject : <i>{props.record.subject}</i></p>
        
        <div>
          Body:
          <div className="record-body">
          {/* <i>.</i> */}
            {props.record.body}
          </div>
        </div>
        {
          props.record?.docs && <p>Docs : <a href={props.record.docs} target="_blank" rel="noreferrer"> Link</a>
          </p>
        }
      </Modal.Body>

        <center>
            <p>{props.record.status}</p>
            <img src={img} alt="img" width={"70px"}/>
        </center>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MyVerticallyCenteredModal;
