<?php

namespace App\Imports;

use App\Models\Category;
use App\Repository\Eloquent\CategoryRepository;
use Exception;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Row;
use App\Http\Requests\StoreExpenseRequest;
use App\Models\BulkFile;
use App\Models\Expense;
use App\Repository\Eloquent\ExpenseRepository;

class ExpenseImport implements OnEachRow
{
    private BulkFile $bulkFile;
    private ExpenseRepository $repo;
    private int $rows = 0;

    public function __construct(BulkFile $bulkFile)
    {
        $this->repo = new ExpenseRepository(new Expense());
        $this->bulkFile = $bulkFile;
    }

    /**
     * @throws Exception
     */
    public function onRow(Row $row): void
    {
        ++$this->rows;
        $index = $row->getIndex();
        $row= $row->toArray();
        $row = [
            'category_name' => $row[0] ?? null,
            'unit_price' => $row[1] ?? null,
            'qty' => $row[2] ?? null,
        ];

        $request = Request();
        $request->setMethod('POST');
        $request->replace($row);

        try {
            $request = app(StoreExpenseRequest::class);
            $data = $request->validated();
            $data['bulk_file_id'] = $this->bulkFile->id;
            $data['category_id'] = (new CategoryRepository(new Category()))->getCategoryName($data['category_name']);
            $this->repo->create($data);
        } catch (ValidationException $th) {
            throw ValidationException::withMessages([
                "file" => [array_merge(["Import failed at Row:{$index}. Please fix and re-upload"], $th->validator->messages()->all())]
            ]);
        }
    }

    public function getRowCount(): int
    {
        return $this->rows;
    }
}
