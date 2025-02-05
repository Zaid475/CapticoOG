import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/axios";


function Login() {
    const path=useNavigate();
    const [state, updatedstate] = useState({
        email: "",
        password: ""
        


    });
    function uservalue(event) {
        console.log(event.target.value, event.target.name);
        updatedstate({ ...state, [event.target.name]: event.target.value })

    }
    console.log(state);
    async function submit(event) {
        event.preventDefault();
        if (!state.email || !state.password ) {
            return alert("Fill the fields")
        }
            
            try {
                const response=await api.post("/auth/login",{userData:state})
                if(response.data.success){
                    // dispatch({type:"login",payload:response.data.Userdata})
                    alert(response.data.message)
                    path("/dashboard")

                }
                else{
                    alert(response.data.message)
                }


            }
            catch (error) {
                alert(error.response.data.message)

            }


        }
        
    

        return (
            <div style={{ border: "1px solid black", marginTop: "50px", width: "350px", marginLeft: "500px", height: "200px" }}>
                <h1>Login Page</h1>
                <form onSubmit={submit} autoComplete="off">

                    <label>E-mail</label><br></br>
                    <input onChange={uservalue} autoComplete="new-email" name="email" type="email"></input><br></br>
                    <label>Password</label><br></br>
                    <input onChange={uservalue} type="password" name="password" autoComplete="new-password"></input><br></br>
                   
                    <input type="submit"></input>
                </form>
            </div>



        )
    
}

    export default Login;