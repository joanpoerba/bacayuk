import {
  Button,
  TextInput,
  Textarea,
  Alert,
  Modal,
  Flowbite,
} from "flowbite-react";
import { useState, useEffect } from "react";
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

const EditBuku = () => {
  const [buku, setBuku] = useState("");
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
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const currentUrl = window.location.href;
  let bukuId = currentUrl.split("/")[3].split("?")[1];

  useEffect(() => {
    getBuku();
  }, []);

  const getBuku = async () => {
    const response = await axios.get(
      `http://localhost:3000/admin/getbukubyid?id=${bukuId}`
    );
    setBuku(response.data[0]);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setCover(image);
    setPreview(URL.createObjectURL(image));
  };

  const editBuku = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("id", bukuId);
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

    try {
      if (!formData.get("judul")) {
        formData.set("judul", buku.judul);
      } else {
        formData.set("judul", judul);
      }

      if (!formData.get("kategori")) {
        formData.set("kategori", buku.kategori);
      } else {
        formData.set("kategori", kategori);
      }

      if (!formData.get("penulis")) {
        formData.set("penulis", buku.penulis);
      } else {
        formData.set("penulis", penulis);
      }

      if (!formData.get("deskripsi")) {
        formData.set("deskripsi", buku.deskripsi);
      } else {
        formData.set("deskripsi", deskripsi);
      }

      if (!formData.get("jumlahHalaman")) {
        formData.set("jumlahHalaman", buku.jumlahHalaman);
      } else {
        formData.set("jumlahHalaman", jumlahHalaman);
      }

      if (!formData.get("tanggalTerbit")) {
        formData.set("tanggalTerbit", buku.tanggalTerbit);
      } else {
        formData.set("tanggalTerbit", tanggalTerbit);
      }

      if (!formData.get("bahasa")) {
        formData.set("bahasa", buku.bahasa);
      } else {
        formData.set("bahasa", bahasa);
      }

      if (!formData.get("penerbit")) {
        formData.set("penerbit", buku.penerbit);
      } else {
        formData.set("penerbit", penerbit);
      }

      if (!formData.get("panjang")) {
        formData.set("panjang", buku.panjang);
      } else {
        formData.set("panjang", panjang);
      }

      if (!formData.get("lebar")) {
        formData.set("lebar", buku.lebar);
      } else {
        formData.set("lebar", lebar);
      }

      await axios.post("http://localhost:3000/editBuku", formData);
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

  return (
    <>
      <Flowbite theme={{ theme: adminOverviewCustomTheme }}>
        <div className="mt-9 pb-10">
          <div className="col-span-6">
            <h2 className="mt-8 text-xl font-bold text-blue-950 col-span-12">
              Edit buku
            </h2>
            {buku ? (
              <form
                action=""
                method="post"
                onSubmit={editBuku}
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
                          defaultValue={buku.judul}
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
                          defaultValue={buku.penulis}
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
                          defaultValue={buku.deskripsi}
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
                        defaultValue={buku.jumlahHalaman}
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
                        defaultValue={buku.tanggalTerbit}
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
                        defaultValue={buku.bahasa}
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
                        defaultValue={buku.penerbit}
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
                        defaultValue={buku.panjang}
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
                        defaultValue={buku.lebar}
                        onChange={(e) => setLebar(e.target.value)}
                        required
                      />
                    </li>
                  </ul>
                </div>
                <div className="w-full xl:w-[900px] mt-5">
                  {clicked ? (
                    <Alert className="mb-5" color="success">
                      <span className="font-medium">Info!</span> Buku telah
                      diedit
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
                    Edit buku
                  </Button>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
        <Modal show={openModal} size="7xl" onClose={() => setOpenModal(false)}>
          <Modal.Header>Preview laporan</Modal.Header>
          <Modal.Body>
            <img src="img/laporan.png" alt="" />
          </Modal.Body>
          <Modal.Footer>
            <Button color="default" onClick={unduhLaporan}>
              unduh
            </Button>
          </Modal.Footer>
        </Modal>
      </Flowbite>
    </>
  );
};

export default EditBuku;
