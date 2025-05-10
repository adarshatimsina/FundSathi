import { query } from '../../../lib/db';

export async function GET(req) {
  try {
    const result = await query('SELECT NOW()');
    return new Response(JSON.stringify({ time: result.rows[0] }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Database connection failed' }),
      { status: 500 }
    );
  }
}
