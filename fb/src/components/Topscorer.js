import React, { useEffect, useState } from 'react';
import { fetchNavbarTopScorer } from '../lib/fetch-data';

function Topscorer({data}) {
//   const [topScorers, setTopScorers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const response = await fetchNavbarTopScorer();
//       if (response.error) {
//         throw new Error(response.error); // Handle API-specific errors
//       }
//       setTopScorers(response.response);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       setIsLoading(false); // Set loading to false in case of an error
//     }
//   };


  return (
    <div>
      <h2>Top Scorers</h2>
      {/* {isLoading ? (
        
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p>Loading...</p>
        </div>
      ) : ( */}
        <ul className="space-y-4">
  {data.response.map((playerData) => (
    <li key={playerData.player.id} className="bg-gray-100 p-4 rounded-md">
      <div className="flex items-center">
        <img src={playerData.player.photo} alt={playerData.player.name} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <p className="font-semibold">{playerData.player.name}</p>
          <p>Goals: {playerData.statistics[0]?.goals?.total || 'N/A'}</p>
          {/* <p>Team: {playerData.player.team?.name || 'N/A'}</p> */}
        </div>
      </div>
    </li>
  ))}
</ul>


      )
    </div>
  );
}

export default Topscorer;
