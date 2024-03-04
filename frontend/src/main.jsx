import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Masuk from "./auth/Masuk";
import Daftar from "./auth/Daftar";
import Home from "./home/Home";
import DetailBuku from "./home/DetailBuku";
import Pengaturan from "./settings/Pengaturan";
import EditProfil from "./settings/EditProfil";
import Admin from "./admin/Admin";
import AdminUser from "./admin/AdminUser";
import AdminPeminjaman from "./admin/AdminPeminjaman";
import AdminBuku from "./admin/AdminBuku";
import AdminEditBuku from "./admin/AdminEditBuku";
import AdminPetugas from "./admin/AdminPetugas";
import axios from "axios";
import "./index.css";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Masuk />,
    errorElement: <Home />,
  },
  {
    path: "/daftar",
    element: <Daftar />,
    errorElement: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/detail",
    element: <DetailBuku />,
    errorElement: <Home />,
  },
  {
    path: "/pengaturan",
    element: <Pengaturan />,
    errorElement: <Home />,
  },
  {
    path: "/editprofil",
    element: <EditProfil />,
    errorElement: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <Home />,
  },
  {
    path: "/user",
    element: <AdminUser />,
    errorElement: <Home />,
  },
  {
    path: "/peminjaman",
    element: <AdminPeminjaman />,
    errorElement: <Home />,
  },
  {
    path: "/buku",
    element: <AdminBuku />,
    errorElement: <Home />,
  },
  {
    path: "/editbuku",
    element: <AdminEditBuku />,
    errorElement: <Home />,
  },
  {
    path: "/petugas",
    element: <AdminPetugas />,
    errorElement: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
