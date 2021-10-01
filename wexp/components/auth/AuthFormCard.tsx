export default function AuthFormCard(props: {onSubmit?, title:string, children}) {
    return (
        <div className="card shadow-sm flex-grow-1 mb-4">
            <h5 className="card-title text-center mt-3">{props.title}</h5>
            <div className="card-body">
                <form onSubmit={props.onSubmit} className="d-flex flex-column h-100 justify-content-between">
                    {props.children}
                </form>
            </div>
        </div>
    )
}