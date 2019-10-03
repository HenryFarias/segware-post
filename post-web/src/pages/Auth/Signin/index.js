import React, {useEffect} from "react";
import {Container, SignForm} from "./styles";
import Button from "../../../styles/components/Button";
import {Formik} from "formik";
import {userActions, userSelectors} from "../../../redux/user-reducer";
import {useDispatch, useSelector} from "react-redux";

export default function Signin(props) {

    const dispatch = useDispatch();
    const user = useSelector(userSelectors.getUser);

    useEffect(() => {
        if (user && user.token) {
            props.history.push("/posts");
        }
    }, [user]);

    const login = (values) => {
        dispatch(userActions.login({...values}));
    };

    return (
        <Container>
            <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={(values) => {login(values)}}
                render={({handleSubmit, handleChange}) => (
                    <SignForm>
                        <form onSubmit={handleSubmit}>
                            <h1>Boas Vindas</h1>

                            <span>E-MAIL</span>
                            <input name="username" onChange={handleChange} type="text"/>

                            <span>SENHA</span>
                            <input name="password" onChange={handleChange} type="password"/>

                            <Button size="big">Entrar</Button>
                        </form>
                    </SignForm>
                )}
            />
        </Container>
    );
}