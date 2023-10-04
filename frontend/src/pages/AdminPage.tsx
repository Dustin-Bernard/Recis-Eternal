import { useEffect } from "react";
import "./LoginPage";
import { useNavigate } from "react-router-dom";
import AdminComponent from "../components/AdminComponent";



export default function AdminPage() {
  const navigate = useNavigate();

  



  useEffect(() => {
  // Mendapatkan token dari localStorage
  const token = localStorage.getItem("token");

  // Jika token tidak ada, arahkan pengguna kembali ke halaman login
  if (!token) {
    alert("Anda harus login untuk mengakses halaman admin.");
    navigate('/login');
  } else {
    // Lakukan permintaan ke halaman admin di sini
    async function fetchAdminPage() {
      try {
        const response = await fetch("http://localhost:3001/admin", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          // Tampilkan halaman admin
          return (
            <>
              <AdminComponent/>
            </>
          );
        } else {
          // Jika permintaan gagal atau token tidak valid, arahkan kembali ke halaman login
          alert('Akses ditolak. Anda akan kembali ke halaman login.');
          navigate('/login');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchAdminPage();
  }
}, [navigate]);


  
}


