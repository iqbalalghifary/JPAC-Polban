@extends('layouts.frontend')

@section('section-content')

<div class="breadcrumbs overlay" style="background-image: url(https://demo.graygrids.com/themes/jobgrids/assets/images/call-action/xcat-bg.jpg.pagespeed.ic.qb9ClsH5yR.jpg) !important;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="breadcrumbs-content">
                    <h1 class="page-title">Job List</h1>
                    <p>Business plan draws on a wide range of knowledge from different business<br> disciplines.
                        Business draws on a wide range of different business .</p>
                </div>
                <ul class="breadcrumb-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="news-standard.html">Blog</a></li>
                    <li>Job List</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<section class="find-job job-list section">
    <div class="container">
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

        </div>
    </div>
</section>

@endsection

@push('css')

<style>
    .navbar-area {
        background: white !important;
    }
</style>

@endpush
