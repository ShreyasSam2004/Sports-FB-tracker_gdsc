import React, { useState, useEffect } from 'react';

const playerCard = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #e2e8f0',
  padding: '1rem',
  margin: '1rem',
};

const playerInfo = {
  flex: 1,
  marginLeft: '3rem',
};

const playerImage = {
  width: '100px', 
  height: 'auto', 
  marginRight: '1rem', 
};

const favoriteButton = {
  backgroundColor: '#68D391',
  padding: '0.5rem',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
};

function Players({ data }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const savedFavorites = localStorage.getItem('favoritePlayers');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
 
    localStorage.setItem('favoritePlayers', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (player) => {
    if (favorites.includes(player.player.id)) {
      setFavorites(favorites.filter((id) => id !== player.player.id));
    } else {
      setFavorites([...favorites, player.player.id]);
    }
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-semibold">Players</h2>
      <div className="mt-4">
        {data.response.map((player, index) => (
          <div key={index} style={playerCard}>
            <img
              src={player.player.photo}
              alt={player.player.name}
              style={playerImage}
            />
            <div style={playerInfo}>
              <div className="text-lg font-semibold">{player.player.name}</div>
              <div className="text-gray-500 mt-2">Team: {player.statistics[0].team.name}</div>
              <div className="text-gray-500">Height: {player.player.height} cm</div>
              <div className="text-gray-500">Weight: {player.player.weight} kg</div>
              <div className="text-gray-500">Age: {player.player.age} years</div>
              <div className="text-gray-500">Nationality: {player.player.nationality}</div>
            </div>
            <div>
              <button
                style={favoriteButton}
                onClick={() => toggleFavorite(player)}
              >
                {favorites.includes(player.player.id) ? 'Remove' : 'Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Players;
