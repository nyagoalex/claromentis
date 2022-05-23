<?php

namespace App\Repository;

use Illuminate\Support\Collection;

interface ExpenseRepositoryInterface
{
    public function all(): Collection;
}
