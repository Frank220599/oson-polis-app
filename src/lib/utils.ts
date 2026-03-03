export const formatTechPassport = (value: string): string => {
    const raw = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    let formatted = raw;
    if (raw.length > 3) {
        formatted = raw.slice(0, 3) + ' ' + raw.slice(3);
    }
    return formatted;
};

export const sanitizeNumber = (value: string, maxLength: number): string => {
    return value.replace(/\D/g, '').slice(0, maxLength);
};
