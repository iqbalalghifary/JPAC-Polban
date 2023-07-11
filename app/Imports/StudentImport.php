<?php

namespace App\Imports;

use App\Models\Student;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class StudentImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        foreach($rows as $row) {
            $Student = Student::where('nim', $row['nim'])->first();

            if($Student) {
                $Data = Student::where('nim', $row['nim'])->update([
                    'name' => $row['name'],
                    'major' => $row['major'],
                    'study_program' => $row['study_program'],
                    'year' => $row['year'],
                    'email' => $row['email'],
                    'status' => $row['status'],
                    'password' => Hash::make($row['password']),
                ]);

                $Data->assignRole('Student');
            } else {
                $Data = Student::create([
                    'nim' => $row['nim'],
                    'name' => $row['name'],
                    'major' => $row['major'],
                    'study_program' => $row['study_program'],
                    'year' => $row['year'],
                    'email' => $row['email'],
                    'status' => $row['status'],
                    'password' => Hash::make($row['password']),
                ]);

                $Data->assignRole('Student');
            }
        }
    }
}
