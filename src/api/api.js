const url = import.meta.env.VITE_API_URL;

//Получение всех постов
async function getPosts() {
    try {
        const response = await fetch(`${url}/posts`);
        const posts = await response.json();

        return posts
    } catch (error) {
        console.error(error);
    }
}

//Создание нового поста
async function pushPost(data) {
    try {
        const response = await fetch(`${url}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

    } catch (error) {
        console.error(error);
    }
}

//Удаление конкретного поста по id
async function deletePost(id) {
    try {
        const response = await fetch(`${url}/posts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error(error);
    }
}

//Редактирование конкретного поста
async function editPost(data) {
    try {
        const response = await fetch(`${url}/posts/${data.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    } catch (error) {
        console.error(error);
    }
}

export { getPosts, pushPost, deletePost, editPost }

