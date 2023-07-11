<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\VacancyController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes([
    'register' => false,
    'reset' => false,
    'verify' => false,
]);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', [FrontEndController::class, 'index'])->name('index');
Route::get('/vacancies', [FrontEndController::class, 'vacancies'])->name('vacancies');
Route::get('/vacancies/{id}', [FrontEndController::class, 'detail'])->name('vacancies.detail');

// Handle Login & Register
Route::post('/login/post', [LoginController::class, 'handleLogin'])->name('login.post');
Route::post('/register/store', [FrontEndController::class, 'registration'])->name('register.store');

Route::group(['prefix' => 'master', 'middleware' => ['auth:web,webstudent,webcompany', 'verified']], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Role Administrator
    Route::group(['middleware' => ['role:Administrator']], function () {
        // Company
        Route::get('/company/index', [CompanyController::class, 'index'])->name('company.index');
        Route::get('/company/verification', [CompanyController::class, 'companyVerification'])->name('company.verification');
        Route::put('/company/verification/{id}', [CompanyController::class, 'verify'])->name('company.verify');
        Route::delete('/company/verification/{id}', [CompanyController::class, 'deny'])->name('company.deny');
        Route::get('/vacancy/verification', [VacancyController::class, 'vacancyVerification'])->name('vacancy.verification');
        Route::put('/vacancy/verification/{id}', [VacancyController::class, 'verify'])->name('vacancy.verify');
        Route::delete('/vacancy/verification/{id}', [VacancyController::class, 'deny'])->name('vacancy.deny');
    });

    // Role Partner
    Route::group(['middleware' => ['role:Partner']], function () {
        // Company
        Route::get('/vacancy/index', [VacancyController::class, 'index'])->name('vacancy.index');
        Route::get('/vacancy/create', [VacancyController::class, 'create'])->name('vacancy.create');
        Route::post('/vacancy/store', [VacancyController::class, 'store'])->name('vacancy.store');
    });

});
