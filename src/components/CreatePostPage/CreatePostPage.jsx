import './CreatePostPage.css';
import XmarkIcon from '@gravity-ui/icons/svgs/xmark.svg';
import { Link, useNavigate } from 'react-router-dom'

function CreatePostPage({ onSubmit }) {

    const navigate = useNavigate();

    //Обработка публикации поста
    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit(e);
        navigate('/');
    }
    
    return (
        <div className="create-post-block">
            <div className="create-post-header">
                <span className="create-post-title">Создать пост</span>
                <Link to='/' className='close-link'>
                    <img src={XmarkIcon} alt="close" className="close-icon" />
                </Link>
            </div>

            <form className="create-post-form" onSubmit={handleSubmit}>
                <textarea type="text" className="content-input" name='content' required/>
                <button className="send-btn btn" type='submit'>Опубликовать</button>
            </form>
        </div>
    )
}

export default CreatePostPage;