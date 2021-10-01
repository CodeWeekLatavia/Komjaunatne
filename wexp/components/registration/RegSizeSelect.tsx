export default function RegSizeSelect(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Employee Count
            </label>
            <select
                className="form-control"
                id={props.inputId}
            >
                <option>0-10</option>
                <option>10-100</option>
                <option>100-1000</option>
                <option>1000+</option>
            </select>
        </div>
    )
}