<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BulkFileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'reference_number' => $this->faker->word,
            'file_name' => $this->faker->slug,
            'rows' => $this->faker->randomDigit
        ];
    }
}
