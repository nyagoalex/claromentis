<?php

namespace App\Repository;

use App\Models\Category;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface CategoryRepositoryInterface
{
    public function all(): LengthAwarePaginator;

    public function deleteByModel(Category $category);
}
