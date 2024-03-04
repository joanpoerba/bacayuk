import { Dropdown, TextInput, Modal, Flowbite } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const headerCustomTheme = {
  button: {
    color: {
      default:
        "text-white font-normal bg-transparent focus:ring-0 focus:ring-transparent",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          default:
            "border-transparent bg-gray-50 border-1 border-gray-900 text-black font-medium placeholder-blue-950 focus:border-transparent focus:ring-transparent dark:border-transparent dark:bg-transparent dark:focus:border-transparent dark:focus:ring-transparent",
          forModal:
            "border-transparent bg-gray-50 border-1 border-gray-900 text-black font-medium placeholder-blue-950 focus:border-transparent focus:ring-transparent dark:border-transparent dark:bg-transparent dark:focus:border-transparent dark:focus:ring-transparent",
        },
      },
    },
  },
};

const customModalTheme = {
  modal: {
    root: {
      sizes: {
        auto: "w-[90%] md:w-fit",
      },
    },
  },
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [buku, setBuku] = useState();
  const [judulBuku, setJudulBuku] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    tampilkanBuku();
  });

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/token");
      if (!response) navigate("/");
      jwtDecode(response.data.aksesToken);
      setToken(response.data.aksesToken);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentData = new Date();
      if (expire * 5000 < currentData.getTime()) {
        const response = await axios.get("http://localhost:3000/token");
        config.headers.Authorization = `Bearer ${response.data.aksesToken}`;
        setToken(response.data.aksesToken);
        const decoded = jwtDecode(response.data.aksesToken);
        setId(decoded.id);
        setNama(decoded.nama);
        setUrlFoto(decoded.urlFoto);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const tampilkanBuku = async () => {
    await axiosJWT.get("http://localhost:3000/tampilkanbuku", {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  };

  return (
    <>
      <header className="hidden lg:block bg-blue-950 py-5">
        <section className="flex justify-center">
          <nav className="w-[80%]">
            <ul className="flex flex-row justify-between items-center">
              <li>
                <Link to="/home" className="flex items-center gap-x-3">
                  <img className="w-[60px]" src="img/logo.png" alt="" />
                  <p className="text-white font-semibold text-2xl cursor-pointer">
                    BacaYuk
                  </p>
                </Link>
              </li>
              <li>
                <Flowbite theme={{ theme: headerCustomTheme }}>
                  <Dropdown
                    color="default"
                    label="Kategori"
                    dismissOnClick={false}
                  >
                    <Dropdown.Item href="#pengembanganDiri">
                      Fiksi
                    </Dropdown.Item>
                    <Dropdown.Item href="#pengembanganDiri">
                      Pengembangan diri
                    </Dropdown.Item>
                    <Dropdown.Item href="#horor">Horor</Dropdown.Item>
                    <Dropdown.Item href="#misteri">Misteri</Dropdown.Item>
                    <Dropdown.Item href="#misteri">Romantis</Dropdown.Item>
                  </Dropdown>
                </Flowbite>
              </li>
              <li className="w-[400px] xl:w-[550px]">
                <Flowbite theme={{ theme: headerCustomTheme }}>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        const response = await axiosJWT.post(
                          "http://localhost:3000/admin/getbukubyjudul",
                          {
                            judul: judulBuku,
                            headers: {
                              Authorization: `Baerer ${token}`,
                            },
                          }
                        );
                        setBuku(response.data);
                        setOpenModal(true);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    <TextInput
                      className="w-full"
                      color="default"
                      type="text"
                      icon={CiSearch}
                      placeholder="Temukan kisah hebat dengan pencarian anda"
                      name="judul"
                      onChange={(e) => setJudulBuku(e.target.value)}
                      required
                    />
                  </form>
                </Flowbite>
              </li>
              <li>
                <Link
                  className="flex items-center gap-x-2"
                  to={`/pengaturan?${id}`}
                >
                  <img
                    className="w-[33px] h-[33px] object-cover rounded-full"
                    src={urlFoto}
                    alt=""
                  />
                  <p className="text-white font-normal text-md cursor-pointer">
                    {nama}
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      <header
        className={`w-full block lg:hidden bg-blue-950 fixed z-10 ${
          navbarStatus ? "h-fit p-2" : "p-2"
        }`}
      >
        <section className="flex justify-between items-center">
          <div>
            <Hamburger
              size={26}
              onToggle={(toggled) => {
                if (toggled) {
                  setNavbarStatus(true);
                } else {
                  setNavbarStatus(false);
                }
              }}
              toggled={isOpen}
              toggle={setOpen}
              color="white"
            />
          </div>
          <div>
            <Link
              className="flex items-center gap-x-2"
              to={`/pengaturan?${id}`}
            >
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={urlFoto}
                alt=""
              />
              <p className="text-white font-normal text-md">{nama}</p>
            </Link>
          </div>
        </section>
        <nav className={`${navbarStatus ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center text-white gap-y-5 p-2 py-5">
            <li>
              <Link to="/home" className="flex items-center gap-x-3">
                <img className="w-[50px]" src="img/logo.png" alt="" />
                <p className="text-white font-semibold text-2xl cursor-pointer">
                  BacaYuk
                </p>
              </Link>
            </li>
            <li className="w-full sm:w-[70%]">
              <form
                action=""
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const response = await axiosJWT.post(
                      "http://localhost:3000/admin/getbukubyjudul",
                      {
                        judul: judulBuku,
                        headers: {
                          Authorization: `Baerer ${token}`,
                        },
                      }
                    );
                    setBuku(response.data);
                    setOpenModal(true);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <TextInput
                  className="w-full"
                  color="default"
                  type="text"
                  icon={CiSearch}
                  placeholder="Temukan kisah hebat dengan pencarian anda"
                  name="judul"
                  onChange={(e) => setJudulBuku(e.target.value)}
                  required
                />
              </form>
            </li>
            <li>
              <a href="/home">Fiksi</a>
            </li>
            <li>
              <a href="#pengembanganDiri">Pengembangan Diri</a>
            </li>
            <li>
              <a href="#horor">Horor</a>
            </li>
            <li>
              <a href="#misteri">Misteri</a>
            </li>
            <li>
              <a href="#romantis">Romantis</a>
            </li>
          </ul>
        </nav>
      </header>

      {openModal ? (
        <Flowbite theme={{ theme: customModalTheme }}>
          <Modal
            show={openModal}
            size="auto"
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header>Pencarian anda</Modal.Header>
            <Modal.Body className="flex flex-wrap justify-start items-start gap-4">
              {buku.map((buku) => (
                <a
                  href={`/detail?id=${buku.id}?user=${id}`}
                  className="w-full sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                  key={buku.id}
                >
                  <img className="lg:h-[320px]" src={buku.urlCover} alt="" />
                  <p className="text-sm lg:text-md font-medium text-gray-700 my-2">
                    {buku.penulis.length > 22
                      ? buku.penulis.split("", 18).join("") + "..."
                      : buku.penulis}
                  </p>
                  <p className="text-md sm:text-lg lg:text-lg font-semibold text-slate-800">
                    {buku.judul.length > 18
                      ? buku.judul.split("", 18).join("") + "..."
                      : buku.judul}
                  </p>
                </a>
              ))}
            </Modal.Body>
          </Modal>
        </Flowbite>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
