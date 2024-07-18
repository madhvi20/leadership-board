import React, { useState } from 'react';
import './styles/AddScorePopup.css';

interface AddScorePopupProps {
  onAddScore: (username: string, score: string) => void;
  onClose: () => void;
}

const AddScorePopup: React.FC<AddScorePopupProps> = ({ onAddScore, onClose }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = () => {
    if (username && score) {
      onAddScore(username, score);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Score</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Score (MM:SS:MS)" 
          value={score} 
          onChange={(e) => setScore(e.target.value)} 
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddScorePopup;
