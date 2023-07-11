<!DOCTYPE html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>{{ config('app.name', 'Pusat Karir Polban') }} - {{ isset($title) ? $title : '' }}</title>
    <meta name="description" content="" />
    <link rel="apple-touch-icon" href="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp">
    <link rel="shortcut icon" type="image/x-icon" href="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/tiny-slider.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/glightbox.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/main.css') }}" />

    @stack('css')

</head>

<body>
    <div id="loading-area"></div>

    @include('components.frontend.navbar')
    @include('auth.login')
    @include('auth.register')

    @yield('section-content')

    @include('components.frontend.footer')

    <a href="#" class="scroll-top btn-hover">
        <i class="fa fa-chevron-up"></i>
    </a>

    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/wow.min.js') }}"></script>
    <script src="{{ asset('js/glightbox.min.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>

    <script>

        $(function () {
            $('.create-new-account').click(function (e) {

            });

            $('#loginForm').submit(function (e) {
                e.preventDefault();
                $('#btnLogin').prop('disabled', true);
                let formData = $(this).serializeArray();
                $.ajax({
                    method: "POST",
                    headers: {
                        Accept: "application/json"
                    },
                    url: "{{ route('login.post') }}",
                    data: formData,
                    success: () => window.location.assign("{{ route('dashboard') }}"),
                    error: (response) => {
                        $('#btnLogin').prop('disabled', false);
                        swal.fire("Failed", "Username Or Password Is Incorrect", "error");
                    }
                })
            });

            $('#registerForm').submit(function (e) {
                e.preventDefault();
                $('#btnRegister').prop('disabled', true);
                const formData = new FormData(this);
                $.ajax({
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: "{{ route('register.store') }}",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: (response) => {
                        $('input[name="company_name"]').val('');
                        $('input[name="address"]').val('');
                        $('input[name="phone_number"]').val('');
                        $('input[name="email"]').val('');
                        $('input[name="website"]').val('');
                        swal.fire("Success", "Your Registration Has Been Completed", "success");
                        $('#signup').modal('hide');
                    },
                    error: (response) => {
                        $('#btnRegister').prop('disabled', false);
                        swal.fire("Failed", "Data Not Valid", "error");
                    }
                })
            });
        })

    </script>

</body>

</html>
