import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
    Picture,
    Dropdown,
    Link,
    FeatureText,
    Text,
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    Group,
    Profile,
    Search,
    SearchIcon,
    SearchInput,
    Backdrop,
    PlayButton,
} from './Styles/Header';
import SearchIco from './../../Assets/Images/icons/search.png';
import P1 from './../../Assets/Images/users/1.png';
import P2 from './../../Assets/Images/users/2.png';
import P3 from './../../Assets/Images/users/3.png';
import P4 from './../../Assets/Images/users/4.png';
import P5 from './../../Assets/Images/users/5.png';
const profiles = [P1, P2, P3, P4, P5];
function Header({ bg = true, children, ...props }) {
    return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Frame = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

Header.Group = ({ children, ...props }) => {
    return <Group {...props}>{children}</Group>;
};

Header.Logo = ({ to, children, ...props }) => {
    return (
        <RouteLink to={to}>
            <Logo {...props}>{children}</Logo>
        </RouteLink>
    );
};

Header.Feature = ({ children, ...props }) => {
    return <Feature {...props}>{children}</Feature>;
};

Header.ButtonLink = ({ children, ...props }) => {
    return <ButtonLink {...props}>{children}</ButtonLink>;
};

Header.Text = ({ children, ...props }) => {
    return <Text {...props}>{children}</Text>;
};

Header.FeatureText = ({ children, ...props }) => {
    return <FeatureText {...props}>{children}</FeatureText>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.Picture = function HeaderPicture({ children, src, ...restProps }) {
    return (
        <Picture {...restProps} src={profiles[parseInt(src) - 1]}>
            {children}
        </Picture>
    );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    children,
    ...restProps
}) {
    const [serachActive, setSearchActive] = useState(false);
    return (
        <>
            <Search {...restProps}>
                <SearchIcon
                    onClick={() => {
                        setSearchActive((prevState) => true);
                    }}
                >
                    <img src={SearchIco} alt={'Search'} />
                    <SearchInput
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                        placeholder="Search films and series"
                        active={serachActive}
                    />
                </SearchIcon>
                {children}
            </Search>
            <Backdrop
                active={serachActive}
                onClick={() => {
                    setSearchActive(false);
                }}
            />
        </>
    );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};
export default Header;
