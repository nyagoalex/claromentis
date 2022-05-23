<?php

namespace App\Repository;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface BulkFileRepositoryInterface
{
    public function all(): LengthAwarePaginator;
}
