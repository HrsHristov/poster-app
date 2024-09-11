import Post from "./Post";

import classes from "./PostsList.module.css";

const PostsList = () => {
    return (
        <ul className={classes.posts}>
            <Post author="Hristo" body="React.js refresher" />
            <Post author="Icaka" body="Next.js up ahead" />
        </ul>
    );
};

export default PostsList;
