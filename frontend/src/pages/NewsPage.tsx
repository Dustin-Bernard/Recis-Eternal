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


export default function NewsPage() {

  

  const [posts, setPosts] = useState<PostInfo[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/post")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className="background-color">
    <Container className="padding-top">
    <Row xs={1} md={2} lg={3} xl={4}>
      {posts.length > 0 &&
        posts.map((post) => {
          return (
          <Col className="newspage">
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
              <Button variant="primary"  >View</Button>
            </Card.Body>
          </Card>
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