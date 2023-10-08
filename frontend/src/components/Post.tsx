import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";


interface PostProps {
    _id: string;
    title: string;
    desc: string;
    cover: string;
    content: string;
    createdAt: string; // or Date if createdAt is a Date object
    author: { username: string }; // Assuming author is an object with a username property
  }
export default function Post(props: PostProps) {
    const { _id, title, desc, cover, createdAt, author } = props;
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:3001/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h1>{title}</h1>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}