import pool from '../../lib/db';
import bcrypt from 'bcrypt';
import mysql from 'mysql2'
export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log(email, password)

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Invalid data: "email" and "password" are required' }),
        { status: 400 }
      );
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await pool.execute(query, [email]);

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 401 } 
      );
    }

    const user = rows[0]; 
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 401 } 
      );
    }

    const { password: _, ...userData } = user; 
    return new Response(
      JSON.stringify({ message: 'Login successful', user: userData }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error logging in user:', error);
    return new Response(
      JSON.stringify({ message: 'Error logging in user', error: error.message }),
      { status: 500 }
    );
  }
}
