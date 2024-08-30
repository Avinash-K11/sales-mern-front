import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './signup.css';
import { useAuth } from '../../store/auth';


export default function SignUp() {

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const url = 'https://sales-mern-back.onrender.com';

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleInputs = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]: value, });
    }

    const postData = async (e) => {
        e.preventDefault();

        await fetch(url + '/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then( res => res.json())
            .then(data => {
                if(data.status === 422 || !data) {
                    window.alert("Invalid Registration");
                } else {
                    storeTokenInLS(data.token);
                    setUser({ name: "", email: "", password: "", cpassword: "", });
                    window.alert("User Created");

                    navigate('/login');
                }
            })
            .catch(error => {
               console.log(error);
            });
    }

    return (
        <section>
            <div className='signup'>
                <h1 className='form-title'>Sign Up</h1>
                <div className="signup-content">
                    <form onSubmit={postData}>
                        <label htmlFor="name">Name</label>
                        <input type='text' name='name' className='content' placeholder='Your Name'  value={user.name} autoComplete='off' onChange={handleInputs} required />

                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' className='content' placeholder='Your Email' value={user.email} autoComplete='off' onChange={handleInputs} required />

                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' className='content' placeholder='Your Password' value={user.password} autoComplete='off' onChange={handleInputs} />

                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type='password' name='cpassword' className='content' placeholder='Confirm Your Password' autoComplete='off' value={user.cpassword} onChange={handleInputs} />

                        <button type="submit" className='submit-btn' >Register</button>

                    </form>
                </div>
            </div>
        </section>
    );
};