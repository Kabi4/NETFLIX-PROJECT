import React, { useState, useContext, createContext } from 'react';
import Close from './../../Assets/Images/icons/close.png';
import {
    Text,
    Title,
    Container,
    Group,
    Meta,
    Item,
    SubTitle,
    Image,
    Entities,
    Maturity,
    FeatureClose,
    FeatureTitle,
    FeatureText,
    Content,
    Feature,
} from './Styles/Card';

export const FeatureContext = createContext();
export default function Card({ children, ...props }) {
    const [showDetails, setShowDetails] = useState(false);
    const [itemDetail, setItemDetail] = useState({});
    return (
        <FeatureContext.Provider
            value={{ showDetails, setShowDetails, itemDetail, setItemDetail }}
        >
            <Container {...props}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = ({ children, ...props }) => {
    return <Group {...props}>{children}</Group>;
};

Card.Title = ({ children, ...props }) => {
    return <Title {...props}>{children}</Title>;
};
Card.SubTitle = ({ children, ...props }) => {
    return <SubTitle {...props}>{children}</SubTitle>;
};
Card.Text = ({ children, ...props }) => {
    return <Text {...props}>{children}</Text>;
};

Card.Feature = function CardFeature({ children, category, ...props }) {
    const { showDetails, setShowDetails, itemDetail } = useContext(
        FeatureContext
    );
    return showDetails ? (
        <Feature
            {...props}
            src={`/images/${category}/${itemDetail.genre}/${itemDetail.slug}/large.jpg`}
        >
            <Content>
                <FeatureTitle>{itemDetail.title}</FeatureTitle>
                <FeatureText>{itemDetail.title}</FeatureText>
                <FeatureClose onClick={() => setShowDetails(false)}>
                    <img src={Close} alt="Close" />
                </FeatureClose>
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemDetail.maturity}>
                        {itemDetail.maturity < 12 ? 'PG' : itemDetail.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemDetail.genre[0].toUpperCase() +
                            itemDetail.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null;
};

Card.Entities = ({ children, ...props }) => {
    return <Entities {...props}>{children}</Entities>;
};

Card.Meta = ({ children, ...props }) => {
    return <Meta {...props}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...props }) {
    const { setShowDetails, setItemDetail } = useContext(FeatureContext);
    return (
        <Item
            onClick={() => {
                setItemDetail(item);
                setShowDetails(true);
            }}
            {...props}
        >
            {children}
        </Item>
    );
};

Card.Image = ({ ...props }) => {
    return <Image {...props} />;
};
