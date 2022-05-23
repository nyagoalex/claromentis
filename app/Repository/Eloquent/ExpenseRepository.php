<?php
namespace App\Repository\Eloquent;

use App\Models\Expense;
use App\Repository\ExpenseRepositoryInterface;
use Illuminate\Support\Collection;

class ExpenseRepository extends BaseRepository implements ExpenseRepositoryInterface
{
    public function __construct(Expense $expense)
    {
        parent::__construct($expense);
    }

    public function all(): Collection
    {
        return $this->model->all();
    }
}
