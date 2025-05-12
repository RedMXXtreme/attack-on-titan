import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AttackonTitanSeason1 from './Attack on Titan Season1.js';
import AttackonTitanSeason2 from './Attack on Titan Season2.js';
import AttackonTitanSeason3 from './Attack on Titan Season3.js';
import AttackonTitanSeason4 from './Attack on Titan Season4.js';
import AttackonTitanFinalSeason from './Attack on Titan Final Season.js';

function AppWrapper() {
  return (
    <Router>
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center text-white">Seasons</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <button
              className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48 sm:w-40 text-white"
              style={{
                backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.zvyutMzZ5u0vDoSK5Kr5LAHaLP?cb=iwp1&w=494&h=750&rs=1&pid=ImgDetMain')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              Season 1
            </button>
          </Link>
          <Link to="/season2">
            <button
              className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48 sm:w-40 text-white"
              style={{
                backgroundImage: "url('https://d.player.one/en/full/155284/attack-titan-season-2-coming-funimation.jpg?w=736&f=ec9892fcec929dbfb46849c391c34ecd')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              Season 2
            </button>
          </Link>
          <Link to="/season3">
            <button
              className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48 sm:w-40 text-white"
              style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp8778176.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              Season 3
            </button>
          </Link>
          <Link to="/season4">
            <button
              className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48 sm:w-40 text-white"
              style={{
                backgroundImage: "url('https://static1.animekai.to/83/i/4/9a/6766499bd3723.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              Season 4
            </button>
          </Link>
          <Link to="/finalseason">
            <button
              className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48 sm:w-40 text-white"
              style={{
                backgroundImage: "url('https://static1.animekai.to/a0/i/f/68/6766493f4e009.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              Final Season
            </button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<AttackonTitanSeason1 />} />
        <Route path="/season2" element={<AttackonTitanSeason2 />} />
        <Route path="/season3" element={<AttackonTitanSeason3 />} />
        <Route path="/season4" element={<AttackonTitanSeason4 />} />
        <Route path="/finalseason" element={<AttackonTitanFinalSeason />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;