<?php
namespace App\Repository\Eloquent;

use App\Models\Category;
use App\Repository\CategoryRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface
{
    public function __construct(Category $category)
    {
        parent::__construct($category);
    }

    public function all(): LengthAwarePaginator
    {
        return QueryBuilder::for(Category::query())
            ->select(['id', 'name',  'description', 'created_at'])
            ->withCount('expenses')
            ->withSum('expenses', 'amount')
            ->allowedFilters([AllowedFilter::partial('search', 'name')])
            ->defaultSort('-created_at')
            ->paginate(10)->withQueryString();
    }

    public function deleteByModel(Category $category): ?bool
    {
        return $category->delete();
    }

    public function getCategoryName(String $name): String
    {
        return optional($this->model->whereName($name)->first())->id;
    }
}
