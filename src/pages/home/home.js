import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { HomePage } from './style';

export default function Home() {
    const navigate = useNavigate();

    return (
        <HomePage>
            <h2>Home</h2>
            <p>Welcome to our website!</p>
            <ul>
                <li  style={{ color:"white",cursor: "pointer",background:"blue",borderRadius:"5px" ,width:"70px" , textAlign:"center", padding:"3px", margin:"10px"}} onClick={() => navigate('/home/about')}>about</li>
                <li style={{ color:"white", cursor: "pointer", background: "red", borderRadius: "5px", width: "70px", textAlign: "center", padding: "3px 10px", margin: "10px" }} onClick={() => navigate('/home/contact')}>contactus</li>
                <li style={{ color:"white", cursor: "pointer", background: "black", borderRadius: "5px", width: "70px", textAlign: "center", padding: "3px 10px", margin: "10px" }} onClick={() => navigate('/home')}>Back</li>
                <Outlet />
            </ul>
        </HomePage>
    );
}
