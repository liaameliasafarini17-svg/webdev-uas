import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const partnership = await prisma.partnership.create({
      data: {
        name: data.name,
        brandName: data.brandName,
        whatsapp: data.whatsapp,
        email: data.email,
        partnershipType: data.partnershipType,
        location: data.location,
        description: data.description || ''
      }
    });

    return NextResponse.json({ success: true, partnership });
  } catch (error) {
    console.error('Error creating partnership:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit partnership request' }, { status: 500 });
  }
}
