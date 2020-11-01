import React from 'react';
import * as Routes from '../../Routes/Routes';
import Logo from '../../logo.svg';
import { Header, Profiles } from '../../Components';
export default function SelectProfileContainer({ user, setprofile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={Routes.Home} src={Logo} alt="Netflix" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => {
                            setprofile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            });
                        }}
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
}
