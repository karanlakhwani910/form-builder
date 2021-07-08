// import CSS
import { Container, Table } from "react-bootstrap";
import '../css/Result.css';


const Result = ({details, inputs}) => {
  return (
    <div className='info-table'>
      <Container >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {inputs.map((input) => {
                if (input === "fname") {
                  return <th key={input}>First Name</th>;
                } else if (input === "lname") {
                  return <th key={input}>Last Name</th>;
                } else if (input === "email") {
                  return <th key={input}>Email</th>;
                } else if (input === "username") {
                  return <th key={input}>Username</th>;
                } else if (input === "contact") {
                  return <th key={input}>Phone</th>;
                }
                return null;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {details.map((detail) => {
                return <td key={detail}>{detail}</td>;
              })}
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Result;
