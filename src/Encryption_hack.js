import {useState} from 'react'
import axios from 'axios'
import Barcomp from './Bar'
import * as ReacctBootSerap from "react-bootstrap"
 

const Hack =  () =>
{
    const [HacObj,setText] = useState ({Text : ""})
    const [file,setfile] = useState (null)
    const [loading,setLoading] = useState (false)

    const submit = async () =>
    {
    
        if(HacObj.Text.length<940&&file==null){
            alert(" אורך הטקסט קצר, כדי להבטיח תוצאה עם הסתברות טובה יותר, יש לשלוח טקסט ארוך עם 940 תווים לפחות כדי שהתוצאה תהיה עם הסתברות סבירה למציאת המפתח ")
        }
        else{
          alert(" מערכת פעינוח הטקסט עובדת בשיטה סטטיסתית, ככל שהטקסט המוצפן יהיה ארוך, הסבירות שהתוצאה תהיה תקינה גדולה יותר ")
        setLoading(true) 
     const obj = new FormData()
      obj.append("Text" , HacObj.Text)
      obj.append("file" , file)

      console.log(HacObj.Text);
      let axiosObj = axios.create({
        baseURL : "http://localhost:59929/api",
         headers : {
        Authorization :"Bearer " + sessionStorage["token"],},})

       
       let resp = await axiosObj.post("http://localhost:59929/api/Hacking",obj);

       setLoading(false)
      document.getElementById("result").innerHTML = resp.data
      console.log( resp.data) 
    }
         }


    return(<div>

  <Barcomp/>

  <h3>Encryption hack</h3><br/>

  <div class="container mt-3">

  <div class="mb-3 mt-3">
     
    <textarea class="form-control" type="text" rows="5" id="comment" onChange={e => setText({...HacObj,Text : e.target.value})} ></textarea><br/>
     <input type="file" onChange={e => {const file = e.target.files[0]
    setfile(file)} }></input><br/><br/><br/>
  </div>
  <button type="submit" onClick={submit}>Submit</button>


<br/><h3>Hacking key results:</h3><br/>
{loading ? <ReacctBootSerap.Spinner animation="border" /> : null}

<p id="result"></p>

<label></label>

</div>

</div>)
}
export default Hack