@extends('layouts.frontend')

@section('section-content')
<section class="hero-area style2">
    <div class="hero-inner">
        <div class="home-slider">
            <div class="single-slider">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-6 co-12">
                            <div class="inner-content">
                                <div class="hero-text">
                                    <h1 class="wow fadeInUp" data-wow-delay=".3s">Find Your Career <br>to Make a
                                        Better Life
                                    </h1>
                                    <p class="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is
                                        not
                                        easy always. To make your life easier we are introducing Jobcamp template,
                                        Leverage agile frameworks to high level overviews.
                                    </p>
                                    <div class="button wow fadeInUp" data-wow-delay=".7s">
                                        <a href="#" class="btn">Post a Job</a>
                                        <a href="#" class="btn btn-alt">See Our Jobs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 co-12">
                            <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
                                <img src="https://demo.graygrids.com/themes/jobgrids/assets/images/hero/banner2.png" alt="#">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-6 co-12">
                            <div class="inner-content">
                                <div class="hero-text">
                                    <h1 class="wow fadeInUp" data-wow-delay=".3s">Find Your Career <br>to Make a
                                        Better Life
                                    </h1>
                                    <p class="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is
                                        not
                                        easy always. To make your life easier we are introducing Jobcamp template,
                                        Leverage agile frameworks to high level overviews.
                                    </p>
                                    <div class="button wow fadeInUp" data-wow-delay=".7s">
                                        <a href="#" class="btn">Post a Job</a>
                                        <a href="#" class="btn btn-alt">See Our Jobs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 co-12">
                            <div class="hero-image wow fadeInRight" data-wow-delay=".ss">
                                <img src="https://via.placeholder.com/475x560" alt="#">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ End Single Slider -->
</section>
<section class="call-action style2">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8 col-md-8 col-12">
                <div class="text">
                    <h2>Create your profile to find thousands Jobs.</h2>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="button">
                    <a href="browse-jobs.html" class="btn">Browse Jobs</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="find-job section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <span class="wow fadeInDown" data-wow-delay=".2s">Hot Jobs</span>
                    <h2 class="wow fadeInUp" data-wow-delay=".4s">Browse Recent Jobs</h2>
                    <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
        <div class="single-head">
            <div class="row">
                @foreach ($vacancies as $data)

                    <div class="col-lg-6 col-12">

                        <!-- Single Job -->
                        <div class="single-job wow fadeInUp" data-wow-delay=".3s">
                            <div class="job-image">
                                <img src="{{ Storage::url($data->poster) }}" width="100%" alt="#">
                            </div>
                            <div class="job-content">
                                <h4><a href="{{ route('vacancies.detail', $data->id) }}">{{ $data->title }}</a></h4>
                                <p>{{ $data->job_desc }}</p>
                                <ul>
                                    <li><i class="fa fa-website"></i><a href="#"> winbrans.com</a></li>
                                    <li>Rp. {{ $data->salary }}</li>
                                    <li><i class="fa fa-map-marker"></i> {{ $data->placement }}</li>
                                </ul>
                            </div>
                            <div class="job-button">
                                <ul>
                                    <li><a href="job-details.html">Apply</a></li>
                                    <li><span>{{ $data->type }}</span></li>
                                </ul>
                            </div>
                        </div>
                        <!-- End Single Job -->
                    </div>
                @endforeach
            </div>
            <!-- Pagination -->
            <div class="row">
                <div class="col-12">
                    <div class="pagination center wow fadeInUp" data-wow-delay=".3s">
                        <ul class="pagination-list">
                            <li><a href="#"><i class="fa fa-arrow-left"></i></a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i class="fa fa-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--/ End Pagination -->
        </div>
    </div>
</section>

<div class="client-logo-section">
    <div class="container">
        <div class="client-logo-wrapper">
            <div class="client-logo-carousel d-flex align-items-center justify-content-between">

                @foreach ($companies as $data)
                    <div class="client-logo">
                        <img style="width: 50px;" src="{{ Storage::url($data->logo) }}" alt="#">
                    </div>
                @endforeach

            </div>
        </div>
    </div>
</div>
@endsection


@push('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
@endpush

@push('script')
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            new Splide('#image-carousel', {
                rewind: true,
                autoplay: true,
                gap: 5,
                interval: 3000,
                perPage: 1,
                width : '100vw',

            }).mount();
        });
    </script>
<script>
    function playVideo(videoUrl) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', videoUrl);
        iframe.setAttribute('class', 'w-full h-96');
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    }
</script>
<script>
    function playVideos(videoUrl) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', videoUrl);
        iframe.setAttribute('class', 'w-full h-96');
        const videoContainer = document.getElementById('video-containers');
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    }
</script>
<script>
    function playVideos(videoUrl) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', videoUrl);
        iframe.setAttribute('class', 'w-full h-96');
        const videoContainer = document.getElementById('video-containers');
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    }
</script>
@endpush
