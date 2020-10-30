import React from 'react'
import {Link as RouteLink} from "react-router-dom";
import {Background,Container,Logo,ButtonLink} from "./Styles/Header";
function Header({bg=true,children,...props}) {
    return bg?<Background {...props} >{children}</Background> : children;
}

Header.Frame = ({children,...props})=>{
return <Container {...props} >{children}</Container>
}

Header.Logo = ({to,children,...props})=>{
    return (
        <RouteLink to={to}>
            <Logo {...props}>{children}</Logo>
        </RouteLink>
    )
}

Header.ButtonLink = ({children,...props})=>{
    return <ButtonLink {...props} >{children}</ButtonLink>
}


export default Header; 
