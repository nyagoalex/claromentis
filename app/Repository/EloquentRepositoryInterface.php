<?php

namespace App\Repository;

use Illuminate\Database\Eloquent\Model;

interface EloquentRepositoryInterface
{
    public function create(array $attributes): Model;

    public function findById($id): ?Model;
}
