import { useEffect, useContext } from "react";
import { useNavigate as navigate } from "react-router-dom";
import { UserContext } from "../App.js";

const LogOut = () => {
    const { disatch } = useContext(UserContext);
    const api = process.env.BACK_URL;

    useEffect(() => {

        fetch(`${api}/api/logout`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res)=> {
                disatch({ type: "USER", payload: false });
                navigate('/login');
                if(res.status !== 200){
                    const error = new Error(res.error);
                    throw error;
                }
            }).catch((err) => {
                console.log(err);
            })
    });

    return (
        <>
            <h1>Log out page</h1>
        </>
    );
};

export default LogOut;