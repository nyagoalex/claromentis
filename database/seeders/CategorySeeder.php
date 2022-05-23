<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => 'Food', 'description' => 'Food expenses'],
            ['name' => 'Fuel', 'description' => 'Fuel expenses'],
            ['name' => 'Entertainment', 'description' => 'Entertainment expenses'],
            ['name' => 'Hotel', 'description' => 'Hotel expenses'],
            ['name' => 'Other', 'description' => 'Other expenses'],
        ])->map(function ($category) {
            return Category::create($category);
        });
    }
}
