import React from "react";

import {Avatar, BoxText, Container, RowActions, RowInfos} from "./styles";
import Button from "../../styles/components/Button";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {postActions} from "../../redux/post-reducer";

export default function FormAddPost({handleClose}) {

    const dispatch = useDispatch();

    const save = (values) => {
        dispatch(postActions.save({...values}));
        handleClose()
    };

    return (
        <Container>
            <Formik
                initialValues={{description: ''}}
                onSubmit={(values) => {save(values)}}
                render={({handleSubmit, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                        <RowInfos>
                            <Avatar src="https://api.adorable.io/avatars/50/abott@adorable.png"/>
                            <BoxText name="description" onChange={handleChange} placeholder="O que você está pensando?"/>
                        </RowInfos>

                        <RowActions>
                            <Button onClick={handleClose} color="gray" filled>
                                Fechar
                            </Button>
                            <Button>Enviar</Button>
                        </RowActions>
                    </form>
                )}
            />
        </Container>
    );
}
