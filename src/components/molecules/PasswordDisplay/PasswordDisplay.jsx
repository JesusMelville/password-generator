import { CopyButton } from '@components/atoms';
import styles from '@styles/components/molecules/PasswordDisplay.module.css';

export function PasswordDisplay({ password, strength }) {
    if (!password) return null;

    return (
        <div className={styles.passwordDisplay}>
            <div className={styles.passwordWrapper}>
                <span className={styles.password}>{password}</span>
                <CopyButton text={password} />
            </div>
            
            <div className={styles.strengthBar}>
                <div 
                    className={styles.strengthFill}
                    style={{ width: `${strength.percent}%`, backgroundColor: strength.color }}
                ></div>
            </div>
            <span className={styles.strengthLabel} style={{ color: strength.color }}>
                {strength.label}
            </span>
        </div>
    );
}
