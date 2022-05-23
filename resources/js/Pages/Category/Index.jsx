import React, {useState} from "react";
import NoResults from "@/layouts/NoResults";
import Search from "@filters/Search";
import BaseButton from "@components/BaseButton";
import CategoryListCard from "@components/CategoryListCard";
import CreateCategory from "@pages/Category/Create";
import Pagination from "@components/Pagination";
import BreadCrumbs from "@components/BreadCrumbs";

const CategoryIndex = ({categories}) => {
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
    return (
        <div className="">
            <BreadCrumbs  pages={[
                {name: 'Categories', href: '#',},
            ]}/>
            <header>
                <div className="mt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-lg sm:text-3xl font-bold leading-tight text-gray-900">Categories</h1>
                </div>
            </header>
            <main>
                <div className="bg-white overflow-hidden sm:rounded-md border border-gray-200 shadow-sm my-10">
                    <div className="p-4 bg-gray-50 sm:flex sm:items-center sm:justify-between border-gray-200 border-b">
                        <div className="sm:w-1/4 mb-2 sm:mb-0">
                            <Search url={"/categories"}/>
                        </div>
                        <BaseButton
                            onClick={() => setIsCreateFormVisible(true)}

                        >
                            + New category
                        </BaseButton>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {categories.data.length ? categories.data.map(category => (
                                <CategoryListCard
                                    key={category.id}
                                    category={category}
                                />
                            ))
                            : <NoResults/>}

                    </div>
                    {categories.data.length  && (categories.data.length !== categories.total) ?
                        <Pagination
                        links={categories.links}
                        />
                        : null}
                </div>
            </main>
            <CreateCategory isOpen={isCreateFormVisible} setIsOpen={setIsCreateFormVisible} title='Add Category'/>
        </div>
    )
}

export default CategoryIndex;
