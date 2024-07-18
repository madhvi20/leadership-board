import React from 'react';
import { FaUser } from 'react-icons/fa';
import './styles/PlayerEntry.css';

interface PlayerEntryProps {
  username: string;
  score: string;
}

const PlayerEntry: React.FC<PlayerEntryProps> = ({ username, score }) => {
  return (
    <div className="player-entry">
      <FaUser className="icon" />
      <div className="details">
        <span className="username">{username}</span>
        <span className="score">{score}</span>
      </div>
    </div>
  );
};

export default PlayerEntry;
