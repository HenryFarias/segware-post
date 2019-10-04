import React from "react";

import {Link, Redirect} from "react-router-dom";
import {Container, Logo, Nav} from "./styles";
import {MdAssignment, MdExitToApp, MdPersonAdd} from "react-icons/md";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/user-reducer";
import Can from "../Can";

export default function Menu(props) {

    const dispatch = useDispatch();

    const logoff = () => {
        dispatch(userActions.updateToken(null));
        return <Redirect to="/"/>;
        // props.history.push("/");
    };

    return (
        <Container>
            <Logo/>
            <Nav>
                <Link to="/posts" title="Posts">
                    <MdAssignment/>
                </Link>
                <Can roles={'ROLE_USER_GRANT_ALL'}>
                    <Link to="/users" href="#" title="Add Users">
                        <MdPersonAdd/>
                    </Link>
                </Can>
            </Nav>

            <Link onClick={logoff} to="/" title="Exit">
                <MdExitToApp/>
            </Link>
        </Container>
    );
}
