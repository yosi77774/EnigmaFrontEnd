import {useState} from 'react'
import axios from 'axios'
import Barcomp from './Bar'
import * as ReacctBootSerap from "react-bootstrap"

 

const Encryption =  () =>
{

  const myStyle = {
    padding: "50px 0",
    margin: "50px auto 0 auto",
    width: "80%"
  };
    const [EncObj,setText] = useState ({Text : "",keys : ""})
    const [file,setfile] = useState (null)
    const [loading,setLoading] = useState (false)

  
    const submit = async () =>
    {
      if(/[A-Za-z]/.test(EncObj.keys)&&EncObj.keys.length==3){
 
        setLoading(true) 
     const obj = new FormData()
      obj.append("Text" , EncObj.Text)
      obj.append("keys" , EncObj.keys)
      obj.append("file" , file)

      console.log(EncObj.Text);
      let axiosObj = axios.create({
        baseURL : "http://localhost:59929/api",
         headers : {
        Authorization :"Bearer " + sessionStorage["token"],},})

       
       let resp = await axiosObj.post("http://localhost:59929/api/Enigma",obj);

     console.log( resp.data)
     setLoading(false)
      document.getElementById("result").value = resp.data
         }

         else{
           alert("Insert an encryption key between three letters")
         }

    }

    const Clear = () =>
    {
      let text = document.getElementById("result").value;
      let regex =/X{2}|Z{2}/
      console.log(text)
      console.log(regex.test(text))
      while(regex.test(text)){
        console.log("IN")
          text = text.replace("XX"," "); 
          text = text.replace("ZZ",""); 
          document.getElementById("result").value = text
      }
      console.log(text)

    }

    
    return(<div>
      
 <Barcomp/>
  <h3>Encryption</h3><br/>

  <div class="container mt-3">

  
    <div class="mb-3 mt-3">
           <label>Insert an encryption key between three letters</label><br/> 
    <input id='keys' type="text" pattern="[A-Za-z]{3}" title="Insert an encryption key between three letters" onChange={e => setText({...EncObj,keys : e.target.value})}></input> <br/>  <br/> 
     <label>Type text for encryption</label><br/>
   
      <textarea class="form-control" type="text" rows="5" id="comment" onChange={e => setText({...EncObj,Text : e.target.value})} ></textarea><br/>
       <input type="file" onChange={e => {const file = e.target.files[0]
      setfile(file)} }></input><br/><br/><br/>
    </div>
    <button type="submit" onClick={submit}>Submit</button>
    


 <br/><h3>result:</h3><br/>

{loading ? <ReacctBootSerap.Spinner animation="border" /> : null}

<textarea id="result" class="form-control" type="text" rows="10"></textarea><br/>

<button type="submit" onClick={Clear}>Clear text</button>
  <label></label>

</div>

</div>)
}
export default Encryption