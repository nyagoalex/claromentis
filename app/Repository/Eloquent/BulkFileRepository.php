<?php
namespace App\Repository\Eloquent;

use App\Models\BulkFile;
use App\Repository\BulkFileRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BulkFileRepository extends BaseRepository implements BulkFileRepositoryInterface
{
    public function __construct(BulkFile $file)
    {
        parent::__construct($file);
    }

    public function all(): LengthAwarePaginator
    {
        return QueryBuilder::for(BulkFile::query())
            ->select(['id', 'reference_number',  'rows', 'created_at'])
            ->withSum('expenses', 'amount')
            ->allowedFilters([AllowedFilter::partial('search', 'reference_number')])
            ->defaultSort('-created_at')
            ->allowedSorts('created_at', 'rows')
            ->paginate(10)->withQueryString();
    }
}
