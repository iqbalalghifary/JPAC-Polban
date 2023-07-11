<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyVacancySubmission;
use Illuminate\Support\Facades\Http;
use App\Mail\DenyVacancySubmission;

class VacancyController extends Controller
{

    public function index()
    {

        if (request()->ajax()) {

            $Data = Vacancy::latest()->get();

            return DataTables::of($Data)->addIndexColumn()
            ->addColumn('provision', function($item) {
                $content = '<ul>';
                $provision = json_decode($item->provision);
                foreach ($provision as $key => $value) {
                    $content .= '<li>' . $value . '</li>';
                }
                $content .= '</ul>';
                return $content;
            })
            ->addColumn('responsilities', function($item) {
                $content = '<ul>';
                $provision = json_decode($item->responsilities);
                foreach ($provision as $key => $value) {
                    $content .= '<li>' . $value . '</li>';
                }
                $content .= '</ul>';
                return $content;
            })
            ->addColumn('poster', function($item) {
                return '<img width="70" src="' . Storage::url($item->poster)  . '">';
            })
            ->rawColumns(['provision', 'responsilities', 'poster'])->make(true);
        }

        return view('master.vacancy.index');
    }

    public function create()
    {
        return view('master.vacancy.create');
    }

    public function store(Request $Request)
    {
        $responsibilities = [];
        $validator = Validator::make($Request->all(), [
            'title' => 'required',
            'job_desc' => 'required',
            'type' => 'required',
            'provision' => 'required',
            'addMoreInputFields.*' => 'required',
            'deadline' => 'required',
            'salary' => 'required',
            'placement' => 'required',
            'poster' => 'required|mimes:png,jpg,jpeg|max:2048',
        ]);

        if ($validator->fails()) {
            Alert::error('Congrats', 'Registration Failed');
            return response()->json($validator->errors(), 422);
        }

        $vacancy = new Vacancy();
        $vacancy->title = $Request->title;
        $vacancy->type = $Request->type;
        $vacancy->job_desc = $Request->job_desc;
        $vacancy->deadline = $Request->deadline;
        $vacancy->salary = $Request->salary;
        $vacancy->placement = $Request->placement;
        $vacancy->status = "DIUSULKAN";
        $vacancy->provision = json_encode($Request->provision);
        $vacancy->company_uuid = Auth::user()->id;

        foreach ($Request->addMoreInputFields as $key => $value) {
            array_push($responsibilities, $value);
        }

        $vacancy->responsilities = json_encode($responsibilities);
        $poster = $Request->file('poster');
        $pathPoster = $poster->store('public/vacancy/poster');
        $vacancy->poster = $pathPoster;
        $vacancy->save();

        Alert::success('Success', 'Vacancy has been added');
        return redirect()->route('vacancy.index');
    }

    public function vacancyVerification(){
        if (request()->ajax()) {

            $Data = Vacancy::where('status', 'DIUSULKAN')->get();

            return DataTables::of($Data)->addIndexColumn()
            ->addColumn('provision', function($item) {
                $content = '<ul>';
                $provision = json_decode($item->provision);
                foreach ($provision as $key => $value) {
                    $content .= '<li>' . $value . '</li>';
                }
                $content .= '</ul>';
                return $content;
            })
            ->addColumn('responsilities', function($item) {
                $content = '<ul>';
                $provision = json_decode($item->responsilities);
                foreach ($provision as $key => $value) {
                    $content .= '<li>' . $value . '</li>';
                }
                $content .= '</ul>';
                return $content;
            })
            ->addColumn('poster', function($item) {
                return '<img width="70" src="' . Storage::url($item->poster)  . '">';
            })
            ->addColumn('action', function($item) {
                return '
                    <div class="d-flex">
                        <form action="' . route('vacancy.verify', $item->id) . '" method="POST">
                            <button type="button" id="btnAcceptVerification" class="ml-2 btn btn-info">
                                <span class="fas fa-key"></span>
                                Accept
                            </button>
                            ' . method_field('PUT') . csrf_field() . '
                        </form>
                        <form action="' . route('vacancy.deny', $item->id) . '" method="POST">
                            <button type="button" id="btnDenyVerification" class="ml-2 btn btn-danger">
                                <span class="fas fa-edit"></span>
                                Deny
                            </button>
                            ' . method_field('DELETE') . csrf_field() . '
                        </form>
                    </div>
                ';
            })->rawColumns(['provision', 'responsilities', 'poster','action'])->make(true);
        }

        return view('master.vacancy.verify');
    }

    public function verify($id)
    {
        $vacancy = Vacancy::findOrFail($id);
        $company = Company::where('id', $vacancy->company_uuid)->first();

        $details = [
            'name' => $company->name,
            'email' => $company->email,
            'title' => $vacancy->title,
        ];

        Mail::to($company->email)->send(new VerifyVacancySubmission($details, "company"));

        $response = Http::get('https://api.telegram.org/bot6164537807:AAHHyRS_5vEcIxNZNnKE8Rd0GYkm55XEihY/sendphoto?chat_id=-1001963493856&photo=https://blog-edutore-partner.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/06/09062717/POLBAN.jpg&parse_mode=HTML&caption=' . urlencode("Lowongan pekerjaan " . $vacancy->title . "\n\n" . $vacancy->job_desc . "\n\nkunjungi http://localhost:8000/vacancy/" . $vacancy->id ));

        $vacancy->status = "AKTIF";
        $vacancy->save();

        Alert::success('Success', 'Vacancy has been activated');
        return redirect()->route('vacancy.verification');
    }

    public function deny($id){

        $vacancy = Vacancy::findOrFail($id);
        $company = Company::findOrFail($vacancy->company_uuid);

        $details = [
            'name' => $company->name,
            'email' => $company->email
        ];

        Mail::to($company->email)->send(new DenyVacancySubmission($details, "company"));
        $vacancy->delete();

        Alert::success('Success', 'Vacancy submission has been deleted');
        return redirect()->route('company.verification');
    }

}
