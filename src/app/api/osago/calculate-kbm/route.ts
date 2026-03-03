import { NextResponse } from 'next/server';
import { GrossInsuranceService, CalcWithKbmRequest } from '@/services/grossInsurance';

export async function POST(request: Request) {
    try {
        const body: CalcWithKbmRequest = await request.json();

        // Validate required fields (basic validation, you can use Zod for more robust validation)
        if (!body.gos_number || !body.tech_sery || !body.tech_number || !body.period_id) {
            return NextResponse.json(
                { result: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const response = await GrossInsuranceService.calculateWithKbm(body);

        // Forward the response as received from Gross Insurance API
        return NextResponse.json(response);
    } catch (error) {
        console.error('API Error in calculate-kbm:', error);
        return NextResponse.json(
            { result: false, message: 'Internal Server Error', error: String(error) },
            { status: 500 }
        );
    }
}
