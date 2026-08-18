import { Slider, Toggle } from '@components/atoms';
import styles from '@styles/components/molecules/PasswordOptions.module.css';

export function PasswordOptions({ options, onChange }) {
    const handleChange = (key, value) => {
        onChange({ ...options, [key]: value });
    };

    return (
        <div className={styles.passwordOptions}>
            <Slider
                label="Longitud"
                value={options.length}
                onChange={(value) => handleChange('length', value)}
                min={4}
                max={64}
            />

            <div className={styles.toggles}>
                <Toggle
                    label="Mayusculas (A-Z)"
                    checked={options.uppercase}
                    onChange={() => handleChange('uppercase', !options.uppercase)}
                />
                <Toggle
                    label="Minusculas (a-z)"
                    checked={options.lowercase}
                    onChange={() => handleChange('lowercase', !options.lowercase)}
                />
                <Toggle
                    label="Numeros (0-9)"
                    checked={options.numbers}
                    onChange={() => handleChange('numbers', !options.numbers)}
                />
                <Toggle
                    label="Simbolos (!@#$)"
                    checked={options.symbols}
                    onChange={() => handleChange('symbols', !options.symbols)}
                />
            </div>
        </div>
    );
}
