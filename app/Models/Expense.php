<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'bulk_file_id',
        'qty',
        'unit_price',
    ];

    protected static function boot() {
        parent::boot();

        static::creating(function(Self $expense) {
            $expense->amount = $expense->qty * $expense->unit_price;
        });
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function bulkFile(): BelongsTo
    {
        return $this->belongsTo(BulkFile::class);
    }
}

