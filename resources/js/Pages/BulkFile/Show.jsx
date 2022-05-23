import React from "react";
import NoResults from "@/layouts/NoResults";
import ExpenseListCard from "@components/ExpenseListCard";
import BaseButton from "@components/BaseButton";
import BreadCrumbs from "@components/BreadCrumbs"

const Show = ({bulkFile}) => {
    return (
        <div className="">
            <BreadCrumbs  pages={[
                {name: 'Bulk files', href: '/bulk-files',},
                {name: 'Detail', href: '#'},
            ]}/>
            <header
                className="max-w-3xl mt-1 mx-auto py-4 md:flex md:items-center bg-white rounded-md px-4 shadow-sm md:justify-between md:space-x-5 lg:max-w-7xl">
                <div className="flex items-start space-x-5">
                    <div
                        className="flex-shrink-0 rounded-full bg-gray-100 p-2 flex items-start justify-center group-hover:bg-white">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700">{bulkFile.reference_number}</h1>
                        <p className="text-sm font-medium text-gray-500 flex items-center space-x-2">
                            <span className="capitalize">{bulkFile.expenses_count} rows</span>
                            <span className="rounded-full bg-gray-400 w-1 h-1"></span>
                            <span className="text-gray-500">GBP {bulkFile.expenses_sum_amount}</span>
                            <span className="text-gray-500">|</span>
                            <span className={"text-sm font-mono text-gray-400"}>Uploaded on {bulkFile.created_at}</span>
                        </p>
                    </div>
                </div>

                <div className={"ml-auto"}>
                    <a href={`/bulk-files/${bulkFile.id}/export`}><BaseButton>Export to csv</BaseButton></a>
                </div>
            </header>
            <main>
                <div className=" overflow-hidden sm:rounded-md my-3">
                    {bulkFile.expenses.length ?
                        <ExpenseListCard expenses={bulkFile.expenses}/>
                        : <NoResults/>}
                </div>
            </main>
        </div>
    )
}

export default Show;
