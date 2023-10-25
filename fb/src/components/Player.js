// import React, { useEffect, useState } from 'react';
// import { fetchNavbarPlayer } from '../lib/fetch-data';



// function Player({ data }) {
//   return (
//     <div className="bg-white">
//       <h2 className="text-2xl font-semibold">Players</h2>
//       <div className="mt-4">
//         {data.response.map((x) => ( // Corrected from ={'>'} to =>
//           <div key={x.player.id} className="border p-4 my-4">
//             <div className="flex items-center">
//               <img src={x.player.photo} alt={x.player.name} className="w-20 h-20 rounded-full mr-4" />
//               <div>
//                 <div className="text-lg font-semibold">{x.player.name}</div>
//                 <div className="text-gray-500">{x.team.name}</div>
//                 <div className="text-gray-500">Nationality: {x.player.nationality}</div>
//                 <div className="text-gray-500">Goals: {x.statistics[0].goals.total}</div>
//                 <div className="text-gray-500">Assists: {x.statistics[0].goals.assists}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Player;



