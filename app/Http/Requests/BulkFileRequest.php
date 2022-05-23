<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BulkFileRequest extends FormRequest
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
            'reference_number' => ['required', 'alpha_dash', 'unique:bulk_files', 'between:2,30'],
            'file' => ['required', 'file', 'mimes:csv,txt', 'max:5000'],
        ];
    }
}
