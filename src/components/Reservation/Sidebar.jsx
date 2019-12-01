import React from "react";
import { Row, Col } from "antd";

export default function Sidebar(props) {
  console.log(props.data);
  const form = props.data;
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={20} style={{ marginTop: "10%" }}>
          <h1 className="sidebar">BOOKING RECAP</h1>
          {props.stage >= 0 ? (
            <React.Fragment>
              <Row>
                <h3 className="sidebar">
                  <b>Room Details</b>
                </h3>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Check-in date</b>
                  </span>
                </Col>
                <Col>
                  <span>{form["checkin-picker"]}</span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Check-out date</b>
                  </span>
                </Col>
                <Col>
                  <span>{form["checkout-picker"]}</span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Guest Number</b>
                  </span>
                </Col>
                <Col>
                  <span>{form["guest-number"]}</span>
                </Col>
              </Row>
            </React.Fragment>
          ) : null}

          {props.stage === 1 ? (
            <React.Fragment>
              <hr style={{ borderColor: "#ffffff" }} />
              <Row>
                <h3 className="sidebar">
                  <b>Extra</b>
                </h3>
              </Row>

              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Capacity</b>
                  </span>
                </Col>
                <Col>
                  <span>{(form.capacity && form.capacity.label) || null}</span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Catering</b>
                  </span>
                </Col>
                <Col>
                  <span>{(form.catering && form.catering.label) || null}</span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Equipment</b>
                  </span>
                </Col>
                <Col>
                  <span>
                    {form.equipment.map(e => (
                      <React.Fragment>
                        <span>{e.label}</span>
                        <span>{e.n}</span>
                      </React.Fragment>
                    ))}
                  </span>
                </Col>
              </Row>
            </React.Fragment>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}
