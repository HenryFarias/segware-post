import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import FormAddPost from "../../components/FormAddPost";
import InfiniteScroll from 'react-infinite-scroller';
import {useDispatch, useSelector} from "react-redux";
import {postActions, postSelectors} from "../../redux/post-reducer";
import Can from "../../components/Can";

export default function Posts() {
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();
    const posts = useSelector(postSelectors.getPosts);
    const hasMore = useSelector(postSelectors.getHasMore);

    const loadPosts = async (page) => {
        page = page ? page : 1;
        dispatch(postActions.list(page));
    };

    useEffect(() => {
        loadPosts();
    }, []);

    function handleOpen() {
        return setOpenModal(true);
    }

    function handleClose() {
        return setOpenModal(false);
    }

    return (
        <>
            <Can roles={"ROLE_POST_GRANT_ALL ROLE_POST_WRITE_READ ROLE_POST_READ"}>
                <Header title="Posts" handleActionButton={handleOpen}/>

                { posts && posts.length > 0 ?
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={loadPosts}
                        hasMore={hasMore}
                        loader={<h4>Carregando...</h4>}
                    >
                        {posts.map((post, key) => {
                           return <Card key={key} post={post} />;
                        })}
                    </InfiniteScroll>
                : "Nenhum registro encontrado" }

                {openModal && (
                    <Modal handleClose={handleClose}>
                        <FormAddPost handleClose={handleClose}/>
                    </Modal>
                )}
            </Can>
        </>
    );
}
