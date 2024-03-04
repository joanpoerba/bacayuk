import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput, Alert, Flowbite } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

const daftarCustomTheme = {
  textInput: {
    field: {
      rightIcon: {
        base: "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-3 text-sm",
        },
        colors: {
          gray: "bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-[2px] focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-50",
        },
      },
    },
  },
  button: {
    color: {
      default:
        "text-white bg-blue-900 border border-transparent enabled:hover:bg-blue-950 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
    },
  },
};

const Daftar = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const eyeToggel = () => {
    !eye ? setEye(true) : setEye(false);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/daftar", {
          nama,
          email,
          password,
        })
        .then((res) => {
          if (res.data.register == true) {
            navigate("/");
          } else {
            setError({ error: true, handler: res.data.msg });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Flowbite theme={{ theme: daftarCustomTheme }}>
        <div className="w-full h-screen flex">
          <div className="w-full md:w-[60%] lg:w-[40%] h-full flex flex-col justify-between items-center p-5">
            <div className="w-[90%] sm:w-[70%] md:w-[400px] h-full flex flex-col justify-between">
              <h3 className="text-blue-900 text-xl lg:text-2xl font-bold">
                BacaYuk
              </h3>
              <form className="w-full" onSubmit={saveUser}>
                <h1 className="text-blue-900 text-3xl lg:text-5xl font-bold">
                  Welcome
                </h1>
                <p className="text-zinc-800 text-lg lg:text-xl mt-2 mb-6">
                  Daftar dan temukan lebih banyak!
                </p>
                {error.error ? (
                  <Alert
                    className="my-6"
                    color="failure"
                    icon={HiInformationCircle}
                  >
                    {error.handler}
                  </Alert>
                ) : (
                  ""
                )}
                <ul className="mt-6 flex flex-col gap-y-6">
                  <li>
                    <TextInput
                      className="w-full"
                      type="text"
                      placeholder="Username"
                      autoComplete="off"
                      name="nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </li>
                  <li>
                    <TextInput
                      className="w-full"
                      type="text"
                      placeholder="Email"
                      autoComplete="off"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </li>
                  <li>
                    {!eye ? (
                      <div className="flex items-center bg-gray-50 text-gray-900 border-[1px] border-gray-500 rounded-lg pr-3 py-[2px] focus-within:border-blue-500 focus-within:ring-[2px] focus-within:ring-blue-300">
                        <input
                          className="w-full border-0 focus:ring-0 placeholder:text-sm bg-transparent"
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <AiFillEyeInvisible
                          onClick={eyeToggel}
                          className="text-gray-600 cursor-pointer"
                          size={25}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center bg-gray-50 text-gray-900 border-[1px] border-gray-500 rounded-lg pr-3 py-[2px] focus-within:border-blue-500 focus-within:ring-[2px] focus-within:ring-blue-300">
                        <input
                          className="w-full border-0 focus:ring-0 placeholder:text-sm bg-transparent"
                          type="text"
                          placeholder="Password"
                          autoComplete="off"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <AiFillEye
                          onClick={eyeToggel}
                          className="text-gray-600 cursor-pointer"
                          size={25}
                        />
                      </div>
                    )}
                  </li>
                  <li>
                    <Button color="default" className="w-full" type="submit">
                      Daftar
                    </Button>
                  </li>
                  <li>
                    <p>
                      Sudah punya akun?{" "}
                      <Link className="text-blue-900 underline" to="/">
                        masuk
                      </Link>
                    </p>
                  </li>
                </ul>
              </form>
              <p className="text-slate-400  text-sm lg:text-base">
                &copy; Joan 2024 | All rights reserved
              </p>
            </div>
          </div>
          <div className="daftarBanner md:w-[40%] lg:w-[60%] h-full bg-center bg-cover"></div>
        </div>
      </Flowbite>
    </>
  );
};

export default Daftar;
