import { useState, useContext } from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { UserContext } from '../../App.js';

import './login.css';

export default function LogIn() {

    const api = process.env.BACK_URL;

    const { disatch } = useContext(UserContext);

    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const handleInputs = (e) => {
        console.log(e);

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user, 
            [name]:value 
        });
    };

    const loginUser = async (e) => {

        e.preventDefault();

        const res = await fetch(`${api}/api/login`,{
            method:'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Credentials");
        } else {
            disatch({ type: "USER", payload: true });     
            window.alert("Login Successful");

            navigate('/');
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