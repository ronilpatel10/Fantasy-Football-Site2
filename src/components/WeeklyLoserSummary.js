// src/components/WeeklyLoserSummary.js

import React, { useState, useEffect, useRef } from 'react';

const WeeklyLoserSummary = () => {
    const [week, setWeek] = useState('');
    const [summary, setSummary] = useState('');
    const [savedSummaries, setSavedSummaries] = useState([]);
    const [comments, setComments] = useState({});
    const audioRef = useRef(null);

    const fetchSummaries = async () => {
        const response = await fetch('http://localhost:5001/summaries');
        const data = await response.json();
        setSavedSummaries(data);
    };

    useEffect(() => {
        fetchSummaries();
    }, []);

    const handleSave = async () => {
        if (week && summary) {
            const newSummary = { week, summary, comments: [] };
            await fetch('http://localhost:5001/summaries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSummary),
            });
            setWeek('');
            setSummary('');
            fetchSummaries();
        } else {
            alert('Please enter both a week and a summary.');
        }
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5001/summaries/${id}`, { method: 'DELETE' });
        fetchSummaries();
    };

    const handlePlaySound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => console.error('Error playing audio:', error));
        }
    };

    const handlePauseSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const handleAddComment = async (summaryId) => {
        if (comments[summaryId]) {
            await fetch(`http://localhost:5001/summaries/${summaryId}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ comment: comments[summaryId] }),
            });
            setComments({ ...comments, [summaryId]: '' });
            fetchSummaries();
        } else {
            alert('Please enter a comment.');
        }
    };

    const handleCommentChange = (summaryId, newComment) => {
        setComments({ ...comments, [summaryId]: newComment });
    };

    return (
        <div className="weekly-loser-summary-container">
            <h2>Weekly Loser's Summary</h2>
            <input type="text" placeholder="Enter Week (e.g., Week 1)" value={week} onChange={(e) => setWeek(e.target.value)} />
            <textarea placeholder="Enter Summary" value={summary} onChange={(e) => setSummary(e.target.value)} rows="6" className="summary-textarea" />
            <button onClick={handleSave} className="save-button">Save Summary</button>
            <div className="saved-summaries">
                {savedSummaries.map((item) => (
                    <div key={item.id} className="summary-item">
                        <h3>{item.week}</h3>
                        <p>{item.summary}</p>
                        <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
                        <div className="comments-section">
                            <h4>Comments:</h4>
                            {item.comments && item.comments.map((cmt, idx) => (
                                <p key={idx} className="comment">{cmt}</p>
                            ))}
                            <input type="text" placeholder="Enter your comment" value={comments[item.id] || ''} onChange={(e) => handleCommentChange(item.id, e.target.value)} className="comment-input" />
                            <button onClick={() => handleAddComment(item.id)} className="comment-button">Add Comment</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="audio-controls">
                {/* Use a relative path from the public folder */}
                <audio ref={audioRef} src="/assets/soundtrack.mp3" />
                <button onClick={handlePlaySound} className="play-sound-button">Play</button>
                <button onClick={handlePauseSound} className="pause-sound-button">Pause</button>
            </div>
            <p className="motivation-message">Click the play button for some motivation while you write your summary, you fucking loser! Think about your loss pussy... feel it...</p>
        </div>
    );
};

export default WeeklyLoserSummary;
