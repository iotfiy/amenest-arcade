import pool from '../../../lib/db';

export async function POST(req) {
  try {
    const { arcade_id, coins_required, venue_id, games } = await req.json();

    if (!arcade_id || !coins_required || !venue_id || !games) {
      return new Response(
        JSON.stringify({ message: 'Some fields are missing data.' }),
        { status: 400 }
      );
    }

    const query = 'INSERT INTO arcade (arcade_id, coins_required, venue_id, games) VALUES (?, ?, ?, ?)';
    await pool.execute(query, [arcade_id, coins_required, venue_id, games]);

    return new Response(JSON.stringify({ message: 'Arcade added successfully' }), { status: 201 });
  } catch (error) {
    console.error('Error adding arcade:', error);
    return new Response(
      JSON.stringify({ message: 'Error adding arcade', error: error.message }),
      { status: 500 }
    );
  }
}