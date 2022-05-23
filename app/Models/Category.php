<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description'
    ];

    public function setNameAttribute($value): void
    {
        $this->attributes['name'] = ucfirst($value);
    }

    public function expenses(): HasMany
    {
        return $this->hasMany(Expense::class);
    }

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d M, Y');
    }
}
