<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Pusat Karir POLBAN') }}</title>

    <link rel="apple-touch-icon" href="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp">
    <link rel="shortcut icon" type="image/x-icon" href="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp">

    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/fontawesome/css/all.min.css') }}">

    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/datatables/datatables.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/datatables/Select-1.2.4/css/select.bootstrap4.min.css') }}">

    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/select2/dist/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/bootstrap-daterangepicker/daterangepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css') }}">

    <link rel="stylesheet" href="{{ asset('vendor/dropify/dist/css/dropify.css') }}">

    <link rel="stylesheet" href="{{ asset('vendor/daterangepicker/daterangepicker.css') }}">

    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/stisla2.2.0/dist/assets/css/components.css') }}">

    @stack('css')

</head>
<body>
    @include('sweetalert::alert')

    <div id="app">
        <div class="main-wrapper main-wrapper-1">
            <div class="navbar-bg"></div>

            @include('components.master.navbar')
            @include('components.master.sidebar')

            <div class="main-content">
                <section class="section">
                    <div class="section-header">
                        @yield('section-head')
                    </div>

                    <div class="section-body">
                        @yield('section-body')
                    </div>
                </section>
            </div>

            @include('components.master.footer')
        </div>
    </div>

    @yield('modal')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/popper.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/tooltip.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/nicescroll/jquery.nicescroll.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/moment.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/js/stisla.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/datatables/datatables.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/datatables/DataTables-1.10.16/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/datatables/Select-1.2.4/js/dataTables.select.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/select2/dist/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/bootstrap-daterangepicker/daterangepicker.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js') }}"></script>
    <script src="{{ asset('vendor/MomentJS/moment.js') }}"></script>
    <script src="{{ asset('vendor/MomentJS/moment-with-locales.min.js') }}"></script>
    <script src="{{ asset('vendor/daterangepicker/daterangepicker.js') }}"></script>
    <script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
    <script src="{{ asset('vendor/dropify/dist/js/dropify.js' )}}"></script>
    <script src="{{ asset('vendor/qrcodejs/qrcode.js' )}}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/modules/prism/prism.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/js/page/bootstrap-modal.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/js/scripts.js') }}"></script>
    <script src="{{ asset('vendor/stisla2.2.0/dist/assets/js/custom.js') }}"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            moment.locale('id')
            $('.dropify').dropify();
        });
    </script>

    @stack('scripts')
</body>
</html>
