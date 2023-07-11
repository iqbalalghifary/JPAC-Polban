<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (request()->ajax()) {
            $Data = User::join('model_has_roles', 'model_has_roles.model_uuid', '=', 'users.id')
                        ->join('roles', 'roles.id', '=', 'model_has_roles.role_id')
                        ->select('users.*', 'roles.name AS rolename')
                        ->where('roles.name', 'Operator')->get();

            return DataTables::of($Data)->addIndexColumn()
                        ->addColumn('action', function($item) {
                            return '
                                <div class="d-flex">
                                    <a href="' . route('user.edit', $item->id) . '" class="ml-2 btn btn-warning">
                                        <span class="fas fa-edit"></span>
                                    </a>
                                    <form class="inline-block" action="' . route('user.destroy', $item->id) . '" method="POST">
                                        <button class="ml-2 btn btn-danger">
                                            <span class="fas fa-trash"></span>
                                        </button>
                                        ' . method_field('delete') . csrf_field() . '
                                    </form>
                                </div>
                            ';
                        })->rawColumns(['action'])->make(true);
        }

        return view('master.user.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
