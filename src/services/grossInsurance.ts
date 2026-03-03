export interface CalcWithKbmRequest {
    gos_number: string;
    tech_sery: string;
    tech_number: string;
    period_id: number;
    limited: boolean;
    drivers?: string[]; // PINFLs
}

export interface CalcWithKbmResponse {
    error: number;
    result: boolean;
    message: string;
    response: {
        amount_uzs: number;
        inn: boolean;
    } | null;
}

export interface CalcOsagoRequest {
    gos_number: string;
    tech_sery: string;
    tech_number: string;
    period_id: number;
    number_drivers_id: number;
    vehicleTypeId: number;
}

export interface CalcOsagoResponse {
    result: boolean;
    message: string;
    response: {
        amount_uzs: number;
    } | null;
}

export interface SavePolicyRequest {
    details: {
        start_date: string;
        period_id: number;
        number_drivers_id: number;
        phone_number: string;
        amount_uzs: number;
    };
    techPassport: {
        govNumber: string;
        tech_sery: string;
        tech_number: string;
    };
    owner: {
        person: {
            pinfl?: string;
            birthdate?: string;
            pass_seria: string;
            pass_number: string;
        };
    };
    applicant: {
        pinfl?: string;
        birthdate?: string;
        pass_seria: string;
        pass_number: string;
        is_driver: boolean;
        licenseSeria?: string;
        licenseNumber?: string;
        licenseIssueDate?: string;
        relative: number;
    };
    drivers?: Array<{
        pinfl?: string;
        birthdate?: string;
        pass_seria: string;
        pass_number: string;
        licenseSeria?: string;
        licenseNumber?: string;
        licenseIssueDate?: string;
        relative: number;
    }>;
}

export interface SavePolicyResponse {
    result: boolean;
    message: string;
    response: {
        amount_uzs: number;
        order_id: number;
        click?: {
            status: number;
            url: string;
            params: any;
        };
        payme?: {
            status: number;
            url: string;
            params: any;
        };
    } | null;
}

export interface GetPolicyStatusRequest {
    order_id: number;
}

export interface GetPolicyStatusResponse {
    error: number;
    message: string;
    result?: {
        gos_number: string;
        policy_number: string;
        begin_date: string;
        end_date: string;
        pdf_url: string;
    };
}

export class GrossInsuranceService {
    private static getBaseUrl(): string {
        return process.env.GROSS_API_URL || 'https://sandbox.gross.uz';
    }

    private static getAuthHeaders(): HeadersInit {
        const phone = process.env.GROSS_API_PHONE || '';
        const password = process.env.GROSS_API_PASSWORD || '';
        const credentials = Buffer.from(`${phone}:${password}`).toString('base64');

        console.log('[Auth Debug] URL:', this.getBaseUrl());
        console.log('[Auth Debug] Phone:', phone);
        console.log('[Auth Debug] Password parsed from ENV:', password);
        console.log('[Auth Debug] Generated Base64:', credentials);

        return {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json',
        };
    }

    static async calculateWithKbm(data: CalcWithKbmRequest): Promise<CalcWithKbmResponse> {
        console.log('[Gross API Request] POST /ru/osago-gross/calc-with-kbm', JSON.stringify(data, null, 2));
        const response = await fetch(`${this.getBaseUrl()}/ru/osago-gross/calc-with-kbm`, {
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify(data),
        });

        const json = await response.json();
        console.log('[Gross API Response] POST /ru/osago-gross/calc-with-kbm', JSON.stringify(json, null, 2));
        return json;
    }

    static async calculateOsago(data: CalcOsagoRequest): Promise<CalcOsagoResponse> {
        console.log('[Gross API Request] POST /ru/osago-gross/get-calc-osago', JSON.stringify(data, null, 2));
        const response = await fetch(`${this.getBaseUrl()}/ru/osago-gross/get-calc-osago`, {
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify(data),
        });

        const json = await response.json();
        console.log('[Gross API Response] POST /ru/osago-gross/get-calc-osago', JSON.stringify(json, null, 2));
        return json;
    }

    static async savePolicyManual(data: SavePolicyRequest): Promise<SavePolicyResponse> {
        console.log('[Gross API Request] POST /ru/osago-gross/save-policy-manual', JSON.stringify(data, null, 2));
        const response = await fetch(`${this.getBaseUrl()}/ru/osago-gross/save-policy-manual`, {
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify(data),
        });

        const json = await response.json();
        console.log('[Gross API Response] POST /ru/osago-gross/save-policy-manual', JSON.stringify(json, null, 2));
        return json;
    }

    static async getPolicyStatus(data: GetPolicyStatusRequest): Promise<GetPolicyStatusResponse> {
        console.log('[Gross API Request] POST /ru/osago-gross/get-policy-status', JSON.stringify(data, null, 2));
        const response = await fetch(`${this.getBaseUrl()}/ru/osago-gross/get-policy-status`, {
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify(data),
        });

        const json = await response.json();
        console.log('[Gross API Response] POST /ru/osago-gross/get-policy-status', JSON.stringify(json, null, 2));
        return json;
    }
}
