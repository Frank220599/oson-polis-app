import { NextResponse } from 'next/server';
import { GrossInsuranceService, CalcOsagoRequest } from '@/services/grossInsurance';

export async function POST(request: Request) {
    try {
        const body: CalcOsagoRequest = await request.json();

        // Validate required fields
        if (!body.gos_number || !body.tech_sery || !body.tech_number || !body.period_id || !body.number_drivers_id || !body.vehicleTypeId) {
            return NextResponse.json(
                { result: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const response = await GrossInsuranceService.calculateOsago(body);

        return NextResponse.json(response);
    } catch (error) {
        console.error('API Error in calculate:', error);
        return NextResponse.json(
            { result: false, message: 'Internal Server Error', error: String(error) },
            { status: 500 }
        );
    }
}
