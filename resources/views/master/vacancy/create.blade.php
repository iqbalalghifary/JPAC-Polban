@extends('layouts.master')

@section('section-head')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
        <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
        <li class="breadcrumb-item active"><a style="color: black;" href="{{ route('vacancy.index') }}">Vacancy</a></li>
        <li class="breadcrumb-item active"><a href="{{ route('vacancy.create') }}">Add Data</a></li>
    </ol>
</nav>
@endsection

@section('section-body')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <p style="font-size: 15pt; font-weight: 700; margin-bottom: 0px;">Add Vacancy</p>
                </div>
                <form action="{{ route('vacancy.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Title') }}</label>
                            <div class="col-sm-9">
                                <input type="text" value="{{ old('title') }}" id="title" name="title" class="form-control" required placeholder="Enter Title ...">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Job Type') }}</label>
                            <div class="col-sm-9">
                                <select id="jobType" name="type">
                                    <option value="">{{ __('Choose Job Type ...') }}</option>
                                    <option value="Full-time">{{ __('Full-Time') }}</option>
                                    <option value="Internship">{{ __('Internship') }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Provision') }}</label>
                            <div class="col-sm-9">
                                <select id="provision" multiple="multiple" name="provision[]">
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
                            <label for="jobDesk" class="col-sm-3 col-form-label">{{ __('Job Desc') }}</label>
                            <div class="col-sm-9">
                                <textarea class="form-control" id="jobDesk" rows="4" name="job_desc" required placeholder="Enter Job Desc ..."></textarea>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Responsibility') }}</label>
                            <div class="col-sm-9">
                                <table id="dynamicAddRemove" style="width: 100%;">
                                    <tr>
                                        <td style="width: 80%; padding-right: 20px;">
                                            <input type="text" name="addMoreInputFields[0]" placeholder="Enter Responsibility ..." class="form-control" />
                                        </td>
                                        <td style="width: 20%;">
                                            <button type="button" name="add" id="dynamic-ar" class="btn btn-outline-primary">Add Responsibility</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Deadline') }}</label>
                            <div class="col-sm-9">
                                <input type="date" value="{{ old('deadline') }}" id="deadline" name="deadline" class="form-control" required >
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Salary') }}</label>
                            <div class="col-sm-9">
                                <input type="number" value="{{ old('salary') }}" id="salary" name="salary" class="form-control" required placeholder="Enter Salary ...">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">{{ __('Placement') }}</label>
                            <div class="col-sm-9">
                                <input type="text" value="{{ old('placement') }}" id="placement" name="placement" class="form-control" required placeholder="Enter Placement ...">
                            </div>
                        </div>

                        <div class="row">
                            <label class="col-sm-3 col-form-label">{{ __('Poster') }}</label>
                            <div class="col-sm-9">
                                <input type="file" value="{{ old('poster') }}" id="poster" name="poster" class="form-control" required style="height: 49px">
                            </div>
                        </div>

                    </div>
                    <div class="card-footer text-right">
                        <button type="submit" class="btn btn-primary">{{ __('Save') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts')

    <script>

        $(document).ready(function() {
            $('#provision').select2({
                width: '100%',
                placeholder: 'Choose Provision ...',
            });

            $('#jobType').select2({
                width: '100%',
            });

            var i = 0;
            $("#dynamic-ar").click(function () {
                ++i;
                $("#dynamicAddRemove").append('<tr>' +
                        '<td style="width: 80%; padding-right: 20px;">' +
                            '<input type="text" name="addMoreInputFields[' + i + ']" placeholder="Enter Responsibility ..." class="form-control" />' +
                        '</td>' +
                        '<td style="width: 20%;">' +
                            '<button type="button" class="btn btn-outline-danger remove-input-field">Delete</button>' +
                        '</td>' +
                    '</tr>'
                    );
            });
            $(document).on('click', '.remove-input-field', function () {
                $(this).parents('tr').remove();
            });

        });

    </script>

@endpush
