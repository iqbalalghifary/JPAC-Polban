<?php

namespace App\Http\Controllers;

use App\Mail\DenyRegistration;
use App\Models\Company;
use Illuminate\Support\Str;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Storage;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Mail\VerifyRegistration;

class CompanyController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            $Data = Company::where('status', 'AKTIF')->get();

            return DataTables::of($Data)->addIndexColumn()
            ->addColumn('biodata', function($item) {
                return '
                    <div class="d-flex">
                        <div class="row">
                            <div class="col" style="width: 100px; flex: 0 0 100px;">
                                <img width="70" src="' . Storage::url($item->logo)  . '">
                            </div>
                            <div class="col">
                                <div class="row">
                                    <h6>'. $item->name .'</h6>
                                </div>
                                <div class="row">
                                    ' . $item->address  . '
                                </div>
                            </div>
                        </div>
                    </div>
                ';
            })
            ->addColumn('website', function($item) {
                return '<a href="' . $item->website . '" target="_blank"> ' . $item->website . '</a>';
            })
            ->addColumn('mou', function($item) {
                return '<a href="' . Storage::url($item->mou) . '" target="_blank"><img width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png"></a>';
            })
            ->rawColumns(['biodata','mou','website'])->make(true);
        }

        return view('master.company.index');
    }

    public function companyVerification()
    {
        if (request()->ajax()) {
            $Data = Company::where('status', 'DIUSULKAN')->get();

            return DataTables::of($Data)->addIndexColumn()
            ->addColumn('biodata', function($item) {
                return '
                    <div class="d-flex">
                        <div class="row">
                            <div class="col" style="width: 90px; flex: 0 0 90px;">
                                <img width="60" src="' . Storage::url($item->logo)  . '">
                            </div>
                            <div class="col">
                                <div class="row">
                                    <h6>'. $item->name .'</h6>
                                </div>
                                <div class="row">
                                    ' . $item->address  . '
                                </div>
                            </div>
                        </div>
                    </div>
                ';
            })
            ->addColumn('website', function($item) {
                return '<a href="' . $item->website . '" target="_blank"> ' . $item->website . '</a>';
            })
            ->addColumn('mou', function($item) {
                return '<a href="' . Storage::url($item->mou) . '" target="_blank"><img width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png"></a>';
            })
            ->addColumn('action', function($item) {
                return '
                    <div class="d-flex">
                        <form action="' . route('company.verify', $item->id) . '" method="POST">
                            <button type="button" id="btnAcceptVerification" class="ml-2 btn btn-info">
                                <span class="fas fa-key"></span>
                                Accept
                            </button>
                            ' . method_field('PUT') . csrf_field() . '
                        </form>
                        <form action="' . route('company.deny', $item->id) . '" method="POST">
                            <button type="button" id="btnAcceptVerification" class="ml-2 btn btn-danger">
                                <span class="fas fa-edit"></span>
                                Deny
                            </button>
                            ' . method_field('DELETE') . csrf_field() . '
                        </form>
                    </div>
                ';
            })->rawColumns(['biodata','mou','website','action'])->make(true);
        }
        return view('master.company.verify');
    }

    public function verify($id){
        $company = Company::findOrFail($id);

        $password = Str::password(10);
        $details = [
            'name' => $company->name,
            'email' => $company->email,
            'password' => $password
        ];

        Mail::to($company->email)->send(new VerifyRegistration($details, "company"));

        $company->status = "AKTIF";
        $company->password = Hash::make($password);
        $company->save();

        $company->assignRole('Partner');

        Alert::success('Success', 'Company has been activated');
        return redirect()->route('company.verification');
    }

    public function deny($id){
        $company = Company::findOrFail($id);

        $details = [
            'name' => $company->name,
            'email' => $company->email
        ];

        Mail::to($company->email)->send(new DenyRegistration($details, "company"));
        $company->delete();

        Alert::success('Success', 'Campny has been deleted');
        return redirect()->route('company.verification');
    }

}
