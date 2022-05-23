<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

class BulkFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_number', 'file_name', 'rows'
    ];

    public function expenses(): HasMany
    {
        return $this->hasMany(Expense::class);
    }

    public function getCreatedAtAttribute($value): string
    {
        return Carbon::parse($value)->format('d M, Y H:s');
    }
}
