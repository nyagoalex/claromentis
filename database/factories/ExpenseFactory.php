<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'qty' => $this->faker->randomDigitNotZero(),
            'unit_price' => $this->faker->randomDigitNot(0),
        ];
    }
}
