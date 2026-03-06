<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = [
        'name',
        'image_path',
        'position',
        'sort_order',
        'show_social',
    ];

    protected $casts = [
        'show_social' => 'boolean',
    ];
}
