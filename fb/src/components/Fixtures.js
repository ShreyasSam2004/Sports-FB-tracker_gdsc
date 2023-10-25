import React, { useEffect, useState } from 'react';
import { fetchNavbarFixtures } from '../lib/fetch-data';

function Fixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetchNavbarFixtures();
    setFixtures(response.response);
    setIsLoading(false); 
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-white'>
      <h2 className="text-2xl font-semibold">Fixtures</h2>
      <div className="mt-4">
        {isLoading ? (
        
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 m-auto"></div>
            <p className="text-gray-500 mt-2">Loading...</p>
          </div>
        ) : (
          
          fixtures.map((fixture,index) => (
            <div key={fixture.fixture.id||index} className="border p-4 my-2">
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{fixture.teams.home.name}</div>
                <div className="text-lg font-semibold">vs</div>
                <div className="text-lg font-semibold">{fixture.teams.away.name}</div>
              </div>
              <div className="text-gray-500 mt-2">
                Venue: {fixture.fixture.venue.name}, {fixture.fixture.venue.city}
              </div>
              <div className="text-gray-500 mt-2">
                Date: {new Date(fixture.fixture.timestamp * 1000).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Fixtures;
