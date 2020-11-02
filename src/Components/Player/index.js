import React, { useState, useContext, createContext } from 'react';
import { Container, Button, Overlay, Inner, Close } from './Styles/Player';
import ReactDOM from 'react-dom';
//import Closeing from './../../Assets/Images/icons/close.png'{/*src={Closeing}*/};
export const PlayerContext = createContext();
export default function Player({ children, ...props }) {
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...props}>{children}</Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...props }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    return showPlayer
        ? ReactDOM.createPortal(
              <Overlay {...props} onClick={() => setShowPlayer(false)}>
                  <Inner>
                      <video id="netflix-player" controls>
                          <source src={src} type="video/mp4" />
                      </video>
                      <Close></Close>
                  </Inner>
              </Overlay>,
              document.body
          )
        : null;
};

Player.Button = function PlayerButton({ ...props }) {
    const { setShowPlayer } = useContext(PlayerContext);
    return (
        <Button
            {...props}
            onClick={() => setShowPlayer((prevState) => !prevState)}
        >
            Play
        </Button>
    );
};
