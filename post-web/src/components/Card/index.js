import React, { useState, useEffect } from "react";
import {Avatar, CardContent, CardHeader, CardHeaderInfo, CardActions, Container, Title, ButtonIcon, LikeIcon} from "./style";
import {MdFavoriteBorder, MdFavorite, MdDelete} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../../redux/user-reducer";
import {postActions} from "../../redux/post-reducer";
import Can from "../Can";

function Card(props) {

    const [upVote, setUpVote] = useState(null);
    const [upVoteNumber, setUpVoteNumber] = useState(0);
    const user = useSelector(userSelectors.getUser);
    const post = props.post;
    const dispatch = useDispatch();

    useEffect(() => {
        const upVote = post.usersUpVotes.filter((userUpVote) => {
            return userUpVote.id === user.id;
        });
        setUpVoteNumber(post.usersUpVotes.length);
        setUpVote(upVote.length > 0);
    }, [post]);

    const changeUpVote = () => {
        setUpVote(!upVote);
        if (upVote) {
            dispatch(postActions.removeUpvote(post.id));
            setUpVoteNumber(upVoteNumber - 1)
        } else {
            dispatch(postActions.addUpvote(post.id));
            setUpVoteNumber(upVoteNumber + 1)
        }
    };

    const deletePost = () => {
        dispatch(postActions.deletePost(post.id));
    };

    return (
        <Container>
            <CardHeader>
                <CardHeaderInfo>
                    <Avatar src="https://api.adorable.io/avatars/50/abott@adorable.png"/>
                    <Title>{ post.user.name}</Title>

                    <LikeIconDefault upVote={upVote} upVoteNumber={upVoteNumber} changeUpVote={changeUpVote} />
                    <Can roles={'ROLE_POST_GRANT_ALL'}>
                        <ButtonIcon>
                            <MdDelete onClick={deletePost} />
                        </ButtonIcon>
                    </Can>
                </CardHeaderInfo>
            </CardHeader>

            <CardContent>{post.description}</CardContent>
        </Container>
    );
}

const LikeIconDefault = ({ upVote, upVoteNumber, changeUpVote }) => (
    <LikeIcon upVote={upVote}>
        {upVote ? <MdFavorite onClick={changeUpVote} /> : <MdFavoriteBorder onClick={changeUpVote} />}
        {upVoteNumber}
    </LikeIcon>
)

export default Card;
