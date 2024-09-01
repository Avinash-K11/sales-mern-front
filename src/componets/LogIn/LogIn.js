import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './login.css';
import { useAuth } from '../../store/auth.js';
 
export default function LogIn() {

    // const api = process.env.BACK_URL;
    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const handleInputs = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user, 
            [name]:value 
        });
    };

    const loginUser = async (e) => {

        const url = "https://sales-mern-back.onrender.com";
        try {
            e.preventDefault();

            const res = await fetch( url + '/api/login',{
                method:'POST',
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(user)
            });

            if(res.ok) {
                const data = await res.json();

                alert("Login Successful");
                const token = data.token.value;
                
                storeTokenInLS(token);

                setUser({ email: "", password: "" });
                navigate('/');
            } else {
                alert("Invalid Credentials"); 
            }
        } catch (error) {
            console.log(error);
        }

        
    }

    return (
        <section>
            <div className='signup'>
                <h1 className='form-title'>Log In</h1>
                <div className="signup-content">
                    <form onSubmit={loginUser}  >
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' className='content' placeholder='Your Email' required value={user.email} autoComplete='off'
                        onChange={handleInputs}/>

                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' className='content' placeholder='Your Password'  value={user.password} autoComplete='off'
                        onChange={handleInputs} />

                        <button type="submit" className='submit-btn' >Log In</button>

                    </form>
                </div>
            </div>
        </section>
    );
};