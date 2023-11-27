import Accordion from "react-bootstrap/Accordion";
import "./Records.css";

function Records(props) {
  const { data } = props;
  console.log(data);
  return (
    <Accordion>
      <Accordion.Item className="item" eventKey={data.id}>
        <Accordion.Header>
          {data.subject} - <b>{data.Timestamp.split(" ")[0]}</b>{" "}
        </Accordion.Header>
        <Accordion.Body>
          <p>
            <b>Permission Letter:</b> {data.permissionLetter}
          </p>
          <p>
            <b>Documents:</b> {data?.documents}
          </p>
          <p>
            <b>Status:</b> {data.status}
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Records;
