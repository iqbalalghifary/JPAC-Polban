@extends('layouts.master')

@section('section-head')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
        <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
        <li class="breadcrumb-item"><a href="{{ route('vacancy.index') }}" style="color: black;">Vacancy</a></li>
        <li class="breadcrumb-item active"><a href="{{ route('vacancy.verification') }}">Verify</a></li>
    </ol>
</nav>
@endsection

@section('section-body')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="col">
                        <p style="font-size: 15pt; font-weight: 700; margin-bottom: 0px;">Unverified Vacancy Data</p>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table id="verifyVacancy" class="table table-striped w-100">
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
                                    <th class="text-center">{{ __('Action') }}</th>
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
        var datatable = $('#verifyVacancy').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('vacancy.verification') }}",
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
                { data: 'action', name: 'action', width: '10%' },
            ]
        })

        $('#verifyVacancy tbody').on('click', 'td #btnAcceptVerification', function (e){
            e.preventDefault();
            swal({
                title: "Are you sure?",
                text: "Submission would be activated",
                icon: "warning",
                type: "warning",
                buttons: ["Cancel","Yes!"],
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Verify!'
            }).then((willAccept) => {
                if (willAccept) {
                    $(this).parent('form').trigger('submit')
                }
            });
        });

        $('#verifyVacancy tbody').on('click', 'td #btnDenyVerification', function (e){
            e.preventDefault();
            swal({
                title: "Are you sure?",
                text: "Submission would be deleted",
                icon: "warning",
                type: "warning",
                buttons: ["Cancel","Yes!"],
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Verify!'
            }).then((willAccept) => {
                if (willAccept) {
                    $(this).parent('form').trigger('submit')
                }
            });
        });

    </script>
@endpush
