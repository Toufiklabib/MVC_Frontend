import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function Multiplication(props) {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState({
    number: null,
  });

  const submitNumber =(event) =>{
    event.preventDefault();
    const from = event.target;
    const number1 = from.num1.value;
    const number2 = from.num2.value;
     const multiplay ={
    number1,
    number2
     }
     axios.post("http://localhost:5000/api/multiplication/multiply", multiplay )
     .then((res) => {
       const result = res.data.multiplicationModel.result;
       setStatus(result);
       console.log(res.data);
     })
     .catch((err) => {
       console.log(err);
     });
  }

  return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="bg-white p-4 rounded shadow w-100">
          <Col md={6} sm={12} lg={6} className="mt-3">
            <form onSubmit={submitNumber}>
              <h2 className="text-center mb-4">Multiplication Two Number</h2>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">Enter a number</label>
                <input
                    type="number"
                    className="form-control"
                    id="number"
                    name="num1"
                    placeholder="Enter a first number"
                    required={true} // This will work now
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">Enter a number</label>
                <input
                    type="number"
                    className="form-control"
                    id="number"
                    name="num2"
                    placeholder="Enter a number"
                    required={true} // This will work now
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </Col>
          <Col md={6} sm={12} lg={6} className="mt-3">
            <h2 className="text-center mb-4"><strong className="text-danger">{data.number}</strong> Product is </h2>
            {status && <h3 className="text-bg-primary text-center"> {status}</h3>}
          </Col>
        </Row>
      </Container>
  );
}

export default Multiplication;
