import React, { useEffect, useState } from 'react';
import SelectProfileContainer from '../Profile/Profiles';
import firebase from '../../lib/firebase';
import { Card, Player, Header, Loading } from '../../Components';
import HomeImage from '../../Assets/Images/misc/joker1.jpg';
import Logo from '../../logo.svg';
import FooterMain from '../../Container/Footer/Footer';
import * as Routes from '../../Routes/Routes';
import VedioPlay from '../../Assets/Videos/bunny.mp4';
import ReactDOM from 'react-dom';
import Fuse from 'fuse.js';
export default function BrowseContianer({ slides }) {
    const user = firebase.auth().currentUser || {};
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => {
            return item;
        });
        if (searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm, category, slideRows, slides]);
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
                        <Header.TextLink
                            active={category === 'series' ? true : false}
                            onClick={() => {
                                if (category !== 'series') {
                                    setCategory('series');
                                }
                            }}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? true : false}
                            onClick={() => {
                                if (category !== 'films') {
                                    setCategory('films');
                                }
                            }}
                        >
                            Films
                        </Header.TextLink>
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
                    <Header.PlayButton
                        onClick={() => {
                            ReactDOM.createPortal(
                                <div>
                                    <iframe
                                        title="JokerTeaser"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/aMsK3ZQg2KU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>,
                                document.body
                            );
                        }}
                    >
                        Play
                    </Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows?.map((slideItem) => {
                    return (
                        <Card
                            key={`${category}-${slideItem?.Genre?.toLowerCase()}`}
                        >
                            <Card.Title>{slideItem?.Genre}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map((item) => {
                                    return (
                                        <Card.Item key={item.docId} item={item}>
                                            <Card.Image
                                                src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                            />
                                            <Card.Meta>
                                                <Card.SubTitle>
                                                    {item.title}
                                                </Card.SubTitle>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                            </Card.Meta>
                                        </Card.Item>
                                    );
                                })}
                            </Card.Entities>
                            <Card.Feature category={category}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video src={VedioPlay} />
                                </Player>
                            </Card.Feature>
                        </Card>
                    );
                })}
            </Card.Group>
            <FooterMain />
        </>
    ) : (
        <SelectProfileContainer user={user} setprofile={setProfile} />
    );
}
