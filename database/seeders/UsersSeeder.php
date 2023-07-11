<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $AdministratorRole = User::create([
            'name' => 'Administrator Pusat Karir POLBAN',
            'email' => 'jpac@polban.ac.id',
            'email_verified_at' => now(),
            'password' => Hash::make('3J?!sGQTF5wK6*xs'),
            'remember_token' => Str::random(10),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        $AdministratorRole->assignRole('Administrator');
    }
}
