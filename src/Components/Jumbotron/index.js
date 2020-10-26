import React from 'react'
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './Styles/Jumbotron'


const Jumbotron = ({children,direction,...props}) => {
    return (
        <Item {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JunbotronContainer({children,...props}){
    return <Container {...props} >{children}</Container>
}

Jumbotron.Pane = function JumbotronPane ({children,...props}){
    return <Pane {...props} >{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle ({children,...props}){
    return <Title {...props} >{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle ({children,...props}){
    return <SubTitle {...props} >{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage ({children,...props}){
    console.log(props)
    return <Image {...props} >{children}</Image>
}

export default Jumbotron;
