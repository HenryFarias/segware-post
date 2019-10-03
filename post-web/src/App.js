import React from "react";
import Routes from "./routes";
import ReactLoading from "react-loading";

import {GlobalStyle} from "./styles/global";
import {useSelector} from "react-redux";
import {selectors} from "./redux/flow";
import {postTypes} from "./redux/post-reducer";

function App(props) {

    const loadingList = useSelector((state) => selectors.isLoadingByType(state, postTypes.LIST));
    const loadingSave = useSelector((state) => selectors.isLoadingByType(state, postTypes.SAVE));

    return (
        <>
            <Routes history={props.history}/>
            <GlobalStyle/>

            { (loadingList || loadingSave) && <ReactLoading type={"cylon"} color={"#a18aff"} height={667} width={375}/> }
        </>
    );
}

export default App;
