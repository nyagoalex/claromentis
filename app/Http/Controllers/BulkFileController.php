<?php

namespace App\Http\Controllers;

use App\Exports\ExpenseExport;
use App\Http\Requests\BulkFileRequest;
use App\Imports\ExpenseImport;
use App\Models\BulkFile;
use App\Repository\BulkFileRepositoryInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class BulkFileController extends Controller
{
    private BulkFileRepositoryInterface $bulkFileRepository;

    public function __construct(BulkFileRepositoryInterface $bulkFileRepository)
    {
        $this->bulkFileRepository = $bulkFileRepository;
    }

    public function index(): Response
    {
        $files =  $this->bulkFileRepository->all();

        return Inertia::render('BulkFile/Index', compact('files'));
    }

    public function create(): void
    {
        //
    }

    public function store(BulkFileRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $file = $request->file('file');

        DB::beginTransaction();

        $bulkFile = $this->bulkFileRepository->create([
            'reference_number' => $data['reference_number'],
            'file_name' => $file->hashName(),
        ]);

        $import = new ExpenseImport($bulkFile);

        Excel::import($import, $file);

        $this->bulkFileRepository->update($bulkFile, ['rows' => $import->getRowCount()]);

        DB::commit();

        Storage::disk('imports')->put(null, $file);

        return Redirect::route('bulk.file.index')->with('success', 'Category created successfully');
    }

    public function show(BulkFile $bulkFile): Response
    {
        $bulkFile->load(['expenses', 'expenses.category:id,name'])
        ->loadCount('expenses')
        ->loadSum('expenses', 'amount');

        return Inertia::render('BulkFile/Show', compact('bulkFile'));
    }

    public function template()
    {
        $file = Storage::disk('local')->get('expense-template.csv');
        return response($file, 200, ['Content-Type' => 'text/csv']);
    }

    public function export(BulkFile $bulkFile): BinaryFileResponse
    {
        return Excel::download(new ExpenseExport($bulkFile), 'expenses.xlsx');
    }

}
