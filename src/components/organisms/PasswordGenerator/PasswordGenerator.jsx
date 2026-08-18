import { useState, useCallback } from 'react';
import { PasswordDisplay, PasswordOptions } from '@components/molecules';
import { generatePassword, calculateStrength } from '@utils/password';
import styles from '@styles/components/organisms/PasswordGenerator.module.css';

export function PasswordGenerator() {
    const [options, setOptions] = useState({
        length: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false
    });
    const [password, setPassword] = useState('');
    const [history, setHistory] = useState([]);

    const generate = useCallback(() => {
        const newPassword = generatePassword(options.length, options);
        setPassword(newPassword);
        setHistory(prev => [newPassword, ...prev].slice(0, 5));
    }, [options]);

    const strength = password ? calculateStrength(password, options) : null;

    return (
        <div className={styles.passwordGenerator}>
            <PasswordDisplay password={password} strength={strength} />
            
            <button className={styles.generateButton} onClick={generate}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
                Generar contrasena
            </button>

            <PasswordOptions options={options} onChange={setOptions} />

            {history.length > 0 && (
                <div className={styles.history}>
                    <h3 className={styles.historyTitle}>Historial</h3>
                    {history.map((pwd, index) => (
                        <div key={index} className={styles.historyItem}>
                            <span className={styles.historyPassword}>{pwd}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
