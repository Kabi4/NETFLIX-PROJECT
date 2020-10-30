import React from 'react';
import {Row,Container,Column,Link,Text,Title,Break} from "./Styles/Footer";

const Footer = ({children,...props}) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
};

Footer.Row = ({children,...props})=>{
    return(
        <Row {...props}>
            {children}
        </Row>
    )
}

Footer.Column = ({children,...props})=>{
    return(
        <Column {...props}>
            {children}
        </Column>
    )
}

Footer.Link = ({children,...props})=>{
    return(
        <Link {...props}>
            {children}
        </Link>
    )
}

Footer.Title = ({children,...props})=>{
    return(
        <Title {...props}>
            {children}
        </Title>
    )
}

Footer.Text = ({children,...props})=>{
    return(
        <Text {...props}>
            {children}
        </Text>
    )
}

Footer.Break = ({children,...props})=>{
    return(
        <Break {...props}>
            {children}
        </Break>
    )
}

export default Footer;
