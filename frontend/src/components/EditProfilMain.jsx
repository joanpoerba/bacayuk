/* eslint-disable react/no-unescaped-entities */
import { Button, FloatingLabel, Flowbite } from "flowbite-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const editProfilCustomTheme = {
  button: {
    color: {
      default:
        "text-white bg-blue-900 border border-transparent enabled:hover:bg-blue-950 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
      cancel:
        "text-white bg-red-400 border border-transparent enabled:hover:bg-red-500 focus:ring-4 focus:ring-red-200 dark:bg-red-200 dark:enabled:hover:bg-red-200 dark:focus:ring-red-950 dark:border-red-200",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          default:
            "border-transparent bg-gray-50 border-1 border-gray-900 text-black font-medium placeholder-blue-950 focus:border-transparent focus:ring-transparent dark:border-transparent dark:bg-transparent dark:focus:border-transparent dark:focus:ring-transparent",
        },
      },
    },
  },
  floatingLabel: {
    input: {
      default: {
        outlined: {
          sm: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-900",
          md: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-900",
        },
      },
    },
    label: {
      default: {
        outlined: {
          sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-900 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-900",
          md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-900 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-900",
        },
      },
    },
  },
};

const EditProfilMain = () => {
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [id, setId] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [alamat, setAlamat] = useState("");
  const [newNamaLengkapValue, newNamaLengkap] = useState("");
  const [newAlamatValue, newAlamat] = useState("");
  const [newFotoValue, newFoto] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    updateUser();
  }, []);

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
        setNamaLengkap(decoded.namaLengkap);
        setAlamat(decoded.alamat);
        setUrlFoto(decoded.urlFoto);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const loadImage = (e) => {
    const image = e.target.files[0];
    newFoto(image);
  };

  const updateUser = async (e) => {
    if (e) e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("namaLengkap", newNamaLengkapValue);
    formData.append("alamat", newAlamatValue);
    formData.append("file", newFotoValue);

    try {
      await axiosJWT.patch(`http://localhost:3000/user/edit`, formData, {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      });
      navigate(`/pengaturan?${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flowbite theme={{ theme: editProfilCustomTheme }}>
        <form
          onSubmit={updateUser}
          encType="multipart/form-data"
          className="w-full flex flex-col justify-center items-center lg:pt-20"
        >
          <input type="hidden" value={id} name="id" />
          <section className="w-[95%] lg:w-[80%] grid grid-cols-12 items-start sm:grid-rows-none gap-x-5 py-20 lg:py-10">
            <div className="rounded-md col-span-12 sm:col-span-5 md:col-start-2 md:col-end-6 shadow-md gap-y-5">
              <img
                className="w-full h-[500px] object-cover rounded-md"
                src={urlFoto}
                alt=""
              />
              <input type="file" onChange={loadImage} />
            </div>
            <div className="col-span-12 sm:col-span-7 md:col-start-6 md:col-end-11 mt-5 sm:mt-0">
              <ul className="grid grid-cols-12 gap-6">
                <li className="col-span-12">
                  <p className="font-semibold text-xl text-slate-700">
                    Edit profil
                  </p>
                </li>
                <li className="col-span-12">
                  <FloatingLabel
                    variant="outlined"
                    label="nama lengkap"
                    type="text"
                    defaultValue={namaLengkap}
                    name="namaLengkap"
                    onChange={(e) => newNamaLengkap(e.target.value)}
                  />
                </li>
                <li className="col-span-12">
                  <FloatingLabel
                    variant="outlined"
                    label="alamat"
                    type="text"
                    defaultValue={alamat}
                    name="nama"
                    onChange={(e) => newAlamat(e.target.value)}
                  />
                </li>
                <li className="col-span-12 sm:col-span-6">
                  <a href={`/pengaturan?${id}`}>
                    <Button color="cancel" className="w-full">
                      Batal
                    </Button>
                  </a>
                </li>
                <li className="col-span-12 sm:col-span-6">
                  <a href="">
                    <Button color="default" className="w-full" type="submit">
                      Edit
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </form>
      </Flowbite>
    </>
  );
};

export default EditProfilMain;
