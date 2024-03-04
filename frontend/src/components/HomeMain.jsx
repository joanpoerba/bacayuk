import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const HomeMain = () => {
  const [id, setId] = useState([]);
  const [buku, setBuku] = useState([]);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
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
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const tampilkanBuku = async () => {
    await axiosJWT
      .get("http://localhost:3000/tampilkanbuku", {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      })
      .then((result) => setBuku(result.data));
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="w-[95%] lg:w-[80%] py-10 sm:py-20 lg:py-10">
          <div className="w-full h-auto sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <img className="w-full" src="img/bannerCarousel1.png" alt="..." />
              <img
                className="w-full "
                src="img/bannerCarousel2.png"
                alt="..."
              />
              <img
                className="w-full "
                src="img/bannerCarousel3.png"
                alt="..."
              />
            </Carousel>
          </div>
          <div id="fiksi" className="mt-10">
            <h2 className="text-blue-900 font-bold text-xl sm:text-2xl">
              Fiksi
            </h2>
            <div className="mt-5 flex flex-wrap justify-start items-start gap-4">
              {buku
                .filter((buku) => buku.kategori === "fiksi")
                .map((buku) => (
                  <a
                    href={`/detail?id=${buku.id}?user=${id}`}
                    className="w-[170px] sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                    key={buku.id}
                  >
                    <img
                      className="w-full lg:h-[320px]"
                      src={buku.urlCover}
                      alt=""
                    />
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
            </div>
          </div>
          <div id="pengembanganDiri" className="pt-20 md:pt-0 mt-10">
            <h2 className="text-blue-900 font-bold text-xl sm:text-2xl">
              Pengembangan diri
            </h2>
            <div className="mt-5 flex flex-wrap justify-start items-start gap-4">
              {buku
                .filter((buku) => buku.kategori === "pengembangan diri")
                .map((buku) => (
                  <a
                    href={`/detail?id=${buku.id}?user=${id}`}
                    className="w-[170px] sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                    key={buku.id}
                  >
                    <img
                      className="w-full lg:h-[320px]"
                      src={buku.urlCover}
                      alt=""
                    />
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
            </div>
          </div>
          <div id="horor" className="pt-20 md:pt-0 mt-10">
            <h2 className="text-blue-900 font-bold text-xl sm:text-2xl">
              Horor
            </h2>
            <div className="mt-5 flex flex-wrap justify-start items-start gap-4">
              {buku
                .filter((buku) => buku.kategori === "horor")
                .map((buku) => (
                  <a
                    href={`/detail?id=${buku.id}?user=${id}`}
                    className="w-[170px] sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                    key={buku.id}
                  >
                    <img
                      className="w-full lg:h-[320px]"
                      src={buku.urlCover}
                      alt=""
                    />
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
            </div>
          </div>
          <div id="misteri" className="pt-20 md:pt-0 mt-10">
            <h2 className="text-blue-900 font-bold text-xl sm:text-2xl">
              Misteri
            </h2>
            <div className="mt-5 flex flex-wrap justify-start items-start gap-4">
              {buku
                .filter((buku) => buku.kategori === "misteri")
                .map((buku) => (
                  <a
                    href={`/detail?id=${buku.id}?user=${id}`}
                    className="w-[170px] sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                    key={buku.id}
                  >
                    <img
                      className="w-full lg:h-[320px]"
                      src={buku.urlCover}
                      alt=""
                    />
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
            </div>
          </div>
          <div id="romantis" className="pt-20 md:pt-0 mt-10">
            <h2 className="text-blue-900 font-bold text-xl sm:text-2xl">
              Romantis
            </h2>
            <div className="mt-5 flex flex-wrap justify-start items-start gap-4">
              {buku
                .filter((buku) => buku.kategori === "romantis")
                .map((buku) => (
                  <a
                    href={`/detail?id=${buku.id}?user=${id}`}
                    className="w-[170px] sm:w-[200px] lg:w-[230px] p-3 rounded-md bg-gray-200"
                    key={buku.id}
                  >
                    <img
                      className="w-full lg:h-[320px]"
                      src={buku.urlCover}
                      alt=""
                    />
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeMain;
