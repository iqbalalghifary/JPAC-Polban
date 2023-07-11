@extends('layouts.master')

@section('section-head')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
        <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
        <li class="breadcrumb-item active"><a href="{{ route('vacancy.index') }}">Vacancy Data</a></li>
    </ol>
</nav>
@endsection

@section('section-body')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="col">
                        <p style="font-size: 15pt; font-weight: 700; margin-bottom: 0px;">Vacancy Data</p>
                    </div>
                    <div class="col">
                        <a href="{{ route('vacancy.create') }}" class="btn btn-primary float-right mr-2" disabled>
                            <span class="fas fa-plus"></span> {{ __('Add Vacancy') }}
                        </a>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table id="crudVacancy" class="table table-striped w-100">
                            <thead>
                                <tr>
                                    <th class="text-center">{{ __('No') }}</th>
                                    <th class="text-center">{{ __('Title') }}</th>
                                    <th class="text-center">{{ __('Type') }}</th>
                                    <th class="text-center">{{ __('Provision') }}</th>
                                    <th class="text-center">{{ __('Job Desk') }}</th>
                                    <th class="text-center">{{ __('Responsibility') }}</th>
                                    <th class="text-center">{{ __('Deadline') }}</th>
                                    <th class="text-center">{{ __('Salary') }}</th>
                                    <th class="text-center">{{ __('Placement') }}</th>
                                    <th class="text-center">{{ __('Poster') }}</th>
                                    <th class="text-center">{{ __('Status') }}</th>
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
        var datatable = $('#crudVacancy').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('vacancy.index') }}",
            columns: [
                { data: 'no', name: 'no', render: function (data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                }, width: '5%', class: 'text-center' },
                { data: 'title', name: 'title', width: '14%' },
                { data: 'type', name: 'type', width: '10%' },
                { data: 'provision', name: 'provision', width: '20%' },
                { data: 'job_desc', name: 'job_desc', width: '14%' },
                { data: 'responsilities', name: 'responsilities', width: '20%' },
                { data: 'deadline', name: 'deadline', width: '14%' },
                { data: 'salary', name: 'salary', width: '10%' },
                { data: 'placement', name: 'placement', width: '14%' },
                { data: 'poster', name: 'poster', width: '10%' },
                { data: 'status', name: 'status', width: '10%' },
            ]
        })
    </script>
@endpush
