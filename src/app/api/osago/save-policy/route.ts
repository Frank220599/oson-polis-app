import { NextResponse } from 'next/server';
import { GrossInsuranceService, SavePolicyRequest } from '@/services/grossInsurance';

export async function POST(request: Request) {
    try {
        const body: SavePolicyRequest = await request.json();

        // Basic validation of main nested objects
        if (!body.details || !body.techPassport || !body.owner || !body.applicant) {
            return NextResponse.json(
                { result: false, message: 'Missing required fields in payload structure' },
                { status: 400 }
            );
        }

        const response = await GrossInsuranceService.savePolicyManual(body);

        return NextResponse.json(response);
    } catch (error) {
        console.error('API Error in save-policy:', error);
        return NextResponse.json(
            { result: false, message: 'Internal Server Error', error: String(error) },
            { status: 500 }
        );
    }
}
