import {
  Button,
  TextInput,
  Textarea,
  Alert,
  Modal,
  Flowbite,
} from "flowbite-react";
import { BsPeopleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";
import FileSaver from "file-saver";

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
  textarea: {
    colors: {
      default:
        "bg-gray-50 border-gray-300 text-gray-900 focus:border-gray-300 placeholder-gray-400 focus:ring-transparent dark:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    },
  },
  datepicker: {
    popup: {
      root: {
        base: "absolute -left-[190px] sm:-left-[60px] md:left-0 top-10 z-50 block pt-2",
        inline: "absolute",
      },
      footer: {
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-blue-700",
          today: "bg-blue-900 text-white hover:bg-blue-950",
          clear:
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        },
      },
    },
    views: {
      days: {
        items: {
          item: {
            selected: "bg-blue-900 text-white hover:bg-blue-950",
          },
        },
      },
      months: {
        items: {
          item: {
            selected: "bg-blue-900 text-white hover:bg-blue-950",
          },
        },
      },
      years: {
        items: {
          item: {
            selected: "bg-blue-900 text-white hover:bg-blue-950",
          },
        },
      },
      decades: {
        items: {
          item: {
            selected: "bg-blue-900 text-white hover:bg-blue-950",
          },
        },
      },
    },
  },
};

const AdminOverview = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [totalPetugas, setTotalPetugas] = useState(0);
  const [totalBuku, setTotalBuku] = useState(0);
  const [cover, setCover] = useState("");
  const [preview, setPreview] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [penulis, setPenulis] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jumlahHalaman, setJumlahHalaman] = useState("");
  const [tanggalTerbit, setTanggalTerbit] = useState("");
  const [bahasa, setBahasa] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [stok, setStok] = useState("");
  const [namaPetugas, setNamaPetugas] = useState("");
  const [emailPetugas, setEmailPetugas] = useState("");
  const [passwordPetugas, setPasswordPetugas] = useState("");
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    showTotalUser();
    showTotalPetugas();
    showTotalBuku();
  }, []);

  const showTotalUser = async () => {
    const response = await axios.get("http://localhost:3000/admin/totalusers");
    setTotalUser(response.data);
  };

  const showTotalPetugas = async () => {
    const response = await axios.get(
      "http://localhost:3000/admin/totalpetugas"
    );
    setTotalPetugas(response.data);
  };

  const showTotalBuku = async () => {
    const response = await axios.get("http://localhost:3000/admin/totalbuku");
    setTotalBuku(response.data);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setCover(image);
    setPreview(URL.createObjectURL(image));
  };

  const tambahBuku = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", cover);
    formData.append("judul", judul);
    formData.append("kategori", kategori);
    formData.append("penulis", penulis);
    formData.append("deskripsi", deskripsi);
    formData.append("jumlahHalaman", jumlahHalaman);
    formData.append("tanggalTerbit", tanggalTerbit);
    formData.append("bahasa", bahasa);
    formData.append("penerbit", penerbit);
    formData.append("panjang", panjang);
    formData.append("lebar", lebar);
    formData.append("stok", stok);

    try {
      await axios.post("http://localhost:3000/tambahbuku", formData);
    } catch (error) {
      console.log(error);
    }
  };

  const unduhLaporan = async () => {
    await axios
      .get("http://localhost:3000/unduhlaporan", { responseType: "blob" })
      .then((res) => {
        return res.data;
      })
      .then((blob) => {
        return FileSaver.saveAs(blob, "databacayuk.xlsx");
      });
  };

  const tambahPetugas = async () => {
    await axios.post("http://localhost:3000/admin/tambahpetugas", {
      nama: namaPetugas,
      email: emailPetugas,
      password: passwordPetugas,
    });
  };

  return (
    <>
      <Flowbite theme={{ theme: adminOverviewCustomTheme }}>
        <div className="mt-9 pb-10">
          <div className="grid grid-cols-12 items-start gap-y-6">
            <div className="col-span-12 md:col-start-1 md:col-end-7 xl:col-end-3 bg-white shadow-md flex justify-between items-end border-l-8 border-blue-900 rounded-md font-semibold p-6">
              <div className="flex items-end text-blue-900">
                <p className="text-4xl md:text-7xl">{totalUser}</p>
                <p className="font-bold">user</p>
              </div>
              <BsPeopleFill className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] fill-blue-900" />
            </div>
            <div className="col-span-12 md:col-start-1 md:col-end-7 xl:col-start-4 xl:col-end-6 bg-white shadow-md flex justify-between items-end border-l-8 border-blue-900 rounded-md font-semibold p-6">
              <div className="flex items-end text-blue-900">
                <p className="text-4xl md:text-7xl">{totalPetugas}</p>
                <p className="font-bold">petugas</p>
              </div>
              <FaBook className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] fill-blue-900" />
            </div>
            <div className="col-span-12 md:col-start-1 md:col-end-7 xl:col-start-7 xl:col-end-9 bg-white shadow-md flex justify-between items-end border-l-8 border-blue-900 rounded-md font-semibold p-6">
              <div className="flex items-end text-blue-900">
                <p className="text-4xl md:text-7xl">{totalBuku}</p>
                <p className="font-bold">buku</p>
              </div>
              <FaBook className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] fill-blue-900" />
            </div>
            <Button
              onClick={() => setOpenModal(true)}
              className="col-span-12 md:col-start-1 md:col-end-7 xl:col-start-11 xl:col-end-13"
              color="default"
            >
              unduh laporan
              <HiDownload className="ml-1 h-5 w-5" />
            </Button>
          </div>
          <div className="col-span-6">
            <h2 className="mt-8 text-xl font-bold text-blue-950 col-span-12">
              Tambah buku
            </h2>
            <form
              action=""
              method="post"
              onSubmit={tambahBuku}
              encType="multipart/form-data"
            >
              <h2 className="mt-4 text-md font-medium text-blue-950 col-span-12">
                Overview
              </h2>
              <div className="mt-4 w-full xl:w-[900px] grid grid-cols-12 items-start gap-x-5">
                {preview ? (
                  <img className="col-span-3" src={preview} alt="" />
                ) : (
                  ""
                )}
                <input
                  className="col-span-12 my-5"
                  type="file"
                  onChange={loadImage}
                />
                <div className="col-span-12 mt-6 lg:mt-0">
                  <ul className="grid grid-cols-12 gap-6">
                    <li className="col-span-12">
                      <TextInput
                        color="default"
                        id="base"
                        type="text"
                        sizing="md"
                        placeholder="judul"
                        name="judul"
                        onChange={(e) => setJudul(e.target.value)}
                        required
                      />
                    </li>
                    <li className="col-span-12">
                      <TextInput
                        color="default"
                        id="base"
                        type="text"
                        sizing="md"
                        placeholder="penulis"
                        name="penulis"
                        onChange={(e) => setPenulis(e.target.value)}
                        required
                      />
                    </li>
                    <li className="col-span-12">
                      <Textarea
                        className="resize-none"
                        color="default"
                        id="comment"
                        placeholder="deskripsi"
                        name="deskripsi"
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                        rows={8}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="mt-8 text-md font-medium text-blue-950 col-span-12">
                Kategori
              </h2>
              <div className="mt-4 w-full xl:w-[900px] flex flex-wrap gap-3">
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("fiksi")}
                    name="kategori"
                  />
                  <label htmlFor="">fiksi</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("ilmiah")}
                    name="kategori"
                  />
                  <label htmlFor="">ilmiah</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("aksi")}
                    name="kategori"
                  />
                  <label htmlFor="">aksi</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("romantis")}
                    name="kategori"
                  />
                  <label htmlFor="">romantis</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("biografi")}
                    name="kategori"
                  />
                  <label htmlFor="">biografi</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("sains")}
                    name="kategori"
                  />
                  <label htmlFor="">sains</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("kamus")}
                    name="kategori"
                  />
                  <label htmlFor="">kamus</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("anak-anak")}
                    name="kategori"
                  />
                  <label htmlFor="">anak-anak</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("ekonomi")}
                    name="kategori"
                  />
                  <label htmlFor="">ekonomi</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("filsafat")}
                    name="kategori"
                  />
                  <label htmlFor="">filsafat</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("horor")}
                    name="kategori"
                  />
                  <label htmlFor="">horor</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("pengembangan diri")}
                    name="kategori"
                  />
                  <label htmlFor="">pengembangan diri</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("psikologi")}
                    name="kategori"
                  />
                  <label htmlFor="">psikologi</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("sastra")}
                    name="kategori"
                  />
                  <label htmlFor="">sastra</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("misteri")}
                    name="kategori"
                  />
                  <label htmlFor="">misteri</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("drama")}
                    name="kategori"
                  />
                  <label htmlFor="">drama</label>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <input
                    type="radio"
                    onClick={() => setKategori("keluarga")}
                    name="kategori"
                  />
                  <label htmlFor="">keluarga</label>
                </div>
              </div>
              <h2 className="mt-8 text-md font-medium text-blue-950 col-span-12">
                Detail
              </h2>
              <div className="mt-4 w-full xl:w-[900px]">
                <ul className="grid grid-cols-12 gap-3 md:gap-6">
                  <li className="col-span-6 md:col-span-4">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="jumlah halaman"
                      name="jumlahHalaman"
                      onChange={(e) => setJumlahHalaman(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-6 md:col-span-3">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="tanggal terbit"
                      name="tanggalTerbit"
                      onChange={(e) => setTanggalTerbit(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="bahasa"
                      name="bahasa"
                      onChange={(e) => setBahasa(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-6 md:col-span-5">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="penerbit"
                      name="penerbit"
                      onChange={(e) => setPenerbit(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-6 md:col-span-3">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="panjang"
                      name="panjang"
                      onChange={(e) => setPanjang(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-6 md:col-span-3">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="lebar"
                      name="lebar"
                      onChange={(e) => setLebar(e.target.value)}
                      required
                    />
                  </li>
                </ul>
              </div>
              <h2 className="mt-8 text-md font-medium text-blue-950 col-span-12">
                Stok
              </h2>
              <div className="mt-4 w-full xl:w-[900px]">
                <ul className="grid grid-cols-12 gap-3 md:gap-6">
                  <li className="col-span-6 md:col-span-4">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="stok buku"
                      name="stok"
                      onChange={(e) => setStok(e.target.value)}
                      required
                    />
                  </li>
                </ul>
              </div>
              <div className="w-full xl:w-[900px] mt-5">
                {clicked ? (
                  <Alert className="mb-5" color="success">
                    <span className="font-medium">Info!</span> Buku telah
                    ditambah
                  </Alert>
                ) : (
                  ""
                )}
                <Button
                  onClick={() => setClicked(true)}
                  className="w-full"
                  color="default"
                  type="submit"
                >
                  Tambah buku
                </Button>
              </div>
            </form>
          </div>
          <div className="col-span-6"></div>
          <h2 className="mt-8 text-xl font-bold text-blue-950 col-span-12">
            Tambah petugas
          </h2>
          <form onSubmit={tambahPetugas}>
            <div className="mt-4 w-full xl:w-[900px] grid grid-cols-12 items-start gap-x-5">
              <div className="col-span-12 mt-6 lg:mt-0">
                <ul className="grid grid-cols-12 gap-6">
                  <li className="col-span-12">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="nama petugas"
                      name="namaPetugas"
                      onChange={(e) => setNamaPetugas(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-12">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="email petugas"
                      name="emailPetugas"
                      onChange={(e) => setEmailPetugas(e.target.value)}
                      required
                    />
                  </li>
                  <li className="col-span-12">
                    <TextInput
                      color="default"
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="password petugas"
                      name="passwordPetugas"
                      onChange={(e) => setPasswordPetugas(e.target.value)}
                      required
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full xl:w-[900px] mt-5">
              {clicked2 ? (
                <Alert className="mb-5" color="success">
                  <span className="font-medium">Info!</span> Petugas telah
                  ditambah
                </Alert>
              ) : (
                ""
              )}
              <Button
                onClick={() => setClicked2(true)}
                className="w-full"
                color="default"
                type="submit"
              >
                Tambah petugas
              </Button>
            </div>
          </form>
        </div>
        <Modal show={openModal} size="7xl" onClose={() => setOpenModal(false)}>
          <Modal.Header>Preview laporan</Modal.Header>
          <Modal.Body>
            <img src="img/laporan.png" alt="" />
          </Modal.Body>
          <Modal.Footer>
            <Button className="w-full" color="default" onClick={unduhLaporan}>
              unduh
            </Button>
          </Modal.Footer>
        </Modal>
      </Flowbite>
    </>
  );
};

export default AdminOverview;
