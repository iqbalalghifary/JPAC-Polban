@extends('layouts.master')

@section('section-head')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
        <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
        <li class="breadcrumb-item active"><a href="{{ route('company.index') }}">Company Data</a></li>
    </ol>
</nav>
@endsection

@section('section-body')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="col">
                        <p style="font-size: 15pt; font-weight: 700; margin-bottom: 0px;">Company Data</p>
                    </div>
                    {{-- <div class="col">
                        <a href="#" class="btn btn-primary float-right mr-2" disabled>
                            <span class="fas fa-plus"></span> {{ __('Add Company') }}
                        </a>
                    </div> --}}
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table id="crudCompany" class="table table-striped w-100">
                            <thead>
                                <tr>
                                    <th class="text-center">{{ __('No') }}</th>
                                    <th class="text-center">{{ __('Company Data') }}</th>
                                    <th class="text-center">{{ __('Website') }}</th>
                                    <th class="text-center">{{ __('Mou') }}</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        var datatable = $('#crudCompany').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('company.index') }}",
            columns: [
                { data: 'no', name: 'no', render: function (data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                }, width: '5%', class: 'text-center' },
                { data: 'biodata', name: 'biodata', width: '35%' },
                { data: 'website', name: 'website', class: 'text-center', width: '30%' },
                { data: 'mou', name: 'mou', class: 'text-center', width: '30%' },
            ]
        })
    </script>
@endpush
