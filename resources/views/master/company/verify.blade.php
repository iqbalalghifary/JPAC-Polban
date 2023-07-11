@extends('layouts.master')

@section('section-head')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
        <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
        <li class="breadcrumb-item"><a href="{{ route('company.index') }}" style="color: black;">Company</a></li>
        <li class="breadcrumb-item active"><a href="{{ route('company.verification') }}">Verify</a></li>
    </ol>
</nav>
@endsection

@section('section-body')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="col">
                        <p style="font-size: 15pt; font-weight: 700; margin-bottom: 0px;">Unverified Company Data</p>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table id="verifyCompany" class="table table-striped w-100">
                            <thead>
                                <tr>
                                    <th class="text-center">{{ __('No') }}</th>
                                    <th class="text-center">{{ __('Company Data') }}</th>
                                    <th class="text-center">{{ __('Website') }}</th>
                                    <th class="text-center">{{ __('Mou') }}</th>
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
        var datatable = $('#verifyCompany').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('company.verification') }}",
            columns: [
                { data: 'no', name: 'no', render: function (data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                }, width: '5%', class: 'text-center' },
                { data: 'biodata', name: 'biodata', width: '35%' },
                { data: 'website', name: 'website', class: 'text-center', width: '20%' },
                { data: 'mou', name: 'mou', class: 'text-center', width: '20%' },
                { data: 'action', name: 'action', width: '20%' }
            ]
        })

        $('#verifyCompany tbody').on('click', 'td #btnAcceptVerification', function (e){
            e.preventDefault();
            swal({
                title: "Are you sure?",
                text: "Account would be activated",
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

        $('#verifyCompany tbody').on('click', 'td #btnDenyVerification', function (e){
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
