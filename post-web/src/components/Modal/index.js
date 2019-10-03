import React from "react";

import {Container, ModalOverflow, ButtonIcon} from "./styles";
import {MdClose} from "react-icons/md";

export default function Modal({children, handleClose}) {
    return (
        <>
            <Container>
                {children}

                <ButtonIcon onClick={handleClose}>
                    <MdClose/>
                </ButtonIcon>
            </Container>
            <ModalOverflow/>
        </>
    );
}
