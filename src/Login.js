import {useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import {Button,Container,Form,Row,Col} from 'react-bootstrap'

const Login =  () =>
{
    const [user,setUser] = useState ({UserName : "",Password : ""})
    const navigate = useNavigate()
    const Login = async () =>
    {
      
        console.log(user)
      
       let resp = await axios.post("http://localhost:59929/api/Account/Login",user)
       
       
       let data = resp.data
       console.log( data)
       
        sessionStorage["token"] = data.token

       if(data == false){
       alert("משתמש זה אינו קיים")
       navigate('/')
    }
       else{
        navigate('/Encryption')
       }
    }

    const Signֹֹ_up = async () =>
    {

        let obj = { 
                        "_id": "",
                    "userName": user.UserName,
                    "password": user.Password,
                    "__v": 0
                  }
        let resp = await axios.post("http://localhost:59929/api/User",obj)

        alert(resp.data)
        
        console.log( resp.data)
    }
    
    return(<div>
        


  
        
<Container>
    <h3>Login </h3>
            <Form>
                <Row>
                    <Col md>
                     <Form.Group controlId='formText'>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type='text' name="userName" onChange={e => setUser({...user,UserName : e.target.value})} placeholder='Enter UserName'/>

                </Form.Group>
                    </Col>
                
                
                    <Col md>
                      <Form.Group controlId='formpassword'>
                    <Form.Label>password</Form.Label>
                    <Form.Control type='password'  onChange={e => setUser({...user,Password : e.target.value})} placeholder='Enter Password'/>
                    
                </Form.Group>
                    </Col>
                </Row>
                <br/>
              

                <Button onClick={Login}>Login</Button> <Button onClick={Signֹֹ_up}>Sign up</Button>

            </Form>
</Container>
        
        
    </div>)
}

export default Login