import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            {/* Banner for the league */}
            <div className="league-banner">
                <h1 className="animated-heading">Welcome to the Fantasy Football League Year 11 🏈</h1>
                <p className="league-tagline">Where Legends Are Made and Sore Fucking Losers Get fucked!</p>
            </div>

            {/* Trophy section */}
            <div className="trophy-section">
                <img src="path_to_trophy_image" alt="League Trophy" className="trophy-image" />
                <p className="trophy-description">
                    Behold the glory of our league trophy 🏆. Who will take it home this year?
                </p>
            </div>
            <div className="welcome-message">
                <p>
                    Welcome, boys! It's been an incredible 11 years of tears, triumphs, and trash talk.
                    We've seen epic wins, devastating losses, and some questionable trades (we won't name names).
                    But hey, we're still here, ready for another season of glory and gut-wrenching moments!
                </p>
                <p>
                    A nice Benji on the line boys $$$$. May your team selections be sharp, your roster decisions ruthless, 
                    and your smack talk unrivaled. Remember, legends aren't born...they're drafted.
                    Let's make this season the one where you finally get that elusive win... or at least not finish last so you don't put your ass on the line(literally).
                </p>
                <p>
                    So, buckle up for another year of fantasy football madness. Who knows? Maybe this is the year you'll actually win!
                    And if not, there's always next year... and the next... for the rest of our lives! The League Forever💯
                </p>
            </div>

            {/* Featured quote or fun fact */}
            <div className="featured-quote">
                <blockquote>
                    "Winning isn't everything, it's the only thing." - Vince Lombardi
                </blockquote>
                <p className="quote-credit">Current Champion: Jacob Hoke - 2023 Season Winner</p>
            </div>
        </div>
    );
};

export default Home;
