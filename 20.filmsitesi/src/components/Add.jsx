import React, { useContext, useState } from 'react';
import { ResultCart } from './ResultCart';

export const Add = () => {



    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const API_KEY = "c0fc2563d552410040760eb03ffd1c23"; // Ortam değişkeni yerine doğrudan API anahtarı

    function onChange(e) {
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.results) {
                    setResults(data.results); // Arama sonuçlarını set ediyoruz
                }
            });
    }

    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" alt="Movie Background" />

                    <div className="titles">
                        <h1>HOŞGELDİNİZ</h1>
                        <h2>Keşfedilecek milyonlarca film, TV şovu ve kişi. Şimdi keşfedin.</h2>

                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={query}
                            onChange={onChange}
                            placeholder='Film, Dizi, Kişi ara...'
                        />
                    </div>
                </div>
                <div className="results">
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCart movie={movie} />
                                    <h3>{movie.title}</h3>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};