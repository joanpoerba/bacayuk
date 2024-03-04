import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import axios from "axios";

const PengaturanHeader = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.delete("http://localhost:3000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="hidden z-10 fixed w-full lg:block bg-blue-950 py-5">
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
                <button onClick={logout}>
                  <MdLogout className="fill-white w-[35px] h-[35px]" />
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      <header className="w-full block lg:hidden bg-blue-950 fixed z-50 p-2">
        <section className="flex justify-between items-center">
          <Link to="/home">
            <img className="w-[40px]" src="img/logo.png" alt="" />
          </Link>
          <button onClick={logout} to="/">
            <MdLogout className="fill-white w-[35px] h-[35px]" />
          </button>
        </section>
      </header>
    </>
  );
};

export default PengaturanHeader;
