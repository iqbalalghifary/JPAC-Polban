<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->string('mou', 255);
            $table->text('address')->nullable();
            $table->string('website', 255);
            $table->text('vision')->nullable();
            $table->text('mission')->nullable();
            $table->string('no_telp', 14);
            $table->string('email', 255)->unique();
            $table->string('password', 255)->nullable();
            $table->string('logo', 255);
            $table->enum('status', ['DIUSULKAN', 'AKTIF']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
