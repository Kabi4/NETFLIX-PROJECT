import React, { useEffect, useState } from 'react';
import SelectProfileContainer from '../Profile/Profiles';
import firebase from '../../lib/firebase';
import { Header, Loading } from '../../Components';
import HomeImage from '../../Assets/Images/misc/joker1.jpg';
import Logo from '../../logo.svg';
import * as Routes from '../../Routes/Routes';
export default function BrowseContianer() {
    const user = firebase.auth().currentUser || {};
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const load = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearTimeout(load);
        };
    }, [profile.displayName]);
    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header dontShowOnSmallViewPort={true} src={HomeImage}>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={Routes.Home} src={Logo}></Header.Logo>
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        ></Header.Search>
                        <Header.Profile>
                            <Header.Picture src={profile.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={profile.photoURL} />
                                    <Header.TextLink>
                                        {profile.displayName}
                                    </Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink
                                        onClick={() => {
                                            firebase.auth().signOut();
                                        }}
                                    >
                                        Sign Out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureText>Watch Joker Now</Header.FeatureText>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setprofile={setProfile} />
    );
}
