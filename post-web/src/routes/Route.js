import React from "react";
import {Redirect, Route} from "react-router-dom";
import _ from "lodash";
import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";
import {getSessionStorage} from "../helpers/storage-helper";

export default function RouteWrapper({component: Component, isPrivate, ...rest}) {

    const token = getSessionStorage("user") ? getSessionStorage("user").token : null;

    const signed = !_.isNil(token);

    if (!signed && isPrivate) {
        return <Redirect to="/"/>;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/posts"/>;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
