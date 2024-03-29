import React, { useState } from "react";
import '../login/login.css'
import { Container,Row,Col,Form,Alert, Button} from "react-bootstrap";
import { Link } from "react-router-dom";


const Login=()=>{

    let [email,setEmail]= useState("")
    let [erremail,setErrEmail]= useState("")
    
    let [password,setPassword]= useState("")
    let [errpassword,setErrPassword]= useState("")



    let handleSubmit=(e)=>{
        e.preventDefault()

        // email
        if(!email){
            setErrEmail("email is required")
        }else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setErrEmail("valid email is required")
            }
        }

        //password
        if(!password){
            setErrPassword("password is required")
        }
    
    }


    return(
        <>
            <section id='login'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg='6' sm='5' md='5'>
                            <img src="images/logo.svg" alt="logo" />
                        </Col>
                        <Col lg='3' sm='5' md='4' className="all">
                            <Alert>
                               <h2>Login</h2>
                            </Alert>
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    {erremail?
                                     <Form.Text className="text-muted red">
                                         {erremail}
                                    </Form.Text> 
                                    :
                                    ""
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                    {errpassword?
                                     <Form.Text className="text-muted red">
                                         {errpassword}
                                    </Form.Text> 
                                    :
                                    ""
                                    }
                                </Form.Group>

                                <div className="">
                                    <Button onClick={handleSubmit} variant="primary" type="submit">
                                        Submit
                                </Button>
                                </div>
                                <p>Have not an Account?<Link to='/reg'> Registration</Link></p>
                            </Form>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Login

