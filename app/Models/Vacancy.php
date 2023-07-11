<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid as RamseyUuid;

class Vacancy extends Model
{
    use HasFactory;
    protected $keyType = 'string';

    protected $casts = [
        'id' => 'string',
    ];

    public $incrementing = false;

    protected $fillable = [
        'title',
        'deadline',
        'job_desc',
        'poster',
        'meta_data'
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function($obj) {
            $obj->id = RamseyUuid::uuid4()->toString();
        });
    }
}
