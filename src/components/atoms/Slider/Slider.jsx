import styles from '@styles/components/atoms/Slider.module.css';

export function Slider({ label, value, onChange, min = 1, max = 100 }) {
    return (
        <div className={styles.slider}>
            <div className={styles.sliderHeader}>
                <label className={styles.sliderLabel}>{label}</label>
                <span className={styles.sliderValue}>{value}</span>
            </div>
            <input
                type="range"
                className={styles.sliderInput}
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                style={{
                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${(value - min) / (max - min) * 100}%, var(--bg-tertiary) ${(value - min) / (max - min) * 100}%, var(--bg-tertiary) 100%)`
                }}
            />
        </div>
    );
}
