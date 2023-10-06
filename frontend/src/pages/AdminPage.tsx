import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import 'react-quill/dist/quill.snow.css';
import Editor from "../components/Editor";





export default function AdminPage() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState([]);
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);
  
 
 
  // Fungsi untuk logout
  function logout() {
    // Hapus token dari cookie atau localStorage
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem('token');

    // Redirect ke halaman login
    navigate('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Token tidak tersedia, arahkan ke halaman login
      alert('Anda harus login untuk mengakses halaman admin.');
      navigate('/login');
    } else {
      // Lakukan permintaan ke halaman admin dengan token
      async function fetchAdminPage() {

        

        try {
          const response = await fetch("http://localhost:3001/admin", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          if (response.ok) {
            setIsAdmin(true); // Set isAdmin menjadi true jika akses admin berhasil
          } else {
            // Jika permintaan gagal atau token tidak valid, arahkan kembali ke halaman login
            alert('Akses ditolak. Anda akan kembali ke halaman login.');
            // Hapus token dari cookie atau localStorage
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            localStorage.removeItem('token');
            navigate('/login');
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }

      fetchAdminPage();
    }
  }, [navigate]);


  async function createNewPost(ev: React.FormEvent) {
    const data = new FormData();
    data.set('title', title);
    data.set('desc', desc);
    data.set('content', content);
    if (file) {
       data.set('file', file[0]);
    }
    ev.preventDefault();
    console.log(file);
    const response = await fetch('http://localhost:3001/post', {
       method: 'POST',
       body: data,
       credentials: 'include',
    }); 
     
    if (response.ok) {
       setRedirect(true);
    }
   }
   
  if (redirect) {
    navigate('/news');
  };



  // Tampilkan halaman admin jika isAdmin adalah true
  return (
    isAdmin && (
      <>
        <Button onClick={logout}>LOGOUT</Button>
        <Container className="my-5 form-container">
          <Form id="admin-form-parent" onSubmit={createNewPost} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>News Title</Form.Label>
              <Form.Control placeholder="Enter News Title " type="title"
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
              <Form.Text className="text-muted">
                ex : RECIS A MENANG TELAK ATAS BUDI MULIA DALAM ETERNAL CUP!!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>News Description</Form.Label>
              <Form.Control as="textarea" rows={3} type="desc" placeholder={'description'} value={desc} 
              onChange={ev => setDesc(ev.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>News Picture</Form.Label>
            </Form.Group>
            <Editor value={content} onChange={setContent} />
            <Button style={{ marginTop: '10px' }} variant="success" type="submit">
              Post
            </Button>
          </Form>
        </Container>
      </>
    )
  );
}
