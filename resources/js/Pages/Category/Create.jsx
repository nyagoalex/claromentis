import BaseModal from "@layouts/BaseModal";
import BaseButton from "@components/BaseButton";
import SecondaryButton from "@components/SecondaryButton";
import { useForm } from '@inertiajs/inertia-react'

const Create = ({isOpen, title, setIsOpen}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/categories', {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                setIsOpen(false)
            },

        })
    }
    return (
        <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
            <div className="py-4 px-6">
                <div
                    className=" mt-3 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label
                        htmlFor="name"
                        className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="eg. Hotel"
                        value={data.name} onChange={e => setData('name', e.target.value)}
                    />
                </div>
                {errors.name && <div className={" text-sm text-red-600"}>{errors.name}</div>}
                <div className={"mt-6"}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Description (<span className={"text-gray-400"}>optional</span>)
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="description"
                            name="description"
                            rows={3}
                            className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"

                            value={data.description} onChange={e => setData('description', e.target.value)}
                        />
                        {errors.description && <div className={" text-sm text-red-600"}>{errors.description}</div>}
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about the categories.</p>
                    </div>
                </div>
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
