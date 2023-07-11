@php
if(\Request::is('/')) {
@$home = 'active';
} else if(\Request::is('vacancies')) {
@$vacancies = 'active';
}
@endphp
<header class="header">
    <div class="navbar-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand logo" href="index.html">
                            <img class="logo1" style="width: 42px;" src="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp" alt="Logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" class="navbar-nav ml-auto">
                                <li class="nav-item"><a class="{{ @$home }}" href="{{ route('index') }}">Home</a> </li>
                                <li class="nav-item"><a class="{{ @$vacancies }}" href="{{ route('vacancies') }}">Vacancies</a> </li>
                            </ul>
                        </div>
                        <div class="button">
                            @if (Auth::check())
                                <a href="{{ route('dashboard') }}" class="btn">Dashboard</a>
                            @else
                                <a href="javacript:" data-toggle="modal" data-target="#login" class="login">
                                    <i class="fa fa-lock" style="padding-right: 3px; padding-top: 1px;"></i> Login
                                </a>
                                <a href="javacript:" data-toggle="modal" data-target="#signup" class="btn">Sign Up</a>
                            @endif
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
