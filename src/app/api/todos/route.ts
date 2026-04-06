import { NextResponse } from 'next/server';
import { todoData } from '@/data/todoData';

// GET接口：获取todolist数据
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: todoData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '获取数据失败' },
      { status: 500 }
    );
  }
}
