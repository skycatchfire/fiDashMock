
export default function Search(props) {
    return (

        <div className="mt-1">
            <input
                className="shadow-sm focus:ring-orange-500 focus:border-orange-500 w-full sm:text-sm border-gray-900"
                onChange={(e) => props.setter(e.target.value)}
                id="email"
                placeholder={props.place}
            />
        </div>

    )
}
