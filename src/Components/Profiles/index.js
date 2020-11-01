import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './Styles/Profiles';
import Loading from './../../Assets/Images/misc/loading.gif';
import P1 from './../../Assets/Images/users/1.png';
import P2 from './../../Assets/Images/users/2.png';
import P3 from './../../Assets/Images/users/3.png';
import P4 from './../../Assets/Images/users/4.png';
import P5 from './../../Assets/Images/users/5.png';
const profiles = [P1, P2, P3, P4, P5];
export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? profiles[parseInt(src) - 1] : Loading} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};
