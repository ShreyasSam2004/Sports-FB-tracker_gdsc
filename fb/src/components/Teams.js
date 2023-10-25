import React, { useState, useEffect } from 'react';

function Teams({ data }) {
  const [favorites, setFavorites] = useState([]);
  
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteTeams')) || [];
    setFavorites(storedFavorites);
  }, []);

  
  const toggleFavorite = (teamId) => {
    if (favorites.includes(teamId)) {
      
      setFavorites(favorites.filter((id) => id !== teamId));
    } else {
      
      setFavorites([...favorites, teamId]);
    }
  };

  
  useEffect(() => {
    localStorage.setItem('favoriteTeams', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className='bg-white'>
      <h2 className="text-2xl font-semibold">Teams</h2>
      <div className="mt-4">
        {data.response.map((team, index) => (
          <div key={index} className="border p-4 my-2 flex justify-between items-center">
            <div>
              <div className="text-lg font-semibold">{team.team.name}</div>
              <div className="text-gray-500">Country: {team.team.country}</div>
            </div>
            <div>
              <img src={team.team.logo} alt={team.team.name} className="mt-2" />
            </div>
            <button
              onClick={() => toggleFavorite(team.team.id)}
              className={`px-3 py-2 ml-2 rounded-full ${
                favorites.includes(team.team.id)
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {favorites.includes(team.team.id) ? 'Favorited' : 'Favorite'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
