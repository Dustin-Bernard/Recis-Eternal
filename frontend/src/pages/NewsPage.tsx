type PostInfo = {
  _id: string;
  title: string;
  desc: string;
  cover: string;
  content: string;
  createdAt: string;
  author: {
    username: string;
  };
};

import { useEffect, useState } from "react";
import { Card, Button, Image, Row, Col, Container } from "react-bootstrap";
import '../main.css';
import { Link } from "react-router-dom";


export default function NewsPage() {

  

  const [posts, setPosts] = useState<PostInfo[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://recis-eternal-official-api.vercel.app/post");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchPosts();
  }, []);
  
 
  return (
    <div className="background-color">
    <Container className="padding-top">
    <Row xs={1} md={2} lg={3} xl={4} >
      {posts.length > 0 &&
        posts.map((post) => {
          return (
          <Col className="newspage" key={post._id} >
            <Link to={`/post/${post._id}`}>
            <Card style={{ width: '25rem' }} className="card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Image src={`http://localhost:3001/${post.cover}`} thumbnail/>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
               Author : {post.author.username} 
              </Card.Text>
              <Card.Text>
                {post.desc}
              </Card.Text>
              <Button variant="primary" >View</Button>
            </Card.Body>
          </Card>
          </Link>
          </Col>
);
        })}
    </Row>
    </Container>
    </div>
  );
}

/* <Post
  _id={post._id}
  title={post.title}
  desc={post.desc}
  cover={post.cover}
  content={post.content}
  createdAt={post.createdAt}
  author={author}
/> 
*/