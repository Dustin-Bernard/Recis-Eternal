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

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

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
        <>
          {postInfo && (
            <div>
              <h1>{postInfo.title}</h1>
              <p>{postInfo.desc}</p>
              <img src={`http://localhost:3001/${postInfo.cover}`} alt="" />
              <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(postInfo.content)}} />
            </div>
            
          )}
        </>
      );
    } 

   