import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetchJokes();
    }, []);

    const fetchJokes = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
            
            const data = await response.json();
            setJokes(data.jokes);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div>
                <h1 className="text-center mb-4">Jokes</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Joke</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jokes.map((joke, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{joke.joke}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Homepage;
