import {Link} from '@inertiajs/inertia-react'

const BulkFileCard = ({file}) => {
    return (
        <div className="shadow bg-white rounded-lg hover:shadow-lg">
            <div className="px-4 flex justify-between items-center">
                <div>
                    <div className="pt-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                        {file.reference_number}
                    </div>
                    <div className="pt-4 text-2xl font-medium text-gray-700">
                        GBP 67,000
                    </div>
                </div>
                <div className=" text-xs font-mono text-gray-400">
                    {file.created_at}
                </div>
            </div>
            <Link
                href={`/bulk-files/${file.id}`}
                className="text-sm px-4 py-2 bg-gray-50 text-purple-700 border-gray-200 rounded-b-md flex"
            >
                View all Expenses
            </Link>
        </div>
    )
}

export default BulkFileCard;
