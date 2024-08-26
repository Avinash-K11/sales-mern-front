import  { useState } from 'react';
import './signup.css';
import { useNavigate as navigate } from 'react-router-dom';

export default function SignUp() {

    const api = process.env.BACK_URL;

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleInputs = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value });
    }

    const postData = async (e) => {

        e.preventDefault();

        const res = await fetch(`${api}/api/signup`, {
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("User Created");

            navigate('/login');
        }
    }

    return (
        <section>
            <div className='signup'>
                <h1 className='form-title'>Sign Up</h1>
                <div className="signup-content">
                    <form onSubmit={postData} >
                        <label htmlFor="name">Name</label>
                        <input type='text' name='name' className='content' placeholder='Your Name'  value={user.name}  onChange={handleInputs} required />

                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' className='content' placeholder='Your Email' value={user.email} onChange={handleInputs} required />

                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' className='content' placeholder='Your Password' value={user.password} onChange={handleInputs} />

                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type='password' name='cpassword' className='content' placeholder='Confirm Your Password' value={user.cpassword} onChange={handleInputs} />

                        <button type="submit" className='submit-btn'>Register</button>

                    </form>
                </div>
            </div>
        </section>
    );
};