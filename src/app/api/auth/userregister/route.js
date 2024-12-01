import pool from "../../../lib/db";
import bcrypt from "bcrypt";


export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new Response(
        JSON.stringify({
          message: 'Invalid data: "email", "password", and "role" are required',
        }),
        { status: 400 }
      );
    }

    const query = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
    const hashed_password = await bcrypt.hash(password, 10);
    const values = [email, hashed_password, role];

    const [result] = await pool.execute(query, values);

    return new Response(
      JSON.stringify({
        message: "User added successfully",
        insertId: result.insertId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(
      JSON.stringify({ message: "Error inserting data", error: error.message }),
      { status: 500 }
    );
  }
}
