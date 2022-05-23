import React, {useState} from "react";
import NoResults from "@/layouts/NoResults";
import Search from "@filters/Search";
import BaseButton from "@components/BaseButton";
import BulkFileCard from "@components/BulkFileCard";
import CreateBulkFile from "@pages/BulkFile/Create";
import BreadCrumbs from "@components/BreadCrumbs";
import Pagination from "@components/Pagination";

const BulkFileIndex = ({files}) => {
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
    return (
        <div className="">
            <BreadCrumbs  pages={[
                {name: 'Bulk files', href: '#',},
            ]}/>
            <header>
                <div className="mt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-lg sm:text-3xl  font-bold leading-tight text-gray-900 flex items-center">Bulk File Expenses
                        <a
                            href={`/bulk-files/template`}
                            className="inline-flex ml-8 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 hover:shadow-md hover:text-indigo-600">

                            <svg xmlns="http://www.w3.org/2000/svg" className="-ml-0.5 mr-1.5 h-5 w-5 text-indigo-400"
                                 viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd"
                                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                    clipRule="evenodd"/>
                            </svg>
        Download template
      </a>
                    </h1>
                </div>
            </header>
            <main>
                <div className=" overflow-hidden sm:rounded-md my-3">
                    <div className="py-6 px-4 sm:flex sm:items-center sm:justify-between">
                        <div className="sm:w-1/4 mb-2 sm:mb-0">
                            <Search url={"/bulk-files"}/>
                        </div>
                        <BaseButton

                            onClick={() => setIsCreateFormVisible(true)}
                            primary
                            sm
                        >
                            Upload Expenses
                        </BaseButton>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {files.data.length ? files.data.map(file => (
                                <BulkFileCard
                                    key={file.id}
                                    file={file}
                                />
                            ))
                            : <NoResults/>}
                    </div>
                    {files.data.length && (files.data.length !== files.total) ?
                        <Pagination
                            links={files.links}
                        />
                        : null}
                </div>
            </main>
            <CreateBulkFile isOpen={isCreateFormVisible} setIsOpen={setIsCreateFormVisible} title='Upload Bulk file'/>
            {/*<BaseModal />*/}
        </div>
    )
}

export default BulkFileIndex;
