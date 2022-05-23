const BaseButton = (props) => {
    return (
        <>
            <button
                onClick={props.onClick}
                type="button"
                className="inline-flex items-center px-3 py-2 border border-indigo-400 text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {props.children}
            </button>
        </>
    )
}

export default BaseButton;
