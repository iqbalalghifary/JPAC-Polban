@extends('layouts.master')

@section('section-head')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="background: transparent; font-size: 16px; padding: 3px 2px; margin-bottom: 0px;">
            <li class="breadcrumb-item"><a href="#" style="color: black;">Master</a></li>
            <li class="breadcrumb-item active"><a href="/master/dashboard">Dashboard</a></li>
        </ol>
    </nav>
@endsection

@section('section-body')
    @hasrole('Administrator')
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-primary">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>Activated Companies</h4>
                        </div>
                        <div class="card-body">
                            {{ $allActivatedCompanies }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-danger">
                        <i class="far fa-newspaper"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>Unactivated Companies</h4>
                        </div>
                        <div class="card-body">
                            {{ $allUnactivatedCompanies }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-warning">
                        <i class="far fa-file"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>Activated Vacancies</h4>
                        </div>
                        <div class="card-body">
                            {{ $allActivatedVacancies }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-success">
                        <i class="fas fa-circle"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>Unactivated Vacancies</h4>
                        </div>
                        <div class="card-body">
                            {{ $allUnactivatedVacancies }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endhasrole

    @hasrole('Partner')
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-primary">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>Activated Vacancies</h4>
                        </div>
                        <div class="card-body">
                            {{ $activatedVacancies }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-danger">
                        <i class="far fa-newspaper"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>Unactivated Vacancies</h4>
                        </div>
                        <div class="card-body">
                            {{ $unactivatedVacancies }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endhasrole
@endsection
