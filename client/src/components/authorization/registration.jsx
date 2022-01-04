import React, {useState} from 'react';
import 'react-bootstrap';
import {Form, Button, Row, Col} from "react-bootstrap";
import Input from "../../Utils/input";
import {registration} from "../../actions/user";


const Registration = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [Surname, setSurname] = useState("")

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: 600, padding: 30}}>
                <h2>Registration</h2>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}> Email: </Form.Label>
                        <Col sm={10}>
                            <Input value={Email} setValue={setEmail} type="text" placeholder="Enter email" />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}> Password: </Form.Label>
                        <Col sm={10}>
                            <Input value={Password} setValue={setPassword} type="password" placeholder="Enter password" />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}> Name: </Form.Label>
                        <Col sm={10}>
                            <Input value={Name} setValue={setName} type="text" placeholder="Enter your name" />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}> Surname: </Form.Label>
                        <Col sm={10}>
                            <Input value={Surname} setValue={setSurname} type="text" placeholder="Enter your surname" />
                        </Col>
                    </Form.Group>

                    <Button onClick={()=>registration(Email, Password, Name, Surname)} >Submit</Button>

                </Form>

            </div>
        </div>
    );
};

export default Registration;