import pool from '../../../lib/db';

export async function POST(req) {
  try {
    const { arcade_id, coins_required, venue_id, games } = await req.json();

    if (!arcade_id || !coins_required || !venue_id || !games || !Array.isArray(games) || games.length === 0) {
      return new Response(
        JSON.stringify({ message: 'Some fields are missing data or "games" is not an array.' }),
        { status: 400 }
      );
    }

    const arcade_query = 'INSERT INTO arcade (arcade_id, coins_required, venue_id) VALUES (?, ?, ?)';
    await pool.execute(arcade_query, [arcade_id, coins_required, venue_id]);

    const arcade_game_query = 'INSERT INTO arcade_game (arcade_id, game_id) VALUES (?, ?)';
    
    for (const game of games) {
      await pool.execute(arcade_game_query, [arcade_id, game]);
    }

    return new Response(
      JSON.stringify({ message: 'Arcade data and games added successfully' }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding arcade:', error);
    return new Response(
      JSON.stringify({ message: 'Error adding arcade', error: error.message }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Test successful' }),
    { status: 200 }
  );
}