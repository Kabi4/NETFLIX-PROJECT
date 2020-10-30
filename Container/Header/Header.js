import React from 'react'
import * as Routes from "./../../Routes/Routes";
import {Header} from "../../Components/index";
import Logo from "../../logo.svg";
function HeaderMain({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.Home} src={Logo} alt={"netflix"}/>
                <Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderMain
