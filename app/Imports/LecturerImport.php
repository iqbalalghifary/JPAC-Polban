<?php

namespace App\Imports;

use App\Models\Lecturer;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class LecturerImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach($rows as $row){
            $Lecturer = Lecturer::where('nip', $row['nip'])->first();

            if($Lecturer) {
                $Data = Lecturer::where('nip', $row['nip'])->update([
                    'nidn' => $row['nidn'],
                    'name' => $row['name'],
                    'major' => $row['major'],
                    'study_program' => $row['study_program'],
                    'email' => $row['email'],
                    'status' => $row['status'],
                    'password' => Hash::make($row['password']),
                ]);

                // dd($row['name']);

                // $Data->assignRole('Lecturer');
            } else {
                $Data = Lecturer::create([
                    'nip' => $row['nip'],
                    'nidn' => $row['nidn'],
                    'name' => $row['name'],
                    'major' => $row['major'],
                    'study_program' => $row['study_program'],
                    'email' => $row['email'],
                    'status' => $row['status'],
                    'password' => Hash::make($row['password']),
                ]);

                $Data->assignRole('Lecturer');
            }
        }
    }
}
