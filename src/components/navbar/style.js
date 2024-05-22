import styled from "styled-components";


export const Nav = styled.nav`
height: 120px;
background-color:#567086;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: white;
`
export const Footer = styled.nav`
height: 80px;
background-color:#567086;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: white;
`
export const Container = styled.div`
height: 100%;
background-color:#567086;
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 2.5rem;
align-items: center;
color: white;
`

export const Link = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 2rem;
height: 100%;
box-sizing: border-box;
&:hover{
    background-color: #F5A623;
}
`