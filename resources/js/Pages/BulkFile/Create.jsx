import BaseModal from "@layouts/BaseModal";
import BaseButton from "@components/BaseButton";
import SecondaryButton from "@components/SecondaryButton";
import { useForm } from '@inertiajs/inertia-react'
import {useRef} from "react";

const Create = ({isOpen, title, setIsOpen}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        reference_number: '',
        file: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/bulk-files', {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                setIsOpen(false)
            },

        })
    }
    const fileUpload = useRef(null);
    function handleClick() {
        fileUpload.current.click();
    }
    function isArray(arr) {
        return arr instanceof Array;
    }
    return (
        <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
            <div className="py-4 px-6">
                <div className="mt-4 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label
                        htmlFor="name"
                        className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700"
                    >
                        Reference number
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="eg. Hotel"
                        value={data.reference_number} onChange={e => setData('reference_number', e.target.value)}
                    />
                </div>
                {errors.reference_number && <div className={"block text-sm text-red-600"}>{errors.reference_number}</div>}

                <div className="mt-6">
                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                        Expense file
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <button onClick={handleClick}>Upload a csv file</button>

                                    <input id="file-upload" name="file-upload" type="file" accept={"text/csv"} className={"hidden"} ref={fileUpload}  onChange={e => setData('file', e.target.files[0])} />
                                </label> {data.file && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg>}
                            </div>
                            <p className="text-xs text-gray-500">up to 2MB</p>
                        </div>
                    </div>
                </div>

                {errors.file && <div className={"block text-sm text-red-600"}>
                    {isArray(errors.file) ? errors.file.map(error => (
                        <li key={error}> {error}</li>
                    )) : errors.file}
                </div>
                }



            </div>
            <div
                className="py-3 px-6 bg-gray-100 text-lg font-medium text-gray-900 rounded-b-lg flex justify-end space-x-12">
                <SecondaryButton
                    onClick={() => setIsOpen(false)}
                >
                    Cancel
                </SecondaryButton>
                <BaseButton
                    onClick={submit}
                    disabled={processing}
                >
                    Create
                </BaseButton>
            </div>
        </BaseModal>
    )
}

export default Create;
