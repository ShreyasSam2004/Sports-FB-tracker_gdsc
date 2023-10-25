import React, { useEffect, useState } from 'react';
import { fetchNavbarResults } from '../lib/fetch-data';

function Results({data}) {
  const [headToHeadResults, setHeadToHeadResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchData = async () => {
  //   const response = await fetchNavbarResults();
  //   setHeadToHeadResults(response.response);
  //   setIsLoading(false); 
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <div className='bg-white'>
      {/* <h2>Head to Head Results</h2>
      {isLoading ? (
      
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p>Loading...</p>
        </div>
      ) : ( */}
        <ul className="bg-gray-100 p-4 rounded-lg space-y-4">
  {data.response.map((fixture, index) => (
    <li key={fixture.fixture.id || index} className="bg-white p-4 shadow-md rounded-lg">
      <p className="text-lg font-semibold">League: {fixture.league.name}</p>
      <p className="text-gray-600">Season: {fixture.league.season}</p>
      <p className="text-gray-600">Round: {fixture.league.round}</p>
      <p className="text-lg font-semibold">
        Winner: {fixture.teams.home.winner ? fixture.teams.home.name : fixture.teams.away.name}
      </p>
      <p className="text-gray-600">Venue: {fixture.league.country}</p>
      <p className="text-lg font-semibold">
        Full-Time Score: {fixture.goals.home} - {fixture.goals.away}
      </p>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Results;
