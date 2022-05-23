<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreExpenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'category_name' => ['required', 'string', 'exists:categories,name'],
            'qty' => ['required', 'integer', 'min:1', 'max:9000'],
            'unit_price' => ['required', 'numeric', 'min:0.01', 'max:99999999.99'],
        ];
    }
}
