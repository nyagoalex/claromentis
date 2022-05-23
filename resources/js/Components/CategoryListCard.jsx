import {CubeIcon, ChevronRightIcon} from "@heroicons/react/solid";

const CategoryListCard = ({category}) => {
    return (
        <div
              className="block hover:bg-blue-50 group"
        >
            <div className="flex items-center p-3 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                    <div
                        className="flex-shrink-0 rounded-full bg-gray-100 p-2 flex items-start justify-center group-hover:bg-white">
                        <CubeIcon className="h-6 rounded-full fill-current text-gray-400 group-hover:text-indigo-700"/>
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
                        <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">
                                {category.name}
                            </p>
                            <p className="mt-1 flex items-center text-sm text-gray-500">
                                <span className="truncate">since {category.created_at}</span>
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm text-gray-900 capitalize">
                                Expenses
                            </p>
                            <p
                                className="mt-2 text-xs text-gray-500"
                            >
                                {category.expenses_count} items {' '}
                                <span className="inline sm:mx-1 font-semibold" aria-hidden="true">
                        &middot;
                      </span>{' '} £{category.expenses_sum_amount ?? 0}
                            </p>
                        </div>
                        <div className="hidden md:block flex items-center">
                            <p className="text-sm text-gray-900 capitalize">
                                Description
                            </p>
                                <p
                                    className="mt-2 text-xs text-gray-500 truncate"
                                >
                                    {category.description} </p>
                        </div>
                    </div>
                </div>
                <div>
                    <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    )
}

export default CategoryListCard;
