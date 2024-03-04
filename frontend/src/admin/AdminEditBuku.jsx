import { Sidebar, Flowbite } from "flowbite-react";
import { RiLayout4Fill } from "react-icons/ri";
import { FaUser, FaBook } from "react-icons/fa";
import { IoIdCard } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditBuku from "../components/EditBuku";
import axios from "axios";

const AdminEditBuku = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  const adminPageCustomTheme = {
    sidebar: {
      root: {
        collapsed: {
          off: "w-full",
        },
        inner:
          "h-full flex flex-col items-center overflow-y-auto overflow-x-hidden rounded-none bg-blue-950 py-4",
      },
      item: {
        base: `${
          openSidebar ? "2xl:w-[180px]" : "w-fit"
        } mt-2 flex items-center justify-start rounded-lg p-2 text-base font-normal text-gray-900 dark:text-white dark:hover:bg-gray-700 hover:bg-blue-800`,
        active: "bg-gray-100 dark:bg-gray-700",
        content: {
          base: openSidebar ? "px-3" : "px-0",
        },
        icon: {
          base: "h-6 w-6 flex-shrink-0 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        },
      },
      itemGroup: {
        base: "mt-5",
      },
    },
  };

  const logoutAdmin = async () => {
    try {
      await axios.delete("http://localhost:3000/admin/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flowbite theme={{ theme: adminPageCustomTheme }}>
        <div className="w-full h-screen grid grid-cols-12">
          <div
            className={`${
              openSidebar
                ? "fixed z-10 w-[180px] sm:w-full sm:static sm:col-span-3 lg:col-span-2"
                : "col-span-2 md:col-span-1"
            } h-full bg-blue-950`}
          >
            <Sidebar aria-label="Default sidebar example">
              <Sidebar.Logo
                onClick={() => {
                  !openSidebar ? setOpenSidebar(true) : setOpenSidebar(false);
                }}
                className="text-white cursor-pointer"
                img="img/logo.png"
                imgAlt="Flowbite logo"
              >
                <span className={`${openSidebar ? "block" : "hidden"}`}>
                  Bacayuk
                </span>
              </Sidebar.Logo>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Link to="/admin">
                    <Sidebar.Item
                      className="text-white cursor-pointer"
                      icon={RiLayout4Fill}
                    >
                      <span className={`${openSidebar ? "block" : "hidden"}`}>
                        Overview
                      </span>
                    </Sidebar.Item>
                  </Link>
                  <Link to="/user">
                    <Sidebar.Item
                      className="text-white cursor-pointer"
                      icon={FaUser}
                    >
                      <span className={`${openSidebar ? "block" : "hidden"}`}>
                        User
                      </span>
                    </Sidebar.Item>
                  </Link>
                  <Link to="/buku">
                    <Sidebar.Item
                      className="text-white cursor-pointer bg-blue-900"
                      icon={FaBook}
                    >
                      <span className={`${openSidebar ? "block" : "hidden"}`}>
                        Buku
                      </span>
                    </Sidebar.Item>
                  </Link>
                  {!document.cookie.match("role=petugas=true") ? (
                    <Link to="/petugas">
                      <Sidebar.Item
                        className="text-white cursor-pointer"
                        icon={IoIdCard}
                      >
                        <span className={`${openSidebar ? "block" : "hidden"}`}>
                          Petugas
                        </span>
                      </Sidebar.Item>
                    </Link>
                  ) : (
                    ""
                  )}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
          <div
            className={`${
              openSidebar
                ? "col-span-12 sm:col-span-9 lg:col-span-10"
                : "col-span-10 md:col-span-11"
            } h-full p-4 bg-gray-100`}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg md:text-2xl text-slate-700">
                Selamat datang
              </h2>
              <div className="hidden md:flex items-center gap-x-5">
                <button onClick={logoutAdmin}>
                  <MdLogout className="w-[28px] h-[28px] text-slate-700" />
                </button>
              </div>
            </div>
            <EditBuku />
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default AdminEditBuku;
