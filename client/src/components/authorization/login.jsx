import React, {useState} from 'react';
import 'react-bootstrap';
import {Form, Button, Row, Col} from "react-bootstrap";
import Input from "../../Utils/input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";


const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const dispatch = useDispatch()


    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <div style={{width: 600, padding: 30}}>
                <h2>Log in</h2>
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


                    <Button onClick={()=>dispatch(login(Email, Password))}> log in!</Button>

                </Form>

            </div>
        </div>
    );
};

export default Login;