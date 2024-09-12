import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

const PostsList = () => {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setenteredAuthor] = useState("");

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setenteredAuthor(event.target.value);
    };

    return (
        <>
            <Modal>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Icaka" body="Next.js up ahead" />
            </ul>
        </>
    );
};

export default PostsList;
