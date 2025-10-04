import formatDate from '../../helpers/formatDate';
import './PostItem.css';


function PostItem({ data }) {
    if (!data) return null;
    const { content, created, id } = data;

    const displayDate = formatDate(created);

    return (
        <div className="post-block" data-id={id}>
            <div className="post-header">
                <span className="post-id">id:{id}</span>
                <span className="created">создан: {displayDate}</span>
            </div>
            <div className="content">{content}</div>
        </div>
    )
}

export default PostItem;