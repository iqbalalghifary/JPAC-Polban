<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // Company Dashboard
        $activatedVacancies = Vacancy::where('status','AKTIF')
            ->where('company_uuid', Auth::user()->id)
            ->count();

        $unactivatedVacancies = Vacancy::where('status','DIUSULKAN')
            ->where('company_uuid', Auth::user()->id)
            ->count();

        // Administrator Dashboard
        $allActivatedVacancies = Vacancy::where('status','=','AKTIF')->count();
        $allUnactivatedVacancies = Vacancy::where('status','=','DIUSULKAN')->count();
        $allActivatedCompanies = Company::where('status','=','AKTIF')->count();
        $allUnactivatedCompanies = Company::where('status','=','DIUSULKAN')->count();

        return view('master.dashboard', compact('activatedVacancies', 'unactivatedVacancies', 'allActivatedVacancies', 'allUnactivatedVacancies', 'allActivatedCompanies', 'allUnactivatedCompanies'));
    }
}
