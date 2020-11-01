import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './Styles/Loading';
import P1 from './../../Assets/Images/users/1.png';
import P2 from './../../Assets/Images/users/2.png';
import P3 from './../../Assets/Images/users/3.png';
import P4 from './../../Assets/Images/users/4.png';
import P5 from './../../Assets/Images/users/5.png';
const profiles = [P1, P2, P3, P4, P5];

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture
                src={profiles[parseInt(src) - 1]}
                data-testid="loading-picture"
            />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
};
