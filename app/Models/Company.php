<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Ramsey\Uuid\Uuid as RamseyUuid;
use Spatie\Permission\Traits\HasRoles;

class Company extends Authenticatable
{
    use HasFactory;
    use HasRoles;

    protected $keyType = 'string';

    protected $fillable = [
        'name',
        'description',
        'mou',
        'address',
        'vision',
        'mission',
        'no_telp',
        'logo',
        'email',
        'password',
        'status',
    ];

    protected $guarded = [];

    protected $guard_name = 'webcompany';

    protected $casts = [
        'id' => 'string',
    ];

    public $incrementing = false;

    public static function boot()
    {
        parent::boot();
        static::creating(function($obj) {
            $obj->id = RamseyUuid::uuid4()->toString();
        });
    }
}
