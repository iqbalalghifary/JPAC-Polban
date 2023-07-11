@extends('layouts.frontend')

@section('section-content')

<div class="breadcrumbs overlay" style="background-image: url(https://demo.graygrids.com/themes/jobgrids/assets/images/call-action/xcat-bg.jpg.pagespeed.ic.qb9ClsH5yR.jpg) !important;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="breadcrumbs-content">
                    <h1 class="page-title">Job Details</h1>
                    <p>Business plan draws on a wide range of knowledge from different business<br> disciplines.
                        Business draws on a wide range of different business .</p>
                </div>
                <ul class="breadcrumb-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="news-standard.html">Blog</a></li>
                    <li>Job Details</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="job-details section">
    <div class="container">
        <div class="row mb-n5">
            <div class="col-lg-8 col-12">
                <div class="job-details-inner">
                    <div class="job-details-head row mx-0">
                        <div class="company-logo col-auto">
                            <a href="#" style="border-radius: 4px; overflow: hidden;">
                                <img style="width: 65px;" src="{{ Storage::url($vacancy->poster) }}" alt="Company Logo">
                            </a>
                        </div>
                        <div class="salary-type col-auto order-sm-3">
                            <span class="salary-range">Rp. {{ $vacancy->salary }}</span>
                            <span class="badge badge-success">{{ $vacancy->type }}</span>
                        </div>
                        <div class="content col">
                            <h5 class="title">{{ $vacancy->title }}</h5>
                            <ul class="meta">
                                <li><strong class="text-primary"><a href="http://www.graygrids.com">{{ $company->name }}</a></strong>
                                </li>
                                <li><i class="lni lni-map-marker"></i> {{ $vacancy->placement }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="job-details-body">
                        <h6 class="mb-3">Job Description</h6>
                        <p>{{ $vacancy->job_desc }}</p>
                        <h6 class="mb-3 mt-4">Responsibilities</h6>
                        <ul>
                            @foreach (json_decode($vacancy->responsilities) as $item)
                                <li>{{ $item }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12">
                <div class="job-details-sidebar">
                    <div class="sidebar-widget">
                        <div class="inner">
                            <h6 class="title">Job Overview</h6>
                            <ul class="job-overview list-unstyled">
                                <li><strong>Published on:</strong> {{ $vacancy->created_at }}</li>
                                <li><strong>Employment Status:</strong> {{ $vacancy->type }}</li>
                                <li><strong>Job Location:</strong> {{ $vacancy->placement }}</li>
                                <li><strong>Application Deadline:</strong> {{ $vacancy->deadline }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@push('css')

<style>
    .navbar-area {
        background: white !important;
    }
</style>

@endpush
