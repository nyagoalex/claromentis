import {ScaleIcon} from "@heroicons/react/solid";

export default function ExpenseListCard({expenses}) {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Category
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Unit Price (<span className="font-bold">GBP</span>)
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Total Cost (<span className="font-bold">GBP</span>)
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {expenses.map((expense) => (
                                <tr key={expense.id} className="group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div
                                                className="flex-shrink-0 rounded-full bg-gray-100 p-2 flex items-start justify-center group-hover:bg-white">
                                                <ScaleIcon
                                                    className="h-6 rounded-full fill-current text-gray-400 group-hover:text-indigo-700"/>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{expense.category.name}</div>
                                                <div className="text-sm text-gray-500">EXP-00008-0001</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {expense.qty}
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                        {expense.unit_price}
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">{expense.amount}</td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
