<?php

namespace App\Exports;

use App\Models\BulkFile;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExpenseExport implements FromCollection, WithTitle, WithHeadings
{
    private BulkFile $bulkFile;

    public function __construct(BulkFile $bulkFile)
    {
        $this->bulkFile = $bulkFile;
    }

    public function headings(): array
    {
        return [
            'Category', 'quantity', 'Unit price', 'Total Amount'
        ];
    }

    public function title(): string
    {
        return 'Expenses';
    }

    public function collection()
    {
        return $this->bulkFile->expenses()
             ->join('categories', 'categories.id', '=', 'expenses.category_id')
             ->select('categories.name','expenses.qty', 'expenses.unit_price', 'expenses.amount')
             ->get();
    }
}
