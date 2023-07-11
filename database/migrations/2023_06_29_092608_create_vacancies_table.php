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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title', 30);
            $table->enum('type', ['Full-time', 'Internship']);
            $table->text('provision');
            $table->text('job_desc');
            $table->text('responsilities');
            $table->date('deadline');
            $table->integer('salary');
            $table->string('placement', 20);
            $table->string('poster', 255);
            $table->uuid('company_uuid');
            $table->enum('status', ['DIUSULKAN', 'AKTIF']);
            $table->index('company_uuid')->references('id')->on('companies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
