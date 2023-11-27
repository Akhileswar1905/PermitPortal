import Accordion from "react-bootstrap/Accordion";
import "./Records.css";
import SubRecords from "../SubRecords/Records.js";
// import axios from "axios";

function Records(props) {
  const { data } = props;

  return (
    <Accordion>
      <Accordion.Item className="item" eventKey={data.id}>
        <Accordion.Header>
          {data?.name} - {data.rollNo}
        </Accordion.Header>
        <Accordion.Body>
          <div className="records">
            <h3>Previous Records</h3>
            {data?.permissionRecords.map((element) => (
              <>
                <SubRecords data={element} />
              </>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Records;
