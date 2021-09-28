
import styles from "../styles/Alert.module.css";

export default function AuthAlertMsg(props: {msgId:string}) {
    return (
        <div style={{ display: 'none', textAlign: 'center' }} id={props.msgId} className={`alert alert-danger ${styles.content}`} role="alert">
            This is a info alert—check it out!
        </div>
    );
}