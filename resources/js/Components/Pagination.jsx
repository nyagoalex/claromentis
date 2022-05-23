import {Link} from "@inertiajs/inertia-react";

export default function Pagination({links}) {
    let modelValue = 1;
    const cleanLabel = (link) => link.replace(/[&,]/, '').replace('raquo;', '').replace('laquo;', '')
    const changePage = (page) => {
        if (page === 'Next ') {
            page = modelValue + 1
        }
        if (page === 'prev') {
            page = modelValue - 1
        }
        modelValue = page
    }

    return (
        <nav className="border-t border-gray-200 px-4 pb-4 flex items-center justify-between ">
<span className={"hidden border-indigo-500 inline-flex text-indigo-600 border-transparent text-gray-500"}></span>
            {links.map((link, key) => (
                <div key={key}>
                    {link.url === null ?
                    <div
                         className="last:ml-auto first:mr-auto border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 p-4 items-center text-sm font-medium"
                    >
                        {cleanLabel(link.label)}
                    </div>
                        :

                        <Link
                            className={"last:ml-auto first:mr-auto border-transparent hover:text-gray-700 hover:border-gray-300 border-t-2 p-4 items-center text-sm font-medium"
                            + (link.active ? "border-indigo-500 inline-flex text-indigo-600" : " text-gray-500")}
                            href={link.url}
                        >
                            { cleanLabel(link.label) }
                        </Link>
                    }



                </div>

            ))}

        </nav>
    )
}
