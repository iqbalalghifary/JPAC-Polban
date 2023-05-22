/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Section from "../../HOC/Section";
import "./Membership.css";

function Membership() {
  return (
    <Section id="membership">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title text-left">
            Informasi Keanggotaan Mahasiswa dan Alumni (Membership)
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Dengan menjadi anggota Pusat Karir Polban, rekan-rekan akan mendapatkan akses daring
            (online) untuk memasukkan aplikasi lamaran ke berbagai perusahaan terkemuka. Selain itu,
            rekan-rekan akan mendapatkan info terbaru tentang lowongan, program magang, dan berbagai
            kegiatan rekrutmen di kampus Polban. <br /> <br />{" "}
          </h6>
          <h3 className="section-title text-left">Informasi Keanggotaan</h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            1) Mahasiswa <br />- Gratis full akses selama terdata menjadi mahasiswa Polban. <br />-
            Syarat: Pindai (scan), potret, atau fotokopi KTM/Surat Keterangan Lulus (SKL)/Ijazah
            sebagai syarat pendaftaran. <br /> <br />
            2) Alumni Politeknik Negeri Bandung <br />
            Biaya keanggotaan baru: <br />- Rp 10.000,- untuk keanggotaan seumur hidup. Keuntungan:
            tak perlu menghadapi repotnya memperpanjang masa berlaku keanggotaan. Cukup satu kali
            mendaftar. <br /> <br />
            3) Alumni Dari Perguruan Tinggi Lainnya <br />
            Biaya keanggotaan baru: <br />- Rp 15.000,- untuk keanggotaan seumur hidup. Keuntungan:
            tak perlu menghadapi repotnya memperpanjang masa berlaku keanggotaan. Cukup satu kali
            mendaftar. <br /> <br />
          </h6>
          <h3 className="section-title text-left">
            {" "}
            Prosedur Pendaftaran <br />{" "}
          </h3>
          <h3 className="section-title text-left">
            {" "}
            A. Pendaftar Baru <br />
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            1) Anda dapat datang dan mendaftarkan diri langsung ke kantor Pusat Karir Polban yang
            berlokasi di: <br />
            Gd. P2T, lantai 3,Jl. Gegerkalong Hilir Ds. Ciwaruga Bandung Phone/Fax :022.2006391.{" "}
            <br /> <br />
            2) Atau daftarkan diri anda langsung di situs Pusat Karir Polban dengan mengisi formulir
            registrasi daring (klik untuk mengisi). Setelah selesai, pendaftar baru akan mendapatkan
            email konfirmasi dari pusat.karir.polban@polban.ac.id. Ikuti langkah-langkah berikutnya
            untuk mengaktivasi akun anda. <br /> <br />
            3) Bagi mahasiswa/alumni Polban, unggah hasil pindai/potret KTM/Surat Keterangan
            Lulus/Ijazah saat mengisi formulir registrasi di situs website Pusat Karir Polban.{" "}
            <br /> <br />
            4) Bagi mahasiswa atau alumni non-Polban, kirimkan biaya keanggotaan baru ke rekening
            BRI cabang Kampus Polban: <br />- Nomor rekening: 09-00-00-1091 <br />- Atas nama :
            "Kemahasiswaan Politeknik Negeri Bandung" <br /> <br />
            Selanjutnya, bukti transfer dipindai (scan) atau difoto dengan resolusi yang memadai.
            Namai file tersebut dengan "Bukti Pembayaran (Nama Lengkap)". Simpan dalam format .jpg
            atau .pdf, maksimal berukuran 2 MB dan dimensi maksimal 1024 x 1024 pixel, lalu masuk ke
            laman Konfirmasi Pembayaran dan ikuti langkah-langkah konfirmasi pembayarannya. <br />{" "}
            <br />
            Kami tidak akan mengaktifkan keanggotaan Anda sebelum bukti pembayaran atau data lengkap
            Anda kami terima. Hal ini ditujukan untuk menghindari kesalahan pemrosesan User Name
            anda di website Pusat Karir Polban. <br /> <br />
          </h6>
          <h3 className="section-title text-left">
            B. Perpanjangan Keanggotaan Bagi Akun Expired <br />
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            1) Anda dapat datang dan mendaftarkan diri langsung ke kantor Pusat Karir Polban yang
            berlokasi di: <br />
            Gd. P2T, lantai 3,Jl. Gegerkalong Hilir Ds. Ciwaruga Bandung Phone/Fax :022.2006391.{" "}
            <br /> <br />
            2) Atau daftarkan diri anda langsung di situs Pusat Karir Polban dengan mengisi formulir
            registrasi daring (klik untuk mengisi). Setelah selesai, pendaftar baru akan mendapatkan
            email konfirmasi dari pusat.karir.polban@polban.ac.id. Ikuti langkah-langkah berikutnya
            untuk mengaktivasi akun anda. <br /> <br />
            3) Bagi mahasiswa/alumni Polban, unggah hasil pindai/potret KTM/Surat Keterangan
            Lulus/Ijazah saat mengisi formulir registrasi di situs website Pusat Karir Polban.{" "}
            <br /> <br />
            4) Bagi mahasiswa atau alumni non-Polban, kirimkan biaya keanggotaan baru ke rekening
            BRI cabang Kampus Polban: <br />- Nomor rekening: <b>09-00-00-1091</b> <br />- Atas nama
            : <b>"Kemahasiswaan Politeknik Negeri Bandung"</b> <br /> <br />
            Selanjutnya, bukti transfer dipindai (scan) atau difoto dengan resolusi yang memadai.
            Namai file tersebut dengan "Bukti Pembayaran (Nama Lengkap)". Simpan dalam format .jpg
            atau .pdf, maksimal berukuran 2 MB dan dimensi maksimal 1024 x 1024 pixel, lalu masuk ke
            laman Konfirmasi Pembayaran dan ikuti langkah-langkah konfirmasi pembayarannya. <br />{" "}
            <br />
            Kami tidak akan mengaktifkan keanggotaan Anda sebelum bukti pembayaran atau data lengkap
            Anda kami terima. Hal ini ditujukan untuk menghindari kesalahan pemrosesan User Name
            anda di website Pusat Karir Polban. <br /> <br />
          </h6>
        </div>
      </div>
    </Section>
  );
}

export default Membership;
