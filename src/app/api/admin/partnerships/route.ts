import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const partnerships = await prisma.partnership.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json({ partnerships });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch partnerships' }, { status: 500 });
  }
}
