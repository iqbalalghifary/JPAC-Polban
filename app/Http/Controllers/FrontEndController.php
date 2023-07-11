<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Support\Facades\Validator;
use RealRashid\SweetAlert\Facades\Alert;

class FrontEndController extends Controller
{
    public function index()
    {
        $title = 'Home';
        $vacancies = Vacancy::latest()->get();
        $companies = Company::where('status','AKTIF')->get();
        return view('frontend.index', compact('title', 'vacancies', 'companies'));
    }

    public function registration(Request $Request)
    {
        $validator = Validator::make($Request->all(), [
            'company_name' => 'required',
            'address' => 'required',
            'phone_number' => 'required',
            'permission' => 'required',
            'website' => 'required',
            'email' => 'required',
            'logo' => 'required|mimes:png,jpg,jpeg,csv,txt,pdf|max:2048',
            'mou' => 'required|mimes:png,jpg,jpeg,csv,txt,pdf|max:2048',
        ]);

        if ($validator->fails()) {
            Alert::error('Congrats', 'Registration Failed');
            return response()->json($validator->errors(), 422);
        }

        $logo = $Request->file('logo');
        $mou = $Request->file('mou');

        $pathLogo = $logo->store('public/company/logo');
        $pathMoU = $mou->store('public/company/mou');

        $company = new Company();
        $company->name = $Request->company_name;
        $company->address = $Request->address;
        $company->website = $Request->website;
        $company->no_telp = $Request->phone_number;
        $company->email = $Request->email;
        $company->mou = $pathMoU;
        $company->logo = $pathLogo;
        $company->save();

        return response()->json([
            'success' => true,
            'message' => 'Your data has been registered',
            'data'    => $company
        ]);
    }

    public function vacancies()
    {
        $title = 'Vacancies';
        $vacancies = Vacancy::latest()->get();
        return view("frontend.vacancies.index", compact('title','vacancies'));
    }

    public function detail($id)
    {
        $vacancy = Vacancy::findOrFail($id);
        $title = $vacancy->title;
        $company = Company::findOrFail($vacancy->company_uuid);

        return view("frontend.vacancies.detail", compact('vacancy', 'title', 'company'));
    }

}
