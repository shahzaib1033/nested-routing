import React from 'react'
import { Container, Footer, Link, Nav } from './style'
import { Outlet, useNavigate } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";


export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <Nav>
                <Container>
                    <h2 onClick={() => navigate('/home')}>Admin</h2>
                    <Link onClick={()=>navigate('/dashboard')} >
                        <AiFillDashboard style={{ color: "#ffffff", fontSize: "40px" }} />

                        <span>Dashboard</span>
                    </Link>
                    <Link>
                        <FaShoppingCart style={{ color: "#ffffff", fontSize: "40px" }} />
                        <span>
                            Products
                        </span>
                    </Link>
                    <Link>
                        <FaRegUser style={{ color: "#ffffff", fontSize: "40px" }} />
                        Accounts
                    </Link>
                    <Link>

                        <RiSettings5Fill style={{ color: "#ffffff", fontSize: "40px" }} />
                        <label >Settings</label>
                        {/* <select>
                            <option></option>
                            <option value="#">Profile</option>
                            <option value="#">logOut</option>

                        </select> */}

                    </Link>
               </Container>
            </Nav>
            <Outlet />
            <Footer ></Footer>
        </div>
    )
}
