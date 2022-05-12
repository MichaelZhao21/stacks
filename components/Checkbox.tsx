import styles from '../styles/checkbox.module.css';

interface CheckboxProps {
    text: string;
    className?: string;
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <label className={`${styles.control} ${styles.controlCheckbox} ${props.className}`}>
            {props.text}
            <input type="checkbox" />
            <div className={styles.controlIndicator}></div>
        </label>
    );
};

export default Checkbox;
