// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom";


// interface PostInfo {
//     _id: string;
//     title: string;
//     desc: string;
//     cover: string;
//     content: string;
//     createdAt: string;
//     author: {
//       username: string;
//     };
//   };

  
// export default function PostPage () {
//     const [postInfo, setPostInfo] = useState<PostInfo | null>(null);
//     const { id } = useParams<{ id: string }>();

//     useEffect(() => {
//         fetch(`http://localhost:3001/posts/${id}`)
//           .then(response => {
//             response.json().then(postInfo => {
//               setPostInfo(postInfo);
//             });
//           });
//       }, [id]);

      

//       return (
//         <>
//           <h1>Hello</h1>
//           {postInfo && (
//             <div>
//               <h2>{postInfo.title}</h2>
//               <p>{postInfo.content}</p>
              
//             </div>
//           )}
//         </>
//       );
//     } 

import { useEffect, useState } from "react"http://localhost:3001/
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
// import { Button, Card, Image } from "react-bootstrap";

interface PostInfo {
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

  
export default function PostPage () {
    const [postInfo, setPostInfo] = useState<PostInfo | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`http://localhost:3001/post/${id}`)
          .then(response => {
            response.json().then(postInfo => {
              setPostInfo(postInfo);
            });
          });
      }, [id]);

      

      return (
        <div className="background-color">
          {postInfo && (
            <div>
              <h1>{postInfo.title}</h1>
              <p>{postInfo.desc}</p>
              <img src={`http://localhost:3001/${postInfo.cover}`} alt="" />
              <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(postInfo.content)}} />
            </div>

    //         <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //   <Image src={`http://localhost:3001/${postInfo.cover}`} thumbnail />
    //     <Card.Title>{postInfo.title}</Card.Title>
    //     <Card.Text>
    //     {postInfo.desc}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //     <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(postInfo.content)}} />
    //   </Card.Body>
    // </Card>
            
          )}
        </div>
      );
    } 

   