/* eslint-disable react/button-has-type */
import React from "react";
import "./AboutUsContent.css";

import Section from "examples/HOC/Section";

function AboutUsContent() {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Latar Belakang/ Rasional </span>
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Banyaknya lulusan POLBAN yang tidak mengetahui bagaimana membina karir setelah
            menyelesaikan studi. Namun di lain sisi, banyak pula perusahaan yang membutuhkan tenaga
            kerja, terbukti dengan banyak iklan lowongan kerja di papan pengumuman kampus, koran dan
            media lain termasuk internet. Berarti kesenjangan antara pencari kerja dan perusahaan
            terlihat sangat jelas. Mungkin bukan sekedar kesenjangan kualitas sumber daya manusia,
            namun juga bisa saja karena kesenjangan informasi. Alumni sulit mendapatkan pekerjaan
            karena kurangnya informasi yang didapat. Sedangkan bagi perusahaan memerlukan media
            alternatif yang dapat memberikan fasilitas yang lebih informatif, fokus dan memadai
            dibanding sekedar pemasangan iklan lowongan kerja. Dan POLBAN melihat program JPAC
            sangat memungkinkan untuk hal itu.
          </h6>
        </div>
        <div className="section-header pt-3 pb-3 text-center">
          <h3 className="section-title">
            <span>Tujuan </span>
          </h3>
          <div className="section-header pt-2 pb-2 text-center" />
          <h4 className="section-title text-justify">
            <span>Umum </span>
          </h4>
          <h6 className="section-subtitle mr-auto ml-auto">
            Membuka jalur komunikasi interaktif antara masyarakat kampus, alumni, industri, dan
            pelaku ekonomi yang lain, serta para pengembang sumberdaya manusia.
          </h6>
          <div className="section-header pt-2 pb-2 text-center" />
          <h4 className="section-title text-justify">
            <span>Eksternal </span>
          </h4>
          <div className="col-md-16 col-lg-12">
            <h6 className="section-subtitle mr-auto ml-auto">
              <ul type="section-title text-justify">
                <li>
                  Memudahkan masyarakat industri manufaktur dan jasa mencari pemenuhan kebutuhan
                  sumberdaya manusia berkualitas melalui kampus POLBAN Berbasis pada kemampuan
                  teknologi dan kekuatan profesionalisme berkarya
                </li>
                <li>
                  Memudahkan alumni dan masyarakat umum berinteraksi dengan industri dan/atau pelaku
                  ekonomi untuk bekerja dan berkarya
                </li>
                <li>
                  Memudahkan alumni dan masyarakat umum mencari dan mendapatkan peluang perbaikan
                  dan peningkatan kompetensi diri melalui program assessment yang bersesuaian dengan
                  kebutuhan.
                </li>
              </ul>
            </h6>
          </div>
          <div className="section-header pt-2 pb-2 text-center" />
          <h4 className="section-title text-justify">
            <span>Internal </span>
          </h4>
          <div className="col-md-16 col-lg-12">
            <h6 className="section-subtitle mr-auto ml-auto">
              <ul type="section-title text-justify">
                <li>
                  Memudahkan mahasiswa menelusuri, mencari, dan mendapatkan peluang untuk berlatih
                  dan berkarya di industri, sesuai dengan bidang ilmu yang dipelajari;
                </li>
                <li>
                  Memudahkan mahasiswa tingkat akhir menelusuri, mencari, dan mendapatkan peluang
                  untuk berkarya dan bekerja di industri bersesuaian dengan profesionalisme yang
                  dibutuhkan dan hendak dicapai;
                </li>
                <li>
                  Memudahkan sivitas akademik berinteraksi dengan industri/pelaku ekonomi untuk
                  pengembangan ilmu dan peningkatan profesionalisme dalam berkarya;
                </li>
                <li>
                  Membangun berbagai sumber umpan balik/feedback bagi sivitas akademik untuk
                  pengembangan dan peningkatan proses pendidikan yang lebih kompetitif.
                </li>
              </ul>
            </h6>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutUsContent;
