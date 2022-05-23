<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Repository\CategoryRepositoryInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    private categoryRepositoryInterface $categoryRepository;

    public function __construct(CategoryRepositoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index(): Response
    {
        $categories = $this->categoryRepository->all();
        return Inertia::render('Category/Index', compact('categories'));
    }

    public function create(): void
    {
        //
    }

    public function store(StoreCategoryRequest $request): RedirectResponse
    {
        $this->categoryRepository->create($request->validated());
        return Redirect::route('categories.index')->with('success', 'Category created successfully');
    }

    public function show(Category $category): Response
    {
        $category->load(['expenses', 'expenses.category:id,name']);
        return Inertia::render('Category/Show', compact('category'));

    }

    public function edit(Category $category): void
    {
        //
    }

    public function update(UpdateCategoryRequest $request, Category $category): RedirectResponse
    {
        $this->categoryRepository->update($category, $request->validated());
        return Redirect::route('categories.index')->with('success', 'Category updated successfully');
    }

    public function destroy(Category $category): RedirectResponse
    {
        $this->categoryRepository->deleteByModel($category);
        return Redirect::route('categories.index')->with('success', 'Category deleted successfully');
    }
}
