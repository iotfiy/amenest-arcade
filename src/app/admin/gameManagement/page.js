'use client'

import GameList from '@/components/admin/GameList'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Page() {
    const [game, setGame] = useState("");  // Track game name input
    const [gameList, setGameList] = useState([]);  // Track list of games

    const title = "Game's List";

    // Fetch the games when the component mounts
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/games/getgames/');  // API to fetch games
                setGameList(response.data.games);  // Update the game list state
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };
        fetchGames();
    }, []);  // Empty dependency array, so it runs only once on mount

    // Handle form submission to add a new game
    async function handleGameSubmit(e) {
        e.preventDefault();
        if (!game) {
            console.error('Game name is required');
            return;  // Prevent sending request if game name is empty
        }

        try {
            // Send POST request to add the new game
            await axios.post('http://localhost:3000/api/games/addgame/', {
                game_name: game,
            });

            // After successful addition, fetch the updated game list
            const response = await axios.get('http://localhost:3000/api/games/getgames/');
            setGameList(response.data.games);  // Update the game list with the latest data
            setGame("");  // Clear the input field
            alert('Game added successfully!');
        } catch (error) {
            alert('Error: ' + error.response?.data?.error || error.message);
        }
    }

    return (
        <div>
            <h1 className='text-xl font-bold my-3'>Game Management</h1>

            <div className='flex md:flex-row gap-2 flex-col items-center justify-around'>
                <GameList gameList={gameList} title={title} />

                <form
                    className="sm:ml-[20px] flex flex-col items-center justify-center space-y-6 mx-2 w-[245px] sm:w-[400px] md:w-[500px] rounded-lg shadow-md bg-white p-6"
                    onSubmit={handleGameSubmit}
                >
                    {/* Form Title */}
                    <h1 className="text-start w-full text-2xl font-bold text-custom-blue mb-4">
                        Add Game
                    </h1>

                    {/* Game Name Input Field */}
                    <div className="grid grid-cols-3 items-center gap-4 w-full">
                        <label htmlFor="game1" className="text-left font-medium text-gray-700">
                            Game Name
                        </label>
                        <input
                            type="text"
                            id="game1"
                            name="game1"
                            className="p-2 border border-black focus:outline-none rounded-full col-span-2"
                            onChange={(e) => setGame(e.target.value)}
                            value={game}
                            placeholder="Enter Text"
                        />
                    </div>

                    <div className="flex justify-end w-full space-x-4">
                        <button
                            type="submit"
                            className="bg-custom-headblue text-white py-1 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="text-red-500 py-1 px-6 rounded-xl border border-black hover:border-red-600 hover:text-black"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page;
