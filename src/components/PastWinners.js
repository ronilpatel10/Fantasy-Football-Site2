// src/components/PastWinners.js

import React from 'react';

const PastWinners = () => {
    const winners = [
        { year: 2012, winner: 'John Doe' },
        { year: 2013, winner: 'Jane Smith' },
        { year: 2014, winner: 'Michael Johnson' },
        { year: 2015, winner: 'Emily Davis' },
        { year: 2016, winner: 'Chris Brown' },
        { year: 2017, winner: 'Sarah Wilson' },
        { year: 2018, winner: 'David Martinez' },
        { year: 2019, winner: 'Laura Adams' },
        { year: 2020, winner: 'James White' },
        { year: 2021, winner: 'Olivia Clark' },
        { year: 2022, winner: 'Ethan Lewis' },
        { year: 2023, winner: 'Mia Robinson' }
    ];

    return (
        <div className="past-winners-container">
            <h2>Past Winners</h2>
            <ul className="winners-list">
                {winners.map((winner, index) => (
                    <li key={index} className="winner-item">
                        <span className="winner-year">{winner.year}:</span> {winner.winner}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PastWinners;
