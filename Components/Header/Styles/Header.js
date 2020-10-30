import styled from "styled-components/macro";
import {Link as ReactRouterLink} from "react-router-dom";
import Home from "../../../Assets/Images/misc/home-bg.jpg";
export const Background = styled.div`
display:flex;
flex-direction:column;
background: url(${({src})=>(src?src:Home)}) top left / cover no-repeat;
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color:#e50914;
    width:84px;
    height: fit-content;
    color: white;
    border: none;
    font-size: 15px;
    border-radius:3px;
    padding:8px 17px;
    cursor: pointer;
    text-decoration:none;
    box-sizing:border-box;

    &:hover{
        background-color: #f40612;
    }
`; 

export const Container = styled.div`
display:flex;
padding:18px 0;
justify-content:space-between;
align-items:center;
height:64px;
margin: 0 56px;
a {
    display:flex;
}

@media (max-width: 1000px){
    margin: 0 30px;
}
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    object-fit:contain;

    @media (min-width: 1449px){
        height:45px;
        width: 167px;
    }
`;

export const RouteFrame = styled.div`
`;