import { NextResponse } from 'next/server';
import { GrossInsuranceService, GetPolicyStatusRequest } from '@/services/grossInsurance';

export async function POST(request: Request) {
    try {
        const body: GetPolicyStatusRequest = await request.json();

        // Validate required fields
        if (!body.order_id) {
            return NextResponse.json(
                { error: -1, message: 'Missing required order_id' },
                { status: 400 }
            );
        }

        const response = await GrossInsuranceService.getPolicyStatus(body);

        return NextResponse.json(response);
    } catch (error) {
        console.error('API Error in get-policy-status:', error);
        return NextResponse.json(
            { error: -1, message: 'Internal Server Error', result: String(error) },
            { status: 500 }
        );
    }
}
