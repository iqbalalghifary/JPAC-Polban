<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $Administratorole = Role::create(
            [
            'name' => 'Administrator',
            'guard_name' => 'web',
            ]
        );

        $PartnerRole = Role::create([
            'name' => 'Partner',
            'guard_name' => 'webcompany',
        ]);
    }
}
