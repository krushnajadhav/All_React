
import styles from './Display.module.css';
const Display = ({calVal}) => {
    return (
        <input readOnly value={calVal} className={styles.disaplay} type='text'/>
    );
}

export default Display;  