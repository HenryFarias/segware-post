import React from "react";

import {Container, HeaderTitle} from "./styles";
import Button from "../../styles/components/Button";

import {MdAdd} from "react-icons/md";
import Can from "../Can";

export default function Header({title, handleActionButton}) {
    return (
        <Container>
            <HeaderTitle>{title}</HeaderTitle>

            <Can roles={'ROLE_POST_GRANT_ALL ROLE_POST_WRITE_READ'}>
                <Button onClick={handleActionButton}>
                    <MdAdd/> New
                </Button>
            </Can>
        </Container>
    );
}
