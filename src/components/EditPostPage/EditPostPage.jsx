import './EditPostPage.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import XmarkIcon from '@gravity-ui/icons/svgs/xmark.svg';
import { useState } from 'react';

function EditPostPage({ posts, onEdit }) {
    const { id } = useParams();
    const currentPost = posts.find(post => String(post.id) === id);

    const [content, setContent] = useState(currentPost.content);

    function handleChange(e) {
        setContent(e.target.value)
    }

    const navigate = useNavigate();

    //Обработка редактирования поста
    async function handleEdit(e, id) {
        e.preventDefault();
        await onEdit(e, id);
        navigate('/');
    }

    return (
        <div className="edit-post-block">
            <div className="edit-post-header">
                <span className="create-post-title">Редактировать публикацию</span>
                <Link to={`/posts/${id}`} className='close-link'>
                    <img src={XmarkIcon} alt="close" className="close-icon" />
                </Link>
            </div>

            <form className="edit-post-form" onSubmit={(e)=>handleEdit(e, id)}>
                <textarea
                    type="text"
                    className="content-input"
                    name='content'
                    value={content}
                    onChange={handleChange}
                    required />
                <button className="save-btn btn" type='submit'>Сохранить</button>
            </form>
        </div>
    )
}

export default EditPostPage;