/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { Button, Flowbite } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const pengaturanCustomTheme = {
  button: {
    color: {
      buttonBaca:
        "text-white bg-blue-900 border border-transparent enabled:hover:bg-blue-950 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          forModal:
            "border-transparent bg-gray-50 border-1 border-gray-900 text-black font-medium placeholder-blue-950 focus:border-transparent focus:ring-transparent dark:border-transparent dark:bg-transparent dark:focus:border-transparent dark:focus:ring-transparent",
        },
      },
    },
  },
};

const PengaturanMain = () => {
  const [totalFavorite, setTotalFavorite] = useState(0);
  const [id, setId] = useState([]);
  const [buku, setBuku] = useState([]);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [nama, setNama] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const navigate = useNavigate();

  let currentUrl = window.location.href;
  currentUrl = currentUrl.split("/");
  currentUrl = currentUrl[3].split("?")[1];

  useEffect(() => {
    refreshToken();
    tampilkanBuku();
    favorite();
  }, []);

  useEffect(() => {
    favoriteTotal();
  });

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/token");
      if (!response) navigate("/");
      jwtDecode(response.data.aksesToken);
      setToken(response.data.aksesToken);
    } catch (error) {
      if (error) {
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
        setNama(decoded.bukuFavorite);
        setNamaLengkap(decoded.namaLengkap);
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

  const favoriteTotal = async () => {
    const response = await axios.get(
      `http://localhost:3000/favoritetotal?userId=${id}`
    );

    setTotalFavorite(response.data);
  };

  const favorite = async () => {
    const response = await axios.get(
      `http://localhost:3000/favorite?id=${currentUrl}`
    );
    response.data.map((buku) => {
      setBuku(buku);
    });
  };

  return (
    <>
      <Flowbite theme={{ theme: pengaturanCustomTheme }}>
        <div className="w-full h-full flex justify-center">
          <section className="w-[95%] lg:w-[80%] grid mt-28 grid-cols-12 gap-x-5">
            <div className="col-span-12 h-fit sm:col-span-5 md:col-span-3 flex flex-col">
              <img
                className="w-full h-[300px] object-cover rounded-lg shadow-md"
                src={urlFoto}
                alt=""
              />
              <div className="my-3">
                <p className="text-xl text-slate-700 font-semibold">{nama}</p>
                <p className="text-md text-slate-700 font-normal">
                  {namaLengkap}
                </p>
              </div>
              <Link to="/editprofil">
                <Button color="buttonBaca" className="w-full">
                  edit profil
                </Button>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-7 md:col-span-9 mt-5 sm:mt-0">
              <p className="font-medium text-lg text-slate-700">
                Koleksi : {totalFavorite}
              </p>
              <div className="overflow-y-auto flex flex-wrap justify-start items-start gap-4 mt-4">
                {buku.map((buku, index) => (
                  <a
                    href={`/detail?id=${buku.bukuId}?user=${id}`}
                    className="w-[170px] sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                    key={index}
                  >
                    <img src={`${buku.urlCover}`} alt="" />
                    <p className="text-sm lg:text-md font-medium text-gray-700">
                      {buku.penulis.length > 22
                        ? buku.penulis.split("", 18).join("") + "..."
                        : buku.penulis}
                    </p>
                    <p className="text-md sm:text-lg lg:text-xl font-semibold text-slate-800">
                      {buku.judul.length > 18
                        ? buku.judul.split("", 18).join("") + "..."
                        : buku.judul}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Flowbite>
    </>
  );
};

export default PengaturanMain;
