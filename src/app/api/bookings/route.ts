import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Ensure the package exists or create a dummy one if we only have the name
    const packageName = data.packageId; // This is actually the package name from the form
    
    let packageRecord = await prisma.package.findFirst({
      where: { name: packageName }
    });
    
    if (!packageRecord) {
      packageRecord = await prisma.package.create({
        data: {
          name: packageName,
          description: 'Auto-generated package',
          includes: 'Standard items',
          targetAudience: 'General',
          price: '0'
        }
      });
    }

    const booking = await prisma.booking.create({
      data: {
        customerName: data.customerName,
        whatsapp: data.whatsapp,
        email: data.email,
        eventDate: new Date(data.eventDate),
        eventTime: data.eventTime,
        location: data.location,
        eventType: data.eventType,
        guestCount: data.guestCount,
        packageId: packageRecord.id,
        notes: data.notes || '',
        status: 'Pending Confirmation'
      }
    });

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ success: false, error: 'Failed to create booking' }, { status: 500 });
  }
}
