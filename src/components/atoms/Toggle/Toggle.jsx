import styles from '@styles/components/atoms/Toggle.module.css';

export function Toggle({ label, checked, onChange }) {
    return (
        <label className={styles.toggle}>
            <span className={styles.toggleLabel}>{label}</span>
            <div className={styles.toggleSwitch}>
                <input
                    type="checkbox"
                    className={styles.toggleInput}
                    checked={checked}
                    onChange={onChange}
                />
                <span className={styles.toggleSlider}></span>
            </div>
        </label>
    );
}
