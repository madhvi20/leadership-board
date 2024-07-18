import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import PlayerEntry from './PlayerEntry';
import AddScorePopup from './AddScorePopup';
import { addScore } from '../redux/actions';
import './styles/Leaderboard.css';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.scores);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddScore = (username: string, score: string) => {
    dispatch(addScore({ username, score }));
    setShowPopup(false);
  };

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <button onClick={() => setShowPopup(true)}>Add Score</button>
      <div className="entries">
        {scores.map((entry, index) => (
          <PlayerEntry key={index} username={entry.username} score={entry.score} />
        ))}
      </div>
      {showPopup && <AddScorePopup onAddScore={handleAddScore} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Leaderboard;
