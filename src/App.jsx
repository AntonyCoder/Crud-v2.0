import './App.css';
import CreatePostPage from './components/CreatePostPage/CreatePostPage';
import MainPage from './components/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getPosts, pushPost, deletePost, editPost } from './api/api';
import PostPage from './components/PostPage/PostPage';
import EditPostPage from './components/EditPostPage/EditPostPage';

function App() {
    const [posts, setPosts] = useState([]);

    //Отрисовка всех постов на странице 
    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts();
            setPosts(posts);
        }

        fetchData();
    }, [])

    //Обработка отправки нового поста
    async function handleSubmitPost(e) {
        let data = getFormData(e)

        await pushPost(data);
        await updatedPosts();
    }

    //Обработка удаления поста
    async function handleDeletePost(id) {
        await deletePost(id);
        await updatedPosts()
    }

    //Обработка редактирования поста
    async function handleEditPost(e, id) {
        let data = getFormData(e);
        data = {
            id,
            ...data
        }

        await editPost(data);
        await updatedPosts();
    }

    //Обновление списка постов
    async function updatedPosts() {
        const updatedPosts = await getPosts();
        setPosts(updatedPosts);
    }

    //Функция для получения объекта формы
    function getFormData(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        let data = Object.fromEntries(formData);
        form.reset();

        return data;
    }

    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<MainPage posts={posts} />} />
                <Route path='/posts/new' element={<CreatePostPage onSubmit={handleSubmitPost} />} />
                <Route path='/posts/:id' element={<PostPage posts={posts} onDelete={handleDeletePost} />} />
                <Route path='/post/:id/update' element={<EditPostPage posts={posts} onEdit={handleEditPost} />} />
            </Routes>
        </div>


    )
}

export default App;