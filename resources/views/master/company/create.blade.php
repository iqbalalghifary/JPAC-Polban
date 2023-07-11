@extends('layouts.master')

@section('section-head')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
        <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
        <li class="breadcrumb-item active"><a style="color: black;" href="/master/lecturer">Dosen</a></li>
        <li class="breadcrumb-item active"><a href="/master/lecturer/create">Tambah Data</a></li>
    </ol>
</nav>
@endsection

@section('section-body')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <p style="font-size: 15pt; font-weight: 700; margin-bottom: 0px;">Tambah Data Dosen</p>
                </div>
                <form action="{{ route('company.store') }}" method="post">
                    @csrf

                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('NIP') }}</label>
                            <div class="col-sm-9">
                                <input type="number" value="{{ old('nip') }}" id="nip" name="nip" class="form-control" required="" placeholder="Masukkan NIP ...">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('NIDN') }}</label>
                            <div class="col-sm-9">
                                <input type="number" value="{{ old('nidn') }}" id="nidn" name="nidn" class="form-control" required="" placeholder="Masukkan NIDN ...">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Nama Lengkap') }}</label>
                            <div class="col-sm-9">
                                <input type="text" value="{{ old('name') }}" id="name" name="name" class="form-control" required="" placeholder="Masukkan Nama Lengkap ...">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Jurusan') }}</label>
                            <div class="col-sm-9">
                                <select id="major" name="major" class="form-control select2">
                                    <option value="Teknik Sipil">{{ __('Teknik Sipil') }}</option>
                                    <option value="Teknik Kimia">{{ __('Teknik Kimia') }}</option>
                                    <option value="Teknik Mesin">{{ __('Teknik Mesin') }}</option>
                                    <option value="Teknik Refrigerasi dan Tata Udara">{{ __('Teknik Refrigerasi dan Tata Udara') }}</option>
                                    <option value="Teknik Komputer dan Informatika">{{ __('Teknik Komputer dan Informatika') }}</option>
                                    <option value="Teknik Elektro">{{ __('Teknik Elektro') }}</option>
                                    <option value="Teknik Konversi Energi">{{ __('Teknik Konversi Energi') }}</option>
                                    <option value="Akuntansi">{{ __('Akuntansi') }}</option>
                                    <option value="Administrasi Niaga">{{ __('Administrasi Niaga') }}</option>
                                    <option value="Bahasa Inggris">{{ __('Bahasa Inggris') }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Program Studi') }}</label>
                            <div class="col-sm-9">
                                <select id="study_program" name="study_program" class="form-control select2">
                                    <option value="D3 - Teknik Kontruksi Gedung">{{ __('D3 - Teknik Kontruksi Gedung') }}</option>
                                    <option value="D3 - Teknik Kontruksi Sipil">{{ __('D3 - Teknik Kontruksi Sipil') }}</option>
                                    <option value="D4 - Teknik Perancangan Jalan dan Jembatan">{{ __('D4 - Teknik Perancangan Jalan dan Jembatan') }}</option>
                                    <option value="D4 - Teknik Perawatan dan Perbaikan Gedung">{{ __('D4 - Teknik Perawatan dan Perbaikan Gedung') }}</option>
                                    <option value="D3 - Teknik Kimia">{{ __('D3 - Teknik Kimia') }}</option>
                                    <option value="D3 - Analis Kimia">{{ __('D3 - Analis Kimia') }}</option>
                                    <option value="D4 - Teknik Kimia Produksi Bersih">{{ __('D4 - Teknik Kimia Produksi Bersih') }}</option>
                                    <option value="D3 - Teknik Mesin">{{ __('D3 - Teknik Mesin') }}</option>
                                    <option value="D3 - Teknik Aeronautika">{{ __('D3 - Teknik Aeronautika') }}</option>
                                    <option value="D4 - Teknik Perancangan dan Kontruksi Mesin">{{ __('D4 - Teknik Perancangan dan Kontruksi Mesin') }}</option>
                                    <option value="D4 - Proses Manufaktur">{{ __('D4 - Proses Manufaktur') }}</option>
                                    <option value="D3 - Teknik Pendinginan dan Tata Udara">{{ __('D3 - Teknik Pendinginan dan Tata Udara') }}</option>
                                    <option value="D4 - Teknik Pendinginan dan Tata Udara">{{ __('D4 - Teknik Pendinginan dan Tata Udara') }}</option>
                                    <option value="D3 - Teknik Informatika">{{ __('D3 - Teknik Informatika') }}</option>
                                    <option value="D4 - Teknik Informatika">{{ __('D4 - Teknik Informatika') }}</option>
                                    <option value="D3 - Teknik Elektronika">{{ __('D3 - Teknik Elektronika') }}</option>
                                    <option value="D3 - Teknik Listrik">{{ __('D3 - Teknik Listrik') }}</option>
                                    <option value="D3 - Teknik Telekomunikasi">{{ __('D3 - Teknik Telekomunikasi') }}</option>
                                    <option value="D4 - Teknik Elektronika">{{ __('D4 - Teknik Elektronika') }}</option>
                                    <option value="D4 - Teknik Telekomunikasi">{{ __('D4 - Teknik Telekomunikasi') }}</option>
                                    <option value="D4 - Teknik Otomasi Industri">{{ __('D4 - Teknik Otomasi Industri') }}</option>
                                    <option value="D3 - Teknik Konversi Energi">{{ __('D3 - Teknik Konversi Energi') }}</option>
                                    <option value="D4 - Teknik Pembangkit Tenaga Listrik">{{ __('D4 - Teknik Pembangkit Tenaga Listrik') }}</option>
                                    <option value="D4 - Teknik Konservasi Energi">{{ __('D4 - Teknik Konservasi Energi') }}</option>
                                    <option value="D3 - Akuntansi">{{ __('D3 - Akuntansi') }}</option>
                                    <option value="D3 - Keuangan dan Perbankan">{{ __('D3 - Keuangan dan Perbankan') }}</option>
                                    <option value="D4 - Akuntansi Manajemen Pemerintahan">{{ __('D4 - Akuntansi Manajemen Pemerintahan') }}</option>
                                    <option value="D4 - Keuangan Syariah">{{ __('D4 - Keuangan Syariah') }}</option>
                                    <option value="D4 - Akuntansi">{{ __('D4 - Akuntansi') }}</option>
                                    <option value="D3 - Administrasi Bisnis">{{ __('D3 - Administrasi Bisnis') }}</option>
                                    <option value="D3 - Manajemen Pemasaran">{{ __('D3 - Manajemen Pemasaran') }}</option>
                                    <option value="D3 - Usaha Perjalanan Wisata">{{ __('D3 - Usaha Perjalanan Wisata') }}</option>
                                    <option value="D4 - Manajemen Pemasaran">{{ __('D4 - Manajemen Pemasaran') }}</option>
                                    <option value="D4 - Administrasi Bisnis">{{ __('D4 - Administrasi Bisnis') }}</option>
                                    <option value="D4 - Manajemen Aset">{{ __('D4 - Manajemen Aset') }}</option>
                                    <option value="D3 - Bahasa Inggris">{{ __('D3 - Bahasa Inggris') }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Email') }}</label>
                            <div class="col-sm-9">
                                <input type="email" value="{{ old('email') }}" id="email" name="email" class="form-control" required="" placeholder="Masukkan Email ...">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Kata Sandi') }}</label>
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <input type="password" id="password" name="password" class="form-control pwstrength" data-indicator="pwindicator" placeholder="Masukkan Password ...">
                                </div>
                                <div id="pwindicator" class="pwindicator">
                                    <div class="bar"></div>
                                    <div class="label"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-right">
                        <button type="submit" class="btn btn-primary">{{ __('Simpan') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
