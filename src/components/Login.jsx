import { useState } from "react"

function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const handlelogin = () =>{
    const userName = 'loginApp'
    const pwd ='12345'
    if(userName ===email && pwd ===password)
    {
        console.log('you have logged in successfull')
    } 
    else{
         console.log('wrong credentials')
    }
    }
    return(
        <div>
            <h4>Login</h4>
            <label>Email:</label>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your Email
                "/><br/>
                <label>Password</label>
                <input type="number"
                value={password}
                onChange={(p)=>setPassword(e.target.value)}
                placeholder="Enter your Email
                "/><br/>
                <button onClick={handlelogin}>Login</button>
        </div>
    )
}
export default Login