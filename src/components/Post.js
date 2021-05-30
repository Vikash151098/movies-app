import './Post.css';
const Post = ({ post, onAdd }) => {

    return (
        <div className="post col-4 col-s-6">
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;