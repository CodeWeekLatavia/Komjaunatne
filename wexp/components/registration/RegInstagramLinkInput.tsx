export default function RegInstagramLinkInput(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Instagram Link
            </label>
            <input
                type="url"
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}