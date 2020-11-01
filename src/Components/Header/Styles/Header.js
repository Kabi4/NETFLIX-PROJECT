import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import Home from '../../../Assets/Images/misc/home-bg.jpg';
export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? src : Home)}) top left / cover
        no-repeat;
    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) =>
            dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: none;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    margin: 0 56px;
    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    object-fit: contain;
    margin-right: 20px;
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const RouteFrame = styled.div``;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.h1`
    color: white;
    font-size: 22px;
    line-height: normal;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0 0 20px 0;
`;

export const FeatureText = styled.p`
    color: white;
    font-size: 50px;
    font-weight: bold;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0 0 20px 0;
`;

export const Link = styled.p`
    color: #e50914;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '900' : '600')};
    cursor: pointer;
    &:hover {
        font-weight: 900;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    outline: none;
    height: 32px;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    outline: none;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Search = styled.div`
    display: flex;
    z-index: 200;
    align-items: center;
    outline: none;
    svg {
        color: white;
        cursor: pointer;
    }
    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;
    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    ${Group} {
        margin-bottom: 10px;
        &:last-of-type {
            margin-bottom: 0;
        }
        ${Link}, ${Picture} {
            cursor: default;
        }
    }
    button {
        margin-right: 10px;
    }
    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
    button {
        cursor: pointer;
    }
    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
    &:active > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
    &:focus > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    display: ${({ active }) => (active ? 'block;' : 'none;')};
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    outline: none;
    backface-visibility: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
    &:active {
        background-color: #e50914;
        transform: scale(1.08);
    }
`;
