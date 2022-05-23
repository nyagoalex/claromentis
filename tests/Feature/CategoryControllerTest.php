<?php

namespace Tests\Feature;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_view_categories(): void
    {
        Category::factory()->create();

        $this->getJson(route('categories.index'))
            ->assertStatus(200)
            ->assertInertia(fn(AssertableInertia $page) => $page->component('Category/Index'));
    }

    /** @test */
    public function can_create_categories(): void
    {
        Category::factory()->create();

        $category = Category::factory()->raw();

        $this->post(route('categories.store'), $category)
            ->assertStatus(302)
            ->assertRedirect(route('categories.index'));

        $this->assertDatabaseHas('categories', [ 'name' => $category['name']]);

    }

    /** @test * */
    public function name_field_is_required_to_create_category(): void
    {
        $this->post(route('categories.store'), [])
            ->assertStatus(302)
            ->assertRedirect(route('home'))
            ->assertSessionHasErrors(['name']);

        $this->assertDatabaseCount('categories', 0);
    }

}
