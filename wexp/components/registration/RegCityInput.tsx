
export default function RegCityInput(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                City
            </label>
            <input
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}