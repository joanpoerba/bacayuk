import { Button, TextInput, Table, Flowbite } from "flowbite-react";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const adminOverviewCustomTheme = {
  button: {
    color: {
      default:
        "text-white bg-blue-900 border border-transparent enabled:hover:bg-blue-950 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
      kategoriButton:
        "text-white bg-gray-400 border border-transparent enabled:hover:bg-blue-950 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          default:
            "border-transparent bg-gray-50 border-1 border-gray-300 text-black font-normal placeholder-gray-400 focus:border-gray-300 focus:ring-transparent dark:border-transparent dark:bg-transparent dark:focus:border-transparent dark:focus:ring-transparent",
        },
      },
    },
  },
  pagination: {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-2 sm:px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white py-2 px-2 sm:px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      selector: {
        base: "w-10 sm:w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        active:
          "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
        disabled: "opacity-50 cursor-normal",
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

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [nama, setNama] = useState("");
  let no = 1;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/admin/getuser");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/admin/delete/id=${id}`);
      location.reload();
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const search = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/getuserbynama",
        {
          nama,
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flowbite theme={{ theme: adminOverviewCustomTheme }}>
        <div className="mt-9 pb-10">
          <form
            method="post"
            onSubmit={search}
            className="grid grid-cols-12 items-start gap-x-5 gap-y-6"
          >
            <TextInput
              className="col-start-1 col-end-9"
              color="default"
              type="text"
              icon={IoSearchSharp}
              placeholder="Temukan user"
              value={nama}
              name="nama"
              onChange={(e) => setNama(e.target.value)}
              required
            />
            <Button
              className="col-start-9 col-end-12 sm:col-end-11 md:col-end-10 lg:col-start-9"
              color="default"
              type="submit"
            >
              <IoSearchSharp className="w-[20px] h-[20px]" />
            </Button>
          </form>
          <div className="overflow-x-auto mt-5">
            <Table hoverable className="w-[1500px] lg:w-full">
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Id</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Nama lengkap</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Alamat</Table.HeadCell>
                <Table.HeadCell>Foto profil</Table.HeadCell>
                <Table.HeadCell>Edit</Table.HeadCell>
                <Table.HeadCell>Hapus</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {users.map((user, index) => (
                  <Fragment key={index}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="font-medium text-gray-900">
                        {no++}
                      </Table.Cell>
                      <Table.Cell>{user.id}</Table.Cell>
                      <Table.Cell>{user.nama}</Table.Cell>
                      <Table.Cell>{user.namaLengkap}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.alamat}</Table.Cell>
                      <Table.Cell>
                        <img
                          className="w-[150px] h-[150px] object-cover rounded-md"
                          src={user.urlFoto}
                          alt=""
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <Link
                          to={`/admin?id=${user.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          <BiSolidPencil className="text-blue-500 w-[25px] h-[25px]" />
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <FaTrashAlt
                          onClick={() => deleteUser(user.id)}
                          className="text-red-500 w-[25px] h-[25px] cursor-pointer"
                        />
                      </Table.Cell>
                    </Table.Row>
                  </Fragment>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </Flowbite>
    </>
  );
};

export default AdminUser;
