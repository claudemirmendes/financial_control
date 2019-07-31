import React ,{useState} from 'react'
import './Login.css'

export default function LoginForm(props) {
    return(
        <div class="container login" align="center">
            <div className="container form">
               <h2 className="h2">Registre-se ou Entre!</h2>
               <form>
                   <div className="form-group">
                     <label>Email</label>
                     <input type="email" className="form-control input"></input>
                   </div>
               </form>
            </div>
        </div>
    )
}