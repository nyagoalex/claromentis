<?php

namespace Tests\Feature;

use App\Models\BulkFile;
use App\Models\Expense;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Maatwebsite\Excel\Facades\Excel;
use Tests\TestCase;

class BulkFileControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_view_bulk_files(): void
    {
        BulkFile::factory()->create();

        $this->getJson(route('bulk.file.index'))
            ->assertStatus(200)
            ->assertInertia(fn(AssertableInertia $page) => $page->component('BulkFile/Index'));
    }

    /** @test */
    public function can_view_single_bulk_file(): void
    {
        $file = BulkFile::factory()
            ->has(Expense::factory()->forCategory())
            ->create();

        $this->getJson(route('bulk.file.show', $file->id))
            ->assertStatus(200)
            ->assertInertia(fn(AssertableInertia $page) => $page->where('bulkFile.id', $file->id));
    }

    /** @test */
    public function can_download_bulk_file_template(): void
    {
        $this->getJson(route('bulk.file.template'))
            ->assertStatus(200);
    }

    /** @test */
    public function can_export_bulk_file(): void
    {
        Excel::fake();

        $file = BulkFile::factory()
            ->has(Expense::factory()->forCategory())
            ->create();

        $this->getJson(route('bulk.file.export', $file->id))
            ->assertStatus(200);

        Excel::assertDownloaded('expenses.xlsx');
    }
}
