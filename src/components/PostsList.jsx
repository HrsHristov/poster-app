import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
    return (
        <ul className={classes.posts}>
            <Post author="Hristo" body="React.js" />
            <Post author="Denitsa" body="TypeScript" />
        </ul>
    );
};

export default PostsList;
