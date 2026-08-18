import { PasswordGenerator } from '@components/organisms';
import styles from '@styles/components/templates/GeneratorTemplate.module.css';

export function GeneratorTemplate() {
    return (
        <div className={styles.template}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.logoIcon}>🔐</span>
                    <h1 className={styles.logoText}>Password Generator</h1>
                    <p className={styles.subtitle}>Genera contrasenas seguras y personalizables</p>
                </header>

                <main className={styles.main}>
                    <PasswordGenerator />
                </main>

                <footer className={styles.footer}>
                    <p>Genera contrasenas seguras para proteger tus cuentas</p>
                </footer>
            </div>
        </div>
    );
}
