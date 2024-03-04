-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 03, 2024 at 09:13 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bacayuk`
--

-- --------------------------------------------------------

--
-- Table structure for table `bukus`
--

CREATE TABLE `bukus` (
  `id` int(11) NOT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `urlCover` varchar(255) DEFAULT NULL,
  `judul` text DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `jumlahHalaman` varchar(255) DEFAULT '-',
  `tanggalTerbit` varchar(255) DEFAULT '-',
  `bahasa` varchar(255) DEFAULT '-',
  `penerbit` varchar(255) DEFAULT '-',
  `penulis` varchar(255) DEFAULT '-',
  `panjang` varchar(255) DEFAULT '-',
  `lebar` varchar(255) DEFAULT '-',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bukus`
--

INSERT INTO `bukus` (`id`, `cover`, `urlCover`, `judul`, `kategori`, `deskripsi`, `jumlahHalaman`, `tanggalTerbit`, `bahasa`, `penerbit`, `penulis`, `panjang`, `lebar`, `createdAt`, `updatedAt`) VALUES
(40, '3e8ba28b32f03b3079bca6c856a070e8.png', 'http://localhost:3000/buku/3e8ba28b32f03b3079bca6c856a070e8.png', 'Buku Paten UTBK SNBT TPS 2024', 'pengembangan diri', 'Setelah kelulusan SMA ataupun SMK, pasti Anda akan melanjutkan ke jenjang berikutnya atau sekadar mencari pengalaman kerja. Secara umum ujian masuk ke perguruan tinggi ada tiga jenis yaitu jalur prestasi, jalur tes, dan jalur mandiri. Jalur prestasi atau disebut dengan Seleksi Nasional Berdasarkan Prestasi (SNBP) merupakan ujian masuk perguruan tinggi dengan menggunakan nilai rapor semester 1 sampai semester 5. Selanjutnya, ada jalur tes yang disebut dengan Seleksi Nasional Berdasarkan Tes (SNBT), ujian masuk perguruan tinggi menggunakan tes. Jalur terakhir adalah jalur mandiri, yaitu jalur tes masuk perguruan tinggi sesuai dengan kebijakan masing-masing perguruan tinggi yang bersangkutan.\r\n\r\nSNBT merupakan tes yang cukup menguras tenaga dan pikiran. Bisa dibayangkan semua calon mahasiswa se-Indonesia ikut dalam tes ini setelah mereka gagal dalam seleksi jalur prestasi. Di sisi lain, hampir semua tes mandiri juga memakai nilai UTBK-SNBT. Pada 2023, SNBT terdapat perubah¬an yang sangat signifikan, yaitu dihapuskannya Tes Kemampuan Akademik baik SAINTEK maupun SOSHUM. SNBT hanya memuat materi Tes Potensi Skolastik saja, seperti Potensi Kognitif, Penalaran Matematika, Literasi Bahasa Indonesia, dan Literasi Bahasa Inggris.', '438', '20 Jul 2023', 'Indonesia', 'Pixelindo', 'Tim Tentor Paten', '26cm', '19cm', '2024-02-14 16:19:30', '2024-02-14 16:19:30'),
(42, 'aae00ae5b32fa69eed676b2d1f7e869c.jpg', 'http://localhost:3000/buku/aae00ae5b32fa69eed676b2d1f7e869c.jpg', 'Think and Grow Rich', 'pengembangan diri', 'This book contains money-making secrets that can change your life. Think and Grow Rich, based on the author\'s famed Law of Success, represents the distilled wisdom of distinguished men of great wealth and achievement. Andrew Carnegie\'s magic formula for success was the direct inspiration for this book. Carnegie demonstrated its soundness when his coaching brought fortunes to those young men to whom he had disclosed his secret. This book will teach you that secret--and the secrets of other great men like him. It will show you not only what to do but also how to do it. If you learn and apply the simple basic techniques revealed here, you will have mastered the secret of true and lasting success--and you may have whatever you want in life!\r\n\r\nThis book was written by Napoleon Hill (October 26, 1883 – November 8, 1970) was an American author. He is widely regarded as one of the greatest successful authors of books. His best-known book, Think and Grow Rich (1937), is one of the best-selling books of all time.', '256', '5 Mei 2021', 'Indonesia', 'Random House USA', 'Napoleon Hill', '10.5cm', '17cm', '2024-02-15 00:17:38', '2024-02-15 00:17:38'),
(44, '767f1e35215993e6909b7213fcedf8c9.jpg', 'http://localhost:3000/buku/767f1e35215993e6909b7213fcedf8c9.jpg', 'English Classics: The Case-Book of Sherlock Holmes', 'misteri', '”Tidak ada salahnya sekarang,” adalah komentar Mr. Sherlock Holmes ketika, untuk kesepuluh kalinya dalam beberapa tahun, saya meminta izinnya untuk mengungkapkan narasi berikut. Jadi, akhirnya saya mendapat izin untuk mencatat apa yang, dalam beberapa hal, merupakan momen tertinggi dalam karier teman saya.\r\n\r\nBaik Holmes dan saya memiliki kelemahan pada Pemandian Turki. Di tengah asap rokok dalam kelesuan yang menyenangkan di ruang pengeringan, saya merasa dia tidak terlalu pendiam dan lebih manusiawi dibandingkan di tempat lain. Di lantai atas gedung Northumberland Avenue terdapat sudut terpencil di mana dua sofa terletak berdampingan, dan di sinilah kami berbaring pada tanggal 3 September 1902, hari ketika narasi saya dimulai. Aku bertanya kepadanya apakah ada sesuatu yang terjadi, dan sebagai jawabannya dia mengeluarkan lengannya yang panjang, kurus, dan gugup dari selimut yang menyelimutinya dan mengeluarkan sebuah amplop dari saku dalam mantel yang tergantung di sampingnya.\r\n\r\n“Ini mungkin orang bodoh yang cerewet dan mementingkan diri sendiri, ini mungkin soal hidup atau mati,” katanya sambil menyerahkan surat itu padaku. “Saya tidak tahu apa-apa selain yang disampaikan pesan ini kepada saya.”', '380', '3 Jan 2024', 'English', 'Gramedia Pustaka Utama', 'Sir Arthur Conan Doyle, SIR ARTHUR CONAN DOYLE', '18cm', '11cm', '2024-02-15 00:30:39', '2024-02-15 00:30:39'),
(45, 'e99cd009b9d7db2f0a7f8d9961673d99.jpg', 'http://localhost:3000/buku/e99cd009b9d7db2f0a7f8d9961673d99.jpg', 'English Classics: Woman in White', 'misteri', 'Walter Hartright, seorang guru seni muda, bertemu dan memberikan arahan kepada seorang wanita misterius dan tertekan yang berpakaian serba putih, tersesat di London; dia kemudian diberitahu oleh polisi bahwa dia telah melarikan diri dari rumah sakit jiwa. Segera setelah itu, dia pergi ke Limmeridge House di Cumberland, dipekerjakan sebagai guru menggambar atas rekomendasi temannya, Pesca, seorang guru bahasa Italia. Rumah tangga Limmeridge terdiri dari murid-murid Frederick Fairlie dan Walter yang cacat: Laura Fairlie, keponakan Tuan Fairlie, dan Marian Halcombe, saudara tirinya yang setia. Walter menyadari bahwa Laura memiliki kemiripan yang menakjubkan dengan wanita berkulit putih, yang dikenal di rumah tangga dengan nama Anne Catherick, seorang anak cacat mental yang dulunya tinggal di dekat Limmeridge dan menyayangi ibu Laura, yang pertama kali mendandaninya dengan pakaian putih.\r\n\r\nSelama beberapa bulan berikutnya, Walter dan Laura jatuh cinta, meskipun Laura bertunangan dengan Sir Percival Glyde, Baronet. Menyadari hal ini, Marian menyarankan Walter untuk meninggalkan Limmeridge. Laura menerima surat kaleng yang memperingatkan dia agar tidak menikahi Glyde. Walter menyimpulkan bahwa Anne telah mengirim surat itu dan bertemu dengannya lagi di Cumberland; dia menjadi yakin bahwa Glyde awalnya menempatkan Anne di rumah sakit jiwa. Meskipun pengacara keluarga merasa was-was atas persyaratan keuangan penyelesaian pernikahan, yang akan memberikan seluruh kekayaan Laura kepada Glyde jika dia meninggal tanpa meninggalkan ahli waris, dan pengakuan Laura bahwa dia mencintai pria lain, Laura dan Glyde menikah pada bulan Desember 1849. dan melakukan perjalanan ke Italia selama enam bulan. Saat ini, Walter mengikuti ekspedisi ke Honduras.', '648', '30 Jul 2023', 'English', 'Gramedia Pustaka Utama', 'Wilkie Collins, WILKIE COLLINS', '18cm', '11cm', '2024-02-15 00:37:11', '2024-02-15 00:37:11'),
(46, '0c40f3f59ff908e0a16a28af2ca6b395.jpg', 'http://localhost:3000/buku/0c40f3f59ff908e0a16a28af2ca6b395.jpg', 'English Classics: The Tell Tale Heart And Other Stories', 'misteri', 'Benar!—gugup—saya sangat, sangat sangat gugup; tapi kenapa kamu bilang aku gila? Penyakit ini telah mempertajam indra saya—bukan menghancurkan—bukan menumpulkannya. Yang terpenting adalah indra pendengarannya yang tajam. Aku mendengar segala sesuatu yang ada di langit dan di bumi. Saya mendengar banyak hal di neraka. Lalu, bagaimana aku bisa marah? Mendengarkan! dan amati betapa sehatnya—betapa tenangnya saya menceritakan keseluruhan cerita kepada Anda.\r\n\r\nMustahil untuk mengatakan bagaimana pertama kali gagasan itu memasuki otak saya; tapi begitu dikandung, hal itu menghantuiku siang dan malam. Objeknya tidak ada. Gairah tidak ada. Aku mencintai lelaki tua itu. Dia tidak pernah berbuat salah padaku. Dia tidak pernah menghinaku. Untuk emasnya aku tidak punya keinginan. Saya pikir itu adalah matanya! ya, itu dia! Dia memiliki mata burung nasar—mata biru pucat, dengan lapisan film di atasnya. Setiap kali benda itu menimpaku, darahku menjadi dingin; dan perlahan-lahan—sedikit demi sedikit—aku memutuskan untuk membunuh orang tua itu, dan dengan demikian menghilangkan pandanganku selamanya.', '272', '29 Agt 2023', 'English', 'Gramedia Pustaka Utama', 'EDGAR ALLAN POE', '13cm', '11cm', '2024-02-15 00:40:57', '2024-02-15 00:40:57'),
(49, '0563f6f0f9396c713596eafc5bd76644.jpg', 'http://localhost:3000/buku/0563f6f0f9396c713596eafc5bd76644.jpg', 'English Classics: A Midsummer Night\'s Dream', 'romantis', 'A Midsummer Night\'s Dream adalah sebuah komedi yang ditulis oleh William Shakespeare c. 1595 atau 1596. Drama ini berlatar di Athena, dan terdiri dari beberapa subplot yang berkisar pada pernikahan Theseus dan Hippolyta. Satu subplot melibatkan konflik antara empat kekasih Athena. Film lainnya mengikuti sekelompok enam aktor amatir yang sedang berlatih drama yang akan mereka tampilkan sebelum pernikahan. Kedua kelompok menemukan diri mereka di hutan yang dihuni oleh peri yang memanipulasi manusia dan terlibat dalam intrik rumah tangga mereka sendiri. Drama tersebut adalah salah satu karya Shakespeare yang paling populer dan dipentaskan secara luas.\r\nDrama tersebut terdiri dari lima plot yang saling berhubungan, dihubungkan dengan perayaan pernikahan Adipati Theseus dari Athena dan ratu Amazon, Hippolyta, yang berlatarkan secara bersamaan di hutan dan di alam Negeri Dongeng, di bawah cahaya bulan.', '112', '15 Mar 2023', 'Indonesia', 'Gramedia Pustaka Utama', 'William Shakespeare', '18cm', '11 cm', '2024-02-15 05:46:55', '2024-02-15 05:46:55'),
(50, '49c5f4b0293de3cf018125ac235cadee.jpg', 'http://localhost:3000/buku/49c5f4b0293de3cf018125ac235cadee.jpg', '1 Kos, 3 Cinta, 7 Keberuntungan', 'romantis', 'Novel 1 Kos, 3 Cinta, 7 Keberuntungan bercerita tentang sebuah kosan yang bentuknya tidak seperti kosan pada umumnya bernama kos 7. Kos 7 ini seperti apartemen, elite, mewah, elegan, dan komplit dengan semua fasilitasnya. Ada liftnya, mesin ATM, kolam renang, mini market 24 jam, bahkan ada taman rooftop nya. Dengan fasilitas yang tidak biasa itu, tentu biaya sewanya juga tidak biasa. Harga sewa kos yang berada di kawasan perkantoran Jakarta ini sebulannya bisa mencapai 7 juta. Penghuninya kebanyakan dari kalangan menengah atas, mulai dari pemusik, dokter, producer, hingga pengacara.\r\nNovel ini mengisahkan problematika kehidupan ibu kos Fatimah alias Patty dan anak-anak kosnya. Patty diramal bahwa hidupnya tidak akan jauh-jauh dari angka 7. Angka 7 adalah angka keberuntungannya. Kos ini masih ada bau-bau mistisnya, selalu berkaitan dengan angka 7. Biaya sewanya saja harus 7 juta. Kos yang terdiri dari 3 lantai ini, masing-masing lantainya ada 7 kamar. Yang bikin merinding, di dalam kamar lantai 3 nomor 7 tersebut ada guci-guci antik yang jumlahnya ada 7 dan tidak boleh pecah. Selain itu, entah kebetulan atau tidak, penghuni kamar kos nomor 7 selalu dirundung masalah dan berulah.', '312', '7 Okt 2019', 'Indonesia', 'Gramedia Pustaka Utama', 'Astrid Tito', '18cm', '15.0 cm', '2024-02-15 05:50:45', '2024-02-15 05:50:45'),
(54, '6bd4838c94a0d7631dfc1f1ecf69bea5.jpg', 'http://localhost:3000/buku/6bd4838c94a0d7631dfc1f1ecf69bea5.jpg', 'Harry Potter dan Tawanan Azkaban (Harry Potter and The Prisoner of Azkaban)', 'fiksi', 'Novel Harry Potter dan Tawanan Azkaban merupakan terjemahan Bahasa Indonesia dari novel Harry Potter and The Prisoner of Azkaban, novel ketiga seri Harry Potter yang ditulis oleh J.K. Rowling. Novel ini mengisahkan tentang Harry yang berusaha menghindari Sirius Black, penyihir jahat yang baru kabur dari penjara Azkaban.\n\nSirius Black yang kabur dari penjara Azkaban ternyata mengincar Harry dan membuat Kementrian Sihir mengirimkan Dementor dari Azkaban untuk berpatroli di Hogwarts. Saat tahun ketiga Harry bersekolah, ia mendapatkan ancaman maut dan akhirnya ia mengetahui fakta baru tentang masa lalunya. Ia juga bertemu dan bertatap muka dengan pelayan Pangeran Kegelapan yang paling setia.', '544', '4 Apr 2017', 'Indonesia', 'Gramedia Pustaka Utama', 'J.K. Rowling', '20.0cm', '13.5 cm', '2024-02-11 10:32:12', '2024-02-11 10:32:12'),
(55, '026dffb893579b8f478de64dfc8a087f.jpg', 'http://localhost:3000/buku/026dffb893579b8f478de64dfc8a087f.jpg', 'Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa', 'pengembangan diri', 'Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear. Pada umumnya, perubahan-perubahan kecil seringkali terkesan tak bermakna karena tidak langsung membawa perubahan nyata pada hidup suatu manusia. Jika diumpamakan sekeping koin tidak bisa menjadikan kaya, suatu perubahan positif seperti meditasi selama satu menit atau membaca buku satu halaman setiap hari mustahil menghasilkan perbedaan yang bisa terdeteksi. Namun hal tersebut tidak sejalan dengan pemikiran James Clear, ia merupakan seorang pakar dunia yang terkenal dengan \'habits\' atau kebiasaan. Ia tahu bahwa tiap perbaikan kecil bagaikan menambahkan pasir ke sisi positif timbangan dan akan menghasilkan perubahan nyata yang berasal dari efek gabungan ratusan bahkan ribuan keputusan kecil. Ia menamakan perubahan kecil yang membawa pengaruh yang luar biasa dengan nama atomic habits.', '356', '15 Sep 2019', 'Indonesia', 'Gramedia Pustaka Utama', 'James Clear', '23.0cm', '15.0 cm', '2024-02-11 16:44:05', '2024-02-11 16:44:05'),
(56, 'b77deb5d49759b43950f601659b1ae66.jpg', 'http://localhost:3000/buku/b77deb5d49759b43950f601659b1ae66.jpg', 'Gadis Kretek', 'drama', 'Gadis Kretek adalah sebuah novel karya Ratih Kumala. Novel ini berisi tentang perkembangan industri kretek pada zaman periode penjajahan Belanda hingga kemerdekaan. Di mana industri kretek tersebut, sang pemilik (Romo) mewariskan kepada putra sulungnya yang bernama Tegar.\r\n\r\nDengan latar Kota M, Kudus, Jakarta, dari periode penjajahan Belanda hingga kemerdekaan, novel setebal 288 halaman ini akan membawa pembaca berkenalan dengan perkembangan industri kretek di Indonesia. Kaya akan wangi tembakau. Sarat dengan aroma cinta. Yuk simak sinopsisnya berikut ini!', '288', '7 Juli 2019', 'Indonesia', 'Gramedia Pustaka Utama', 'Ratih Kumala', '20.0cm', '13.5 cm', '2024-02-12 10:55:03', '2024-02-12 10:55:03'),
(57, '9978bc0567fe8d9cc170082766a8ed67.jpg', 'http://localhost:3000/buku/9978bc0567fe8d9cc170082766a8ed67.jpg', 'Rich Dad Poor Dad', 'ekonomi', 'Robert Kiyosaki telah menantang dan mengubah cara pikir puluhan juta orang di seluruh dunia tentang uang. Dengan perspektif yang kerap bertentangan dengan kebijaksanaan umum, Robert memiliki reputasi sebagai orang yang bicara secara apa adanya, tidak menganggap penting hal-hal yang umumnya dianggap serius, dan berani. Dia diakui di seluruh dunia sebagai orang yang berdedikasi dan peduli dengan pendidikan keuangan.\r\n\r\n“Alasan utama orang mengalami kesulitan keuangan adalah mereka menghabiskan waktu bertahun-tahun di sekolah tapi tidak belajar apa-apa tentang uang. Akibatnya, orang belajar untuk bekerja demi uang tapi tidak pernah belajar membuat uang bekerja bagi mereka.”\r\n—Robert Kiyosaki\r\n\r\n“Rich Dad Poor Dad adalah titik awal bagi siapa pun yang ingin memegang kendali atas masa depan keuangan mereka.”', '244', '21 Agustus 2016', 'Indonesia', 'Gramedia Pustaka Utama', 'Robert T. Kiyosaki', '23.0cm', '15.0cm', '2024-02-12 11:05:57', '2024-02-12 11:05:57'),
(58, 'c955fff6f11f8136f9191bba191e989b.jpg', 'http://localhost:3000/buku/c955fff6f11f8136f9191bba191e989b.jpg', 'Yang Katanya Cemara', 'keluarga', 'Hai, aku Vania, kadang aku biasa dipanggil Cuplis. Orang-orang mengenalku sebagai seorang anak yang hidup dalam keluarga yang begitu hangat dan cemara.\r\n\r\nCemara? Ya, mereka bilang hidupku sempurna dan begitu dipenuhi warna di dalamnya. Namun, nyatanya semua yang mereka lihat tak pernah seindah itu. Banyak kisah yang akhirnya justru kusimpan sendirian. Khususnya, tentang aku dan keluargaku.\r\n\r\nKadang, ingin aku kembali membuka lembaran tentang ‘mereka.’ Sosok yang pernah menjadi cemara di hidupku. Namun, sekarang harus aku terima, kalau kita sudah hidup dengan jalan kita masing-masing. Ayah dengan hidupnya yang baru dan aku bersama Bunda dengan hidup kami yang harus terus berjalan.', '220', '9 Januari 2024', 'Indonesia', 'Bukune', 'Vania Winola', '19.0cm', '13.0cm', '2024-02-13 04:35:32', '2024-02-13 04:35:32'),
(59, '710b1e50f91a1988691e18681b623cf7.jpg', 'http://localhost:3000/buku/710b1e50f91a1988691e18681b623cf7.jpg', 'Keep Up With Us!', 'drama', 'Menjadi anak tengah itu tandanya harus mau mengalah seumur hidup. Entah mengalah sama si Bungsu, atau bersabar kalau dibanding-bandingkan sama si Sulung yang superior. Namun, apa iya harus mengalah juga soal jodoh? Acara buka puasa bersama di rumah mendadak canggung, saat si Tengah mengenalkan sang pacar pada keluarganya.\r\n\r\nGilang si Tengah, kesal saat mengetahui bahwa Gita ternyata sudah kenal duluan dengan si Sulung, Gara. Yang bikin gawat, orangtua Gita sangat berharap agar Gara menjadi menantu mereka. Nggak heran juga, karena si Tengah sadar kalau si Sulung akan selalu dianggap lebih baik dari dirinya. Ironisnya, sejak malam itu pula, Gara justru lebih terbuka pada Gita dibanding keluarganya sendiri.', '320', '22 Mei 2022', 'Indonesia', 'Elex Media Komputindo', 'G. Dani', '19.5cm', '12.5cm', '2024-02-14 06:24:37', '2024-02-14 06:24:37'),
(60, 'b8d5a6ec33e33252b0bfd3b2bda3a39a.jpg', 'http://localhost:3000/buku/b8d5a6ec33e33252b0bfd3b2bda3a39a.jpg', 'Mereka Sudah Mati', 'horor', 'Anak-anak itu bernyanyi gembira, berlarian tak kenal lelah, sama sekali tak seperti anak-anak yang sakit. Begitu yang terlihat oleh Suster Violet.\r\nNamun, suster lain melihat hal yang berbeda. Anak-anak itu sangat menyeramkan, tangan mereka gelap berkuku panjang, mencengkeram sangat kuat hingga menimbulkan lebam-lebam.\r\nBian, seorang dokter magang dan Tama, seorang dokter spesialis pun terpaksa harus mengakui ada sesuatu yang mistis di rumah sakit ketika mereka juga merasakan cengkeraman gaib.\r\nSuster Violet yang mampu melihat hal-hal gaib, bukan hanya roh orang yang sudah meninggal tapi juga roh orang yang akan meninggal, merasa bertanggung jawab untuk mencaritahu penyebab roh-roh itu muncul. Namun, apa jadinya jika dia sendiri malah terjebak di dunia gaib?', '304', '12 Jan 2023', 'Indonesia', 'Gramedia Pustaka Utama', 'Arumi Ekowati', ' 21cm', ' 14cm', '2024-02-14 15:22:03', '2024-02-14 15:22:03'),
(61, '1dfe7f787adcaa67b7355a1695bc0007.jpg', 'http://localhost:3000/buku/1dfe7f787adcaa67b7355a1695bc0007.jpg', 'Jangan Panggil Namaku : Kumpulan Kisah Terhoror True Story', 'horor', 'Dari kecil aku sering mengalami peristiwa-peristiwa buruk yang sulit dijelaskan, terutama yang berhubungan dengan cerita mistis. Unsur-unsur suatu hal yang sering membuat bulu kuduk berdiri merasakan aura yang bisa diibaratkan seperti sebuah ujung magnet yang saling bertemu. Maka yang terjadi adalah ada semacam energi tak terlihat menimbulkan suatu reaksi.\r\n\r\nBuku ini adalah kumpulan cerita nyata yang bisa jadi mengandung energi yang sangat besar, membuat perutmu sakit, atau hal-hal di luar nalar kita yang membuatmu meragukan hal-hal yang selama ini kamu percaya. Cerita-cerita di dalam buku ini juga seperti:', '200', '14 Feb 2023', 'Indonesia', 'Anak Hebat Indonesia', 'Asri Satitis, Siti Zulia Agustina, Myrra Shalsa Nabila, Azzahra Viana, Febri Ardhita Sidik, Dll', '19cm', '13cm', '2024-02-14 15:24:47', '2024-02-14 15:24:47'),
(62, 'b2b5e6b979c4d9b377250cba9cfd7e19.jpg', 'http://localhost:3000/buku/b2b5e6b979c4d9b377250cba9cfd7e19.jpg', 'Kisah Aisyah & Ojol', 'horor', 'Disclaimer, cerita dalam novel ini mengandung materi yang diperuntukkan untuk para pembaca mulai dari 13 tahun keatas. Tidak dianjurkan untuk dibaca anak-anak di bawah umur 13 tahun, dikhawatirkan adanya alur cerita yang bergenre misteri dan horor tidak sesuai dengan pembaca dibawah umur tersebut. Buku ini banyak sekali dicari dan dibaca oleh kalangan remaja baik itu remaja perempuan maupun remaja laki-laki, namun tidak menutup kemungkinan bahwa orang dewasa juga akan menikmati cerita yang ada di dalam buku ini. Buku yang berjudul Kisah Aisyah & Ojol karya Matsuri, dkk dengan tebal sebanyak 204 halaman ini ditulis dengan menggunakan kosakata yang ringan sehingga para pembaca dapat memahami isi dan tujuan dari buku ini. Selain itu karena kisah horor dan misteri yang ada di dalam buku ini akan membuat para pembaca penasaran dengan bagaimana akhir dari ceritanya. Diharapkan dengan adanya novel ini para pembaca dapat menikmati waktu luang dengan santai.', '204', '24 Nov 2020', 'Indonesia', 'Mediakom', 'Matsuri, dkk', '19cm', '13cm', '2024-02-14 15:27:04', '2024-02-14 15:27:04'),
(63, '9fe8160e9685ea6bcc85f1497b1bb225.jpg', 'http://localhost:3000/buku/9fe8160e9685ea6bcc85f1497b1bb225.jpg', 'Tumbal', 'horor', 'Apa benar arwah gadis hamil yang bunuh diri jadi arwah paling pendendam? Pertanyaan itu David lontarkan ke Jounatan setelah malam itu, saat mereka bertemu roh Pricil, siswi SMA yang bunuh diri dengan loncat dari jembatan. Ketika pertanyaan David belum terjawab, dan teka-teki kematian Pricil belum terurai, ternyata bahaya yang jauh lebih besar telah mengintai mereka.\r\n\r\nDia yang bersemayam selama ratusan tahun kini mencari tumbal atas dendam masa lalu dengan mengendap di belakang Pricil. Jounatan pun tahu bahwa di antara mereka pasti akan ada yang mati. Namun tak ada jalan berbalik arah karena dendam harus dituntaskan.\r\n\r\nTumbal merupakan novel horor kedua setelah novel Arwah yang ditulis oleh Jounatan dan Guntur Alam. Buku ini melanjutkan kisah Jou yang pergi ke rumah sepupunya di Palembang dalam rangka menenangkan diri akibat dari berbagai macam hal yang telah menimpa ia sebelumnya. Belum sempat menenangkan diri, Jou sudah harus berhadapan dengan sosok yang mengerikan.', '184', '2 Sep 2018', 'Indonesia', 'Elex Media Komputindo', 'Jounatan & Guntur Alam', '19cm', '13cm', '2024-02-14 15:30:09', '2024-02-14 15:30:09'),
(64, 'd639b5e2de22613fa28335dd89c028e1.jpg', 'http://localhost:3000/buku/d639b5e2de22613fa28335dd89c028e1.jpg', 'Harry Potter dan Piala Api (Harry Potter and The Goblet of Fire)', 'fiksi', 'Di Hogwarts, Profesor Dumbledore mengumumkan bahwa Alastor \"Mad-Eye\" Moody menjadi guru Pertahanan Terhadap Ilmu Hitam yang baru. Hogwarts akan menjadi tuan rumah Turnamen Triwizard. Hanya para penyihir berusia tujuh belas tahun ke atas yang boleh ikut—namun Harry tetap berkhayal menjadi juara dalam kompetisi itu.\r\n\r\nLalu pada Halloween, ketika Piala Api melakukan seleksi, Harry kaget saat dirinya terpilih. Dia harus melaksanakan tugas-tugas yang menantang maut, menghadapi naga-naga dan para penyihir Hitam. Tetapi, dengan bantuan para sahabat baiknya, Ron dan Hermione, dia mungkin akan berhasil—dan bertahan hidup.', '896', '21 Mei 2017', 'Indonesia', 'Gramedia Pustaka Utama', 'J.K Rowling', '20cm', '13.5cm', '2024-02-14 15:32:11', '2024-02-14 15:32:11'),
(65, '39c221181cbeae81480525030168dece.jpg', 'http://localhost:3000/buku/39c221181cbeae81480525030168dece.jpg', 'Harry Potter 7: Harry Potter dan Relikui Kematian', 'fiksi', 'Ketika naik ke motor Hagrid dan melesat ke langit untuk meninggalkan Privet Drive terakhir kali, Harry Potter tahu bahwa Lord Voldemort dan para Pelahap Maut tak jauh di belakangnya. Mantra pelindung yang selama ini menjaga Harry kini sudah meredup, tetapi dia tidak bisa terus bersembunyi.\r\nSang Pangeran Kegelapan menghantui semua orang yang disayangi oleh Harry. Guna menghentikannya, Harry harus menemukan dan menghancurkan semua Horcrux yang tersisa. Pertempuran terakhir akan segera dimulai. Harry akan maju dan menghadapi musuhnya.\r\nBuku Harry Potter 7: Harry Potter dan Relikui Kematian merupakan kategori novel fantasi karya J.K. Rowling. Novel ini pertama kali terbit tahun 2007 di Inggris dan menjadi kisah penutup dari seri Harry Potter. Cerita dalam buku ini akan berkaitan langsung dengan pertempuran antara Harry Potter dan Lord Voldemort. Novel ini dinilai sebagai kisah sempurna untuk mengakhiri seri legendaris Harry Potter. Keberhasilan tokoh Harry Potter dan sekolah sihir Hogwarts pun diangkat ke dalam sebuah film layar lebar dengan judul yang sama. Berikut tujuh seri Harry Potter, yaitu Harry Potter dan Batu Bertuah, Harry Potter dan Kamar Rahasia, Harry Potter dan tawanan Azkaban, Harry Potter dan Piala Api, Harry Potter dan Orde Phoenix, Harry Potter dan Pangeran Berdarah Campuran, serta Harry Potter dan Relikui Kematian. Yuk, lengkapi semua serinya!', '1008', '4 Mar 2018', 'Indonesia', 'Gramedia Pustaka Utama', 'J.K Rowling', '20cm', '13.5cm', '2024-02-14 15:34:11', '2024-02-14 15:34:11'),
(66, '5db5b811a84665f14529c79b93410638.jpg', 'http://localhost:3000/buku/5db5b811a84665f14529c79b93410638.jpg', 'Harry Potter Dan Batu Bertuah', 'fiksi', 'Seumur hidup, Harry Potter tidak pernah berurusan dengan sihir. Dia tinggal bersama keluarga Dursley yang kejam dan Dudley, putra mereka yang menyebalkan. Kamar Harry cuma lemari sempit di kolong tangga, dan selama sebelas tahun, ulang tahunnya tak pernah dirayakan. Namun, tiba-tiba datang burung hantu membawa surat misterius: surat berisi undangan ke tempat menakjubkan bernama Sekolah Sihir Hogwarts. Dan di sana bukan hanya ada banyak teman, pertandingan olahraga naik sapu terbang, dan sihir dalam segala hal dari pelajaran sampai makanan tapi juga ada takdir luar biasa yang sudah lama menantinya. Jika Harry mampu bertahan hidup.', '384', '12 Mar 2017', 'Indonesia', 'Gramedia Pustaka Utama', 'J.K Rowling', '20cm', '13.5cm', '2024-02-14 15:37:29', '2024-02-14 15:37:29'),
(67, '269bb29c9f0aadf143d552e6945f1646.jpg', 'http://localhost:3000/buku/269bb29c9f0aadf143d552e6945f1646.jpg', 'Harry Potter dan Kamar Rahasia', 'fiksi', 'Buku Harry Potter dan Kamar Rahasia merupakan terjemahan Bahasa Indonesia dari buku Harry Potter and the Chamber of Secrets, buku kedua seri Harry Potter yang ditulis oleh J.K. Rowling. Buku ini mengisahkan tentang kepulangan Harry pada liburan musim panas.\r\n\r\nHarry bertemu Dobby, makhluk aneh setengah manusia yang memberitahu Harry untuk tidak kembali ke Hogwarts dengan alasan keselamatan. Namun, Harry menghiraukan saran Dobby dan memutuskan tetap kembali ke Hogwarts. Naasnya, perkataan Dobby berubah menjadi kenyataan. Harry mengalami kejadian aneh di Hogwarts. Ia memutuskan untuk memecahkan teka-teki itu.', '432', '12 Mar 2017', 'Indonesia', 'Gramedia Pustaka Utama', 'J.K Rowling', '20cm', '13.5cm', '2024-02-14 15:44:05', '2024-02-14 15:44:05'),
(70, '743bda917715ebb6c30a8d5efa07e456.jpg', 'http://localhost:3000/buku/743bda917715ebb6c30a8d5efa07e456.jpg', 'The Mountain Is You', 'pengembangan diri', '“Buku The Mountain Is You ditakdirkan untuk menolong banyak orang.” —Yung Pueblo, penulis buku laris Inward\r\nGUNUNG PENGHALANG ITU ADALAH DIRIMU SENDIRI.\r\nJika kamu memiliki impian, tetapi dirimu sendiri yang menjadi hambatan. Jika kamu ingin berubah, tetapi dirimu sendiri yang enggan berbenah. Jika kamu ingin tumbuh, tetapi dirimu sendiri yang membuatnya rubuh.\r\nItu semua adalah tanda bahwa kamu sedang terjebak dalam kubangan sabotase diri.\r\nDalam buku ini, Brianna Wiest menggunakan contoh kehidupan sehari-hari untuk menunjukkan ragam perilaku sabotase diri dan menjelaskan dengan detail cara mengatasinya. Ia mengajakmu menyelami hati dan pikiran, merelakan masa lalu yang menyakitkan, dan menemukan potensi terbaikmu di masa depan.\r\nPada akhirnya, bukan gunung tinggi yang harus kamu taklukkan, melainkan dirimu sendiri.', '280', '7 Des 2023', 'Indonesia', ' Penerbit Renebook', 'Brianna Wiest', '21cm', '14cm', '2024-02-15 00:13:58', '2024-02-15 00:13:58'),
(75, '59defd408a834ac07d638fad22ed7347.jpg', 'http://localhost:3000/buku/59defd408a834ac07d638fad22ed7347.jpg', 'English Classics: Tales of Terror and Mystery', 'misteri', 'Meskipun Sir Arthur Conan Doyle terkenal karena cerita detektifnya, ia juga menulis cerita pendek lain yang merupakan mahakarya misteri dan ketegangan. Dalam beberapa cerita dalam \"Tales of Terror and Mystery\", kegelisahan yang tertahan perlahan-lahan menumpuk dan berkembang menjadi teror belaka. Di sisi lain, alur cerita tiba-tiba berubah dan sampai pada kesimpulan yang mengerikan. Ulasan dari Amazon untuk salah satu ceritanya: Katakombe Baru: (4 bintang) Fitur bagus dari cerita ini adalah ia memberikan alur cerita yang berbeda di bagian akhir. Dimulai dengan 2 arkeolog di Roma yang berbincang tentang katakombe yang ditemukan oleh salah satu dari mereka. Agar yang terakhir dapat memberi tahu yang pertama tentang lokasi katakombe, dia ingin mengetahui beberapa rahasia pribadi. Di katakombe terjadi alur cerita yang aneh dan menarik dan cerita berakhir dengan cara terbaik yang bisa diakhiri oleh seorang penulis. Jangan salah paham, saya menemukan twist ini dari halaman kedua cerita, dan saya harap Anda tidak melakukannya, sehingga Anda dapat menikmati akhir ceritanya.', '304', '3 Jan 2024', 'English', 'Gramedia Pustaka Utama', 'Sir Arthur Conan Doyle, SIR ARTHUR CONAN DOYLE', '18cm', '11cm', '2024-02-15 00:44:58', '2024-02-15 00:44:58'),
(76, '70aa5af583313f92475955d3ec594d96.jpg', 'http://localhost:3000/buku/70aa5af583313f92475955d3ec594d96.jpg', 'Virgin River Novel #1: Virgin River', 'romantis', 'Buku-buku Virgin River sangat menarik--Saya langsung terhubung dengan karakter-karakternya dan hanya ingin lebih dan lebih lagi.\" --Penulis terlaris #1 New York Times Debbie Macomber\r\n\r\nSelamat datang kembali di Virgin River dengan buku yang menginspirasi serial terkenal Netflix...\r\n\r\nDicari: Bidan/perawat praktisi di Virgin River, populasi enam ratus. Buat perbedaan dengan latar belakang pohon redwood California yang menjulang tinggi dan sungai yang jernih. Termasuk kabin bebas sewa.\r\n\r\nKetika Melinda Monroe yang baru saja menjanda melihat iklan ini, dia segera memutuskan bahwa kota pegunungan terpencil di Virgin River mungkin adalah tempat yang tepat untuk melepaskan diri dari sakit hatinya dan untuk menghidupkan kembali karier perawat yang dia cintai. Namun harapan besarnya pupus dalam waktu satu jam setelah tiba--kabinnya adalah tempat pembuangan sampah, jalanan berbahaya dan dokter setempat tidak mau berurusan dengannya. Menyadari dia melakukan kesalahan besar, Mel memutuskan untuk meninggalkan kota keesokan paginya.', '416', '29 Nov 2022', 'English', 'Harper Collins Us', 'Robyn Carr', '17.5cm', '12cm', '2024-02-15 01:01:33', '2024-02-15 01:01:33'),
(79, 'ee0472498bb62ca2fbd883049d5e1d23.jpg', 'http://localhost:3000/buku/ee0472498bb62ca2fbd883049d5e1d23.jpg', 'Winter in Tokyo', 'romantis', 'Novel “Winter in Tokyo” karangan Ilana Tan ini menyajikan kisah cinta yang indah namun juga menyayat hati antara Ishida Keiko, gadis blasteran Indonesia - Jepang, dengan Nishimura Kazuto.\r\n\r\nKeiko tinggal di sebuah apartemen di kota Tokyo. Suatu waktu, apartemen Keiko kedatangan tetangga baru dari New York, Nishimura Kazuto. Seiring waktu, terjalin keakraban dan timbul ketertarikan antara keduanya. Ketika Kazuto berencana mengutarakan perasaannya kepada Keiko, Kazuto dikeroyok sejumlah preman yang membuat ia gegar otak dan hilang ingatan.\r\n\r\nKazuto pun lupa akan perasaannya terhadap Keiko, terlebih lagi setelah Keiko bertemu kembali dengan cinta pertamanya, Kitano Akira. Di lain sisi, kehadiran Iwamoto Yuri, gadis yang pernah dicintai Kazuto, juga menenggelamkan perasaan Keiko terhadap Kazuto.', '320', '21 Sep 2021', 'Indonesia', 'Gramedia Pustaka Utama', 'Ilana Tan', '20.0 cm', '13.5 cm', '2024-02-15 05:55:27', '2024-02-15 05:55:27'),
(80, '91d592ba1c71d81d5f6c19ba7ce8d8c6.jpg', 'http://localhost:3000/buku/91d592ba1c71d81d5f6c19ba7ce8d8c6.jpg', 'Metropop: Saat-Saat Jauh', 'romantis', 'Novel “Saat-Saat Jauh” karangan Lia Seplia ini mengisahkan kisah cinta yang tak mudah antara Aline dan Alex.\r\n\r\nNovel ini mengisahkan tentang Aline, yang mengabdikan dirinya untuk mengurus Panti Jompo J&J di Kota Teduh. Aline rela menunggu Alex, sang kekasih, untuk mengejar impiannya menjadi dokter di Kota Terik. Ketika Alex memutuskan untuk menetap di kota tersebut dan mengajak Aline ikut dengannya, Aline memilih melepaskan Alex dan teguh pada pendiriannya untuk tetap berada di Panti Jompo J&J.\r\n\r\nTema dan latar panti jompo yang diangkat memberikan nuansa tersendiri dalam novel setebal 280 halaman ini. Tak hanya percintaan, novel ini memberikan suguhan cerita tentang keluarga dan orang tua yang akan menghangatkan hati.', '280', '9 Feb 2022', 'Indonesia', 'Gramedia Pustaka Utama', 'Lia Seplia', '18.0 cm', '15.0 cm', '2024-02-15 06:01:13', '2024-02-15 06:01:13'),
(81, '671e7d6ab50d5fbfb08544e81353418e.jpg', 'http://localhost:3000/buku/671e7d6ab50d5fbfb08544e81353418e.jpg', 'Laut Bercerita', 'fiksi', 'Buku ini terdiri atas dua bagian. Bagian pertama mengambil sudut pandang seorang mahasiswa aktivis bernama Laut, menceritakan bagaimana Laut dan kawan-kawannya menyusun rencana, berpindah-pindah dalam pelarian, hingga tertangkap oleh pasukan rahasia. Sedangkan bagian kedua dikisahkan oleh Asmara, adik Laut. Bagian kedua mewakili perasaan keluarga korban penghilangan paksa, bagaimana pencarian mereka terhadap kerabat mereka yang tak pernah kembali.\r\nBuku ini ditulis sebagai bentuk tribute bagi para aktivis yang diculik, yang kembali, dan yang tak kembali dan keluarga yang terus menerus sampai sekarang mencari-cari jawaban.\r\n\r\nNovel ini merupakan perwujudan dalam bentuk fiksi bahwa kita sebagai bangsa Indonesia tidak boleh melupakan sejarah yang telah membentuk sekaligus menjadi tumpuan bangsa Ini. Novel ini juga mengajak pembaca menguak misteri-misteri bangsa ini yang mana tidak diajarkan di sekolah. Walaupun novel ini adalah fiksi, laut bercerita menunjukkan kepada pembaca bahwa negeri ini pernah memasuki masa pemerintahan yang kelam.', '394', '25 Okt 2017', 'Indonesia', 'Kepustakaan Populer Gramedia', 'Leila S. Chudori', '15cm', '13cm', '2024-02-15 07:25:24', '2024-02-15 07:25:24'),
(90, '6b1763dcabacd2cc142cf62a3efd35ad.jpg', 'http://localhost:3000/buku/6b1763dcabacd2cc142cf62a3efd35ad.jpg', 'WANGSIT SNBT 2024', 'pengembangan diri', 'Penerimaan mahasiswa baru perguruan tinggi negeri dilaksanakan melalui tiga jalur, yaitu seleksi nasional berdasarkan prestasi, seleksi nasional berdasarkan tes, dan seleksi secara mandiri oleh PTN. Seleksi penerimaan mahasiswa baru di lingkungan Perguruan Tinggi Negeri menggunakan pola Ujian Tertulis Berbasis Komputer (UTBK). Soal UTBK memiliki tingkat kesulitan lebih tinggi yang menerapkan jenis soal penalaran tingkat tinggi atau Higher Order Thinking Skills (HOTS). Sesuai dengan peraturan terbaru tentang transformasi seleksi masuk PTN yang berfokus pada pengukuran kemampuan penalaran dan pemecahan masalah, menuntut siswa untuk berpikir kreatif dalam menyelesaikan masalah. Mengingat semakin ketatnya persaingan masuk PTN maka diperlukan persiapan yang matang. Siswa dituntut untuk memiliki pemahaman yang mendalam saat mengerjakan soal. Buku WANGSIT (Pawang Soal Sulit) HOTS SNBT 2024 ini hadir untuk membekali siswa dalam persiapan seleksi masuk PTN. Materi dalam buku ini membahas secara mendalam tentang Tes Potensi Skolastik (Kemampuan Penalaran Umum, Pengetahuan dan Pemahaman Umum, Kemampuan Memahami Bacaan dan Menulis, dan Pengetahuan Kuantitatif), LIterasi Bahasa Indonesia, Literasi Bahasa Inggris, dan Penalaran Matematika. Selain itu, dilengkapi pula dengan drilling soal per topik bahasan dan pembahasan yang mudah dipahami. Bank soal simulasi SNBT 2024 juga hadir untuk memberikan gambaran kepada siswa tentang soal yang akan diujikan. Informasi terbaru mengenai transformasi seleksi masuk PTN, strategi dan tips sukses tembus PTN favorit juga semakin menambah lengkap buku ini. Selamat belajar dan semoga sukses!', '512', '14 Agt 2023', 'Indonesia', 'Gramedia Widiasarana Indonesia', 'TIM TENTOR MASTER', '19cm', '26cm', '2024-02-14 16:03:36', '2024-02-24 15:34:58');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `bukuId` int(11) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `createdAt`, `updatedAt`, `userId`, `bukuId`, `rating`) VALUES
(17, 'I LOVE THIS BOOK SO MUCH', '2024-03-01 16:27:56', '2024-03-01 16:27:56', 4, 54, '5'),
(18, 'L book lol 😜😴', '2024-03-01 16:36:57', '2024-03-01 16:36:57', 11, 54, '1');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `bukuId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `userId`, `bukuId`, `createdAt`, `updatedAt`) VALUES
(24, 6, 40, '2024-02-18 13:06:27', '2024-02-18 13:06:27'),
(29, 4, 75, '2024-02-21 06:22:56', '2024-02-21 06:22:56'),
(30, 10, 63, '2024-02-22 08:07:05', '2024-02-22 08:07:05'),
(32, 4, 54, '2024-03-01 05:39:51', '2024-03-01 05:39:51');

-- --------------------------------------------------------

--
-- Table structure for table `peminjamans`
--

CREATE TABLE `peminjamans` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `bukuId` int(11) DEFAULT NULL,
  `tanggalPeminjaman` varchar(255) DEFAULT NULL,
  `tanggalPengembalian` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamans`
--

INSERT INTO `peminjamans` (`id`, `userId`, `bukuId`, `tanggalPeminjaman`, `tanggalPengembalian`, `createdAt`, `updatedAt`) VALUES
(18, 4, 54, '1709020611329', '1709625411382', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 4, 63, '1709029734743', '1709634534779', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 4, 63, '1709079127829', '1709683927886', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 4, 81, '1709265468275', '1709870268278', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 11, 40, '1709268193762', '1709872993826', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'petugas'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `petugas`
--

INSERT INTO `petugas` (`id`, `email`, `password`, `createdAt`, `updatedAt`, `nama`, `role`) VALUES
(15, 'jhondoe@gmail.com', 'admin', '2024-02-24 12:08:17', '2024-02-24 12:08:17', 'jhon doe', 'admin'),
(16, 'jeje@gmail.com', 'jeje', '2024-02-24 05:12:56', '2024-02-24 05:12:56', 'petugas jeje', 'petugas');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT '-',
  `namaLengkap` varchar(255) DEFAULT '-',
  `email` varchar(255) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `foto` varchar(255) DEFAULT 'unknown.png',
  `urlFoto` varchar(255) DEFAULT 'http://localhost:3000/upload/unknown.png',
  `password` varchar(255) DEFAULT '-',
  `refreshToken` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `namaLengkap`, `email`, `alamat`, `foto`, `urlFoto`, `password`, `refreshToken`, `createdAt`, `updatedAt`) VALUES
(4, 'joan', 'joan poerba', 'joan@gmail.com', 'medan', '0680f49b7b9fe669a25f53b564a9f594.jpg', 'http://localhost:3000/upload/0680f49b7b9fe669a25f53b564a9f594.jpg', '$2b$10$JTGpZz02ZzjYHJB0VDS5nu8xsm9DlY7Orkdv6LqqCuRnr71uIXaX6', NULL, '2024-02-10 17:31:18', '2024-03-01 16:36:31'),
(6, 'nugroho', 'nugroho putro', 'nugroho@gmail.com', 'jember', '33c3ef371977aedfc137c9d9b9a8d8cc.jpg', 'http://localhost:3000/upload/33c3ef371977aedfc137c9d9b9a8d8cc.jpg', '$2b$10$Yp.1CFapiY8y4otIpLk2De1VGhp9iIZb7VLgzcDo4u1dls5UVD75m', NULL, '2024-02-11 04:22:02', '2024-02-26 15:41:04'),
(10, 'jaon', 'jaon poerba', 'jaon@gmail.com', '', '0680f49b7b9fe669a25f53b564a9f594.jpg', 'http://localhost:3000/upload/0680f49b7b9fe669a25f53b564a9f594.jpg', '$2b$10$DWR5v24wtnRvyyL4eI58GOMEFMVRebP.HnoTl2tpLQp39.w782u2C', NULL, '2024-02-22 08:05:55', '2024-02-22 11:41:16'),
(11, 'laura', 'laura S.E', 'laura@gmail.com', 'samping millenium', '60bf35b4aa50fb86b0c03c081e769adc.jpg', 'http://localhost:3000/upload/60bf35b4aa50fb86b0c03c081e769adc.jpg', '$2b$10$/0BP9uORM1EnW18yg1sESuCSNA0YBp0yaDY4j3teYB4hshExKzJ3m', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWEiOiJsYXVyYSIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIiwiaWF0IjoxNzA5MzEwOTk4LCJleHAiOjE3MDkzOTczOTh9.8lsQMvQ1QxMNMgaMD28d_ScfowY3s4loxntwVmY4tDo', '2024-03-01 04:39:55', '2024-03-01 16:36:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bukus`
--
ALTER TABLE `bukus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `bukuId` (`bukuId`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `bukuId` (`bukuId`);

--
-- Indexes for table `peminjamans`
--
ALTER TABLE `peminjamans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `bukuId` (`bukuId`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bukus`
--
ALTER TABLE `bukus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `peminjamans`
--
ALTER TABLE `peminjamans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `petugas`
--
ALTER TABLE `petugas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_101` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_103` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_105` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_107` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_109` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_11` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_111` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_113` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_115` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_117` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_119` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_120` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_121` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_122` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_124` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_126` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_128` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_13` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_130` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_132` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_134` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_136` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_138` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_140` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_142` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_144` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_146` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_148` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_150` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_152` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_154` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_156` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_158` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_160` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_162` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_164` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_166` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_168` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_17` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_170` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_172` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_174` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_175` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_176` FOREIGN KEY (`bukuId`) REFERENCES `bukus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_21` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_23` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_25` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_27` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_29` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_31` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_33` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_35` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_37` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_39` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_41` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_43` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_45` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_47` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_49` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_51` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_53` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_55` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_57` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_59` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_61` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_63` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_65` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_67` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_69` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_71` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_73` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_75` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_77` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_79` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_81` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_83` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_85` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_87` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_89` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_9` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_91` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_93` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_95` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_97` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_99` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_userId_foreign_idx` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_11` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_13` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_17` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_21` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_22` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_24` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_26` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_28` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_30` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_32` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_34` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_36` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_38` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_40` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_42` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_44` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_46` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_48` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_50` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_52` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_54` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_56` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_58` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_60` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_62` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_64` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_66` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_68` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_70` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_72` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_74` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_76` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_78` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_80` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_81` FOREIGN KEY (`bukuId`) REFERENCES `bukus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_9` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Constraints for table `peminjamans`
--
ALTER TABLE `peminjamans`
  ADD CONSTRAINT `peminjamans_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_11` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_13` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_17` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_21` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_22` FOREIGN KEY (`bukuId`) REFERENCES `bukus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `peminjamans_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `peminjamans_ibfk_9` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
