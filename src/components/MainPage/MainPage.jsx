import './MainPage.css';
import { Link } from 'react-router-dom';
import PostItem from '../PostItem/PostItem';

function MainPage({ posts }) {

    return (
        <>
            <header className="header">
                <Link to='/posts/new'>
                    <button className="btn create-post">
                        Создать пост
                    </button>
                </Link>
            </header>

            <main className="main">
                {posts.map(post => (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <PostItem data={post} />
                    </Link>

                ))}
            </main>
        </>
    )
}

export default MainPage;