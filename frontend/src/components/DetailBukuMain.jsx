/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Textarea,
  Modal,
  Label,
  TextInput,
  Flowbite,
} from "flowbite-react";
import { Fragment, useEffect, useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const detailBukuCustomeTheme = {
  button: {
    color: {
      buttonBaca:
        "text-white bg-blue-900 py-1 border border-transparent enabled:hover:bg-blue-950 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
      buttonKembalikan:
        "text-white bg-yellow-400 py-1 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
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
  textarea: {
    colors: {
      default:
        "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-950 focus:ring-blue-950 dark:border-blue-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    },
  },
};

const DetailBukuMain = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalKembalikan, setOpenModalKembalikan] = useState(false);
  const [deleteCommentModal, setDeleteCommentModal] = useState(false);
  const [hapusFavoriteModal, setHapusFavoriteModal] = useState(false);
  const [favorite, setFavorite] = useState(null);
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const [comment, setComment] = useState("");
  const [id, setId] = useState("");
  const [buku, setBuku] = useState("");
  const [comments, setComments] = useState([]);
  const [statusFavorite, setStatusFavorite] = useState();
  const [tanggalPeminjaman, setTanggalPeminjaman] = useState();
  const [tanggalPengembalian, setTanggalPengembalian] = useState();
  const [statusPeminjamanBuku, setStatusPeminjamanBuku] = useState();
  const [sisaHari, setSisaHari] = useState();
  const [stars1, set1Stars] = useState();
  const [stars2, set2Stars] = useState();
  const [stars3, set3Stars] = useState();
  const [stars4, set4Stars] = useState();
  const [stars5, set5Stars] = useState();
  const [totalRating, setTotalRating] = useState();

  const navigate = useNavigate();

  let currentUrl = window.location.href;
  let bukuId = currentUrl.split("/");
  let userId = bukuId[3].split("?")[2].split("=")[1];
  bukuId = bukuId[3].split("?")[1].split("=")[1];

  useEffect(() => {
    refreshToken();
    tampilkanBuku();
    detailBukuById();
    tampilkanComment();
    statusPeminjaman();
    peminjaman();
    pengembalian();
  }, []);

  useEffect(() => {
    verifyFavorite();
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
    await axiosJWT.get("http://localhost:3000/tampilkanbuku", {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  };

  const detailBukuById = async () => {
    const response = await axios.get(
      `http://localhost:3000/detail?id=${bukuId}`
    );
    setBuku(response.data);
  };

  const tambahKomen = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/comment", {
        comment,
        userId: id,
        bukuId: buku.id,
        rating: totalRating ? totalRating : 0,
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const tampilkanComment = async () => {
    const response = await axios.get(
      `http://localhost:3000/getcomment?id=${bukuId}`
    );
    setComments(response.data[0]);
  };

  const hapusKomen = async (id) => {
    await axios.delete(`http://localhost:3000/hapuskomen/${id}`);
  };

  const verifyFavorite = async () => {
    const response = await axios.get(
      `http://localhost:3000/verifyfavorite?bukuId=${bukuId}&userId=${userId}`
    );

    setStatusFavorite(response.data);
  };

  const addFavorite = async () => {
    const response = await axios.post("http://localhost:3000/tambahfavorite", {
      userId: userId,
      bukuId: bukuId,
    });
    setFavorite(response.data);
  };

  const hapusFavorite = async () => {
    await axios.get(`http://localhost:3000/hapusfavorite/${userId}/${bukuId}`);
    location.reload("/detail");
  };

  const statusPeminjaman = async () => {
    const response = await axios.get(
      `http://localhost:3000/peminjamanbyid?userId=${userId}&bukuId=${bukuId}`
    );

    const tanggalPengembalian = new Date(
      Number(response.data[0].tanggalPengembalian)
    );
    const tanggalSaatIni = new Date();
    const selisihWaktu = tanggalPengembalian - tanggalSaatIni;

    setSisaHari(Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24)));

    setStatusPeminjamanBuku(response.data[0]);
  };

  const peminjaman = () => {
    const today = new Date();
    const formatter = new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    setTanggalPeminjaman(formatter.format(today));
  };

  const pengembalian = () => {
    const today = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const formatter = new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    setTanggalPengembalian(formatter.format(today));
  };

  const pinjam = async () => {
    await axios.get(`http://localhost:3000/pinjam/${userId}/${bukuId}`);
    location.reload();
  };

  const kembalikan = async () => {
    await axios.get(
      `http://localhost:3000/kembalikan?userid=${userId}&bukuid=${bukuId}`
    );
    location.reload();
  };

  const star1 = () => {
    set1Stars(true);
    set2Stars(false);
    set3Stars(false);
    set4Stars(false);
    set5Stars(false);

    setTotalRating(1);
  };

  const star2 = () => {
    set1Stars(true);
    set2Stars(true);
    set3Stars(false);
    set4Stars(false);
    set5Stars(false);

    setTotalRating(2);
  };

  const star3 = () => {
    set1Stars(true);
    set2Stars(true);
    set3Stars(true);
    set4Stars(false);
    set5Stars(false);

    setTotalRating(3);
  };

  const star4 = () => {
    set1Stars(true);
    set2Stars(true);
    set3Stars(true);
    set4Stars(true);
    set5Stars(false);

    setTotalRating(4);
  };

  const star5 = () => {
    set1Stars(true);
    set2Stars(true);
    set3Stars(true);
    set4Stars(true);
    set5Stars(true);

    setTotalRating(5);
  };

  return (
    <>
      <Flowbite theme={{ theme: detailBukuCustomeTheme }}>
        <div className="w-full flex flex-col justify-center items-center">
          <section className="w-[95%] lg:w-[80%] grid grid-cols-12 gap-x-5 py-20 md:py-10">
            <div className="col-span-12 sm:col-span-5 md:col-span-4 flex flex-col">
              <img className="w-full" src={buku.urlCover} alt="" />
              <Modal
                show={hapusFavoriteModal}
                size="md"
                onClose={() => setHapusFavoriteModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Yakin ingin menghapus buku ini dari favorite?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button color="failure" onClick={hapusFavorite}>
                        {"ya"}
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              <div className="flex justify-between items-center mt-4">
                {statusPeminjamanBuku ? (
                  <Button
                    onClick={() => setOpenModalKembalikan(true)}
                    color="buttonKembalikan"
                    className="w-[90%] sm:w-[87%]"
                  >
                    Kembalikan
                  </Button>
                ) : (
                  <Button
                    onClick={() => setOpenModal(true)}
                    color="buttonBaca"
                    className="w-[90%] sm:w-[87%]"
                  >
                    Pinjam
                  </Button>
                )}

                {statusFavorite == true ? (
                  <button
                    onClick={addFavorite}
                    className="w-[40px] sm:w-[13%] md:w-[15%] lg:w-[13%] xl:w-[10%]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-bookmark-fill w-full fill-blue-900"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={addFavorite}
                    className="w-[40px] sm:w-[13%] md:w-[15%] lg:w-[13%] xl:w-[10%]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-bookmark w-full fill-blue-900"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-7 md:col-span-8 mt-5 sm:mt-0">
              <p className="font-medium text-gray-500">{buku.penulis}</p>
              <h1 className="font-bold text-slate-700 text-xl sm:text-3xl">
                {buku.judul}
              </h1>
              <ul className="text-slate-700">
                <li className="mt-5">
                  <h3 className="font-semibold text-lg">Deskrpisi</h3>
                  <p className="mt-2">{buku.deskripsi}</p>
                </li>
                <li className="mt-5">
                  <h3 className="font-semibold text-lg">Detail</h3>
                  <ul className="mt-2 grid grid-cols-12 gap-y-6">
                    <li className="col-span-6 sm:col-span-4">
                      <p>Jumlah halaman</p>
                      <p className="text-gray-500">{buku.jumlahHalaman}</p>
                    </li>
                    <li className="col-span-6 sm:col-span-4">
                      <p>Tanggal terbit</p>
                      <p className="text-gray-500">{buku.tanggalTerbit}</p>
                    </li>
                    <li className="col-span-6 sm:col-span-4">
                      <p>Bahasa</p>
                      <p className="text-gray-500">{buku.bahasa}</p>
                    </li>
                    <li className="col-span-6 sm:col-span-4">
                      <p>Penerbit</p>
                      <p className="text-gray-500">{buku.penerbit}</p>
                    </li>
                    <li className="col-span-6 sm:col-span-4">
                      <p>Panjang</p>
                      <p className="text-gray-500">{buku.panjang}</p>
                    </li>
                    <li className="col-span-6 sm:col-span-4">
                      <p>Lebar</p>
                      <p className="text-gray-500">{buku.lebar}</p>
                    </li>
                  </ul>
                </li>
                <li className="mt-5">
                  <h3 className="font-semibold text-lg">Kategori</h3>
                  <ul className="mt-2 flex gap-3">
                    <li className="bg-gray-200 p-2 rounded-md font-medium text-gray-500">
                      {buku.kategori}
                    </li>
                  </ul>
                </li>
                <li className="mt-5">
                  <h3 className="font-semibold text-lg">Ulasan</h3>
                  <ul className="mt-5 flex flex-col gap-8">
                    {comments.map((comment, index) => (
                      <Fragment key={index}>
                        <li className="mt-2 flex flex-row justify-between items-start">
                          <div>
                            <div className="flex items-center gap-x-3">
                              <img
                                className="rounded-full object-cover w-[40px] h-[40px]"
                                src={comment.urlFoto}
                                alt=""
                              />
                              <p className="font-medium">{comment.nama}</p>
                              <div className="flex flex-row items-center gap-x-1">
                                <FaStar className="w-[20px] h-[20px] text-yellow-300" />
                                <p className="font-medium">
                                  {comment.rating}/5
                                </p>
                              </div>
                            </div>
                            <div className="w-full mt-2 flex flex-row justify-between items-start">
                              <p>{comment.comment}</p>
                            </div>
                          </div>

                          {id == comment.userId ? (
                            <GoKebabHorizontal
                              className="cursor-pointer"
                              onClick={() => setDeleteCommentModal(true)}
                            />
                          ) : (
                            ""
                          )}
                        </li>
                        <Modal
                          show={deleteCommentModal}
                          size="md"
                          onClose={() => setDeleteCommentModal(false)}
                          popup
                        >
                          <Modal.Header />
                          <Modal.Body>
                            <div className="text-center">
                              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Yakin ingin menghapus komentar ini?
                              </h3>
                              <div className="flex justify-center gap-4">
                                <Button
                                  color="failure"
                                  onClick={() => {
                                    hapusKomen(comment.id);
                                    location.reload();
                                  }}
                                >
                                  {"ya"}
                                </Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </Fragment>
                    ))}
                    <li className="mt-2">
                      <form action="" onSubmit={tambahKomen}>
                        <Textarea
                          color="default"
                          id="comment"
                          placeholder="Berikan ulasan anda"
                          required
                          rows={7}
                          className="resize-none"
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <div className="flex gap-x-3 my-3">
                          <button type="button" onClick={star1}>
                            <FaStar
                              className={`w-[30px] h-[30px] ${
                                stars5 || stars4 || stars3 || stars2 || stars1
                                  ? "text-yellow-300"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                          <button type="button" onClick={star2}>
                            <FaStar
                              className={`w-[30px] h-[30px] ${
                                stars5 || stars4 || stars3 || stars2
                                  ? "text-yellow-300"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                          <button type="button" onClick={star3}>
                            <FaStar
                              className={`w-[30px] h-[30px] ${
                                stars5 || stars4 || stars3
                                  ? "text-yellow-300"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                          <button type="button" onClick={star4}>
                            <FaStar
                              className={`w-[30px] h-[30px] ${
                                stars5 || stars4
                                  ? "text-yellow-300"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                          <button type="button" onClick={star5}>
                            <FaStar
                              className={`w-[30px] h-[30px] ${
                                stars5 ? "text-yellow-300" : "text-gray-400"
                              }`}
                            />
                          </button>
                        </div>
                        <Button
                          color="buttonBaca"
                          type="submit"
                          className="w-full"
                        >
                          Tambah ulasan
                        </Button>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)}>
          <Modal.Header>Informasi</Modal.Header>
          <Modal.Body>
            <div className="px-1">
              <ul className="w-full">
                <li className="flex flex-col gap-4 w-full">
                  <Label htmlFor="disabledInput1">Tanggal peminjaman</Label>
                  {tanggalPeminjaman ? (
                    <TextInput
                      className="w-full"
                      color="forModal"
                      type="text"
                      value={tanggalPeminjaman}
                      disabled
                    />
                  ) : (
                    ""
                  )}
                </li>
                <li className="flex flex-col gap-4 w-full mt-5">
                  <Label htmlFor="disabledInput1">Tanggal pengembalian</Label>
                  {tanggalPengembalian ? (
                    <TextInput
                      className="w-full"
                      color="forModal"
                      type="text"
                      value={tanggalPengembalian}
                      disabled
                    />
                  ) : (
                    ""
                  )}
                </li>
                <li className="mt-5">
                  <Button
                    color="buttonBaca"
                    className="w-full"
                    onClick={pinjam}
                  >
                    saya setuju
                  </Button>
                </li>
              </ul>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={openModalKembalikan}
          size="md"
          onClose={() => setOpenModalKembalikan(false)}
        >
          <Modal.Header>Informasi</Modal.Header>
          <Modal.Body>
            <div className="px-1 flex flex-col items-center">
              <p className="text-3xl font-semibold">Tersisa</p>
              <p className="text-8xl font-semibold my-2">{sisaHari}</p>
              <p className="text-xl font-semibold">hari lagi loh</p>
              <Button
                className="mt-5"
                color="buttonBaca"
                onClick={kembalikan}
                onClose={() => setOpenModalKembalikan(false)}
              >
                Yakin dikembalikan?
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </>
  );
};

export default DetailBukuMain;
