const CHARSETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export function generatePassword(length, options) {
    let charset = '';
    if (options.uppercase) charset += CHARSETS.uppercase;
    if (options.lowercase) charset += CHARSETS.lowercase;
    if (options.numbers) charset += CHARSETS.numbers;
    if (options.symbols) charset += CHARSETS.symbols;

    if (!charset) charset = CHARSETS.lowercase;

    let password = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
        password += charset[array[i] % charset.length];
    }

    return password;
}

export function calculateStrength(password, options) {
    let score = 0;
    const length = password.length;

    if (length >= 12) score += 2;
    else if (length >= 8) score += 1;

    let typesCount = 0;
    if (options.uppercase) typesCount++;
    if (options.lowercase) typesCount++;
    if (options.numbers) typesCount++;
    if (options.symbols) typesCount++;

    score += typesCount;

    if (score <= 2) return { level: 'weak', label: 'Debil', color: '#ef4444', percent: 25 };
    if (score <= 4) return { level: 'medium', label: 'Media', color: '#f59e0b', percent: 50 };
    if (score <= 5) return { level: 'strong', label: 'Fuerte', color: '#10b981', percent: 75 };
    return { level: 'very-strong', label: 'Muy fuerte', color: '#06b6d4', percent: 100 };
}
