
export default function ProgressBar(props: { done: string }) {
    return (
        <div className="progress">
            <div className="progress-bar" style={{ width: props.done }} role="progressbar"></div>
        </div>
    );
}