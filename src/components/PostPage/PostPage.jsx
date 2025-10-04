import PostItem from '../PostItem/PostItem';
import { Link, useParams } from 'react-router-dom';
import XmarkIcon from '@gravity-ui/icons/svgs/xmark.svg';
import './PostPage.css';

function PostPage({ posts, onDelete }) {
    const { id } = useParams();
    const currentPost = posts.find(post => String(post.id) === id);

    return (
        <div className="post-page">
            <Link to='/' className='close-link'>
                <img src={XmarkIcon} alt="close" className="close-icon" />
            </Link>
            <PostItem data={currentPost} />
            <div className="button-wrapper">
                <Link to={`/post/${id}/update`}>
                    <button className="update-btn btn">Изменить</button>
                </Link>
                <Link to='/' onClick={() => onDelete(id)}>
                    <button className="delete-btn btn">Удалить</button>
                </Link>
            </div>
        </div>
    )
}

export default PostPage;