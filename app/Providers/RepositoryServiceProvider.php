<?php

namespace App\Providers;

use App\Repository\BulkFileRepositoryInterface;
use App\Repository\CategoryRepositoryInterface;
use App\Repository\Eloquent\BaseRepository;
use App\Repository\Eloquent\BulkFileRepository;
use App\Repository\Eloquent\CategoryRepository;
use App\Repository\Eloquent\ExpenseRepository;
use App\Repository\EloquentRepositoryInterface;
use App\Repository\ExpenseRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(BulkFileRepositoryInterface::class, BulkFileRepository::class);
        $this->app->bind(ExpenseRepositoryInterface::class, ExpenseRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
