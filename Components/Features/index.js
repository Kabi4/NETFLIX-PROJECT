import React  from 'react'
import {Container,Title,Subtitle} from "./Styles/feature"
export default function Feature({children,...props}) {
    return <Container {...props}>{children}</Container>
}

Feature.Title = function FeatureTitle({children,...props}){
    return <Title {...props}>{children}</Title>
}

Feature.Subtitle = function FeatureSubtitle({children,...props}){
    return <Subtitle {...props}>{children}</Subtitle>
}

