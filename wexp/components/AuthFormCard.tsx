export default function AuthFormCard(props) {
    return (
        <div className="card shadow-sm flex-grow-1 mb-4">
            <h5 className="card-title text-center mt-3">{props.title}</h5>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}