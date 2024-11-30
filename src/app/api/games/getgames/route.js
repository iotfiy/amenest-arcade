import pool from '../../../lib/db';

export async function GET() {
  try {
    const query = 'SELECT game_id, game_name FROM game';
    const [games] = await pool.execute(query);

    return new Response(JSON.stringify({ games }), { status: 200 });
  } catch (error) {
    console.error('Error fetching games:', error);
    return new Response(
      JSON.stringify({ message: 'Error fetching games', error: error.message }),
      { status: 500 }
    );
  }
}
