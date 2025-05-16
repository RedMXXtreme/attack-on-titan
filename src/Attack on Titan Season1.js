import React, { useState, useEffect } from "react";
import { FaRandom, FaSearch } from "react-icons/fa";
const AttackonTitanSeason1 = () => {
  // === Attack on Titan Season 1 Episodes ===
  const videos = [
    { id: 1, title: "To You, in 2000 Years: The Fall of Shiganshina", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-1", HD2: "https://megaplay.buzz/stream/s-2/3303/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-1", HDSUB2: "https://megaplay.buzz/stream/s-2/3303/sub" },
    { id: 2, title: "That Day: The Fall of Shiganshina", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-2", HD2: "https://megaplay.buzz/stream/s-2/3304/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-2", HDSUB2: "https://megaplay.buzz/stream/s-2/3304/sub" },
    { id: 3, title: "A Dim Light Amid Despair: Humanity's Comeback, Part 1", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-3", HD2: "https://megaplay.buzz/stream/s-2/3305/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-3", HDSUB2: "https://megaplay.buzz/stream/s-2/3305/sub" },
    { id: 4, title: "The Night of the Closing Ceremony: Humanity's Comeback, Part 2", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-4", HD2: "https://megaplay.buzz/stream/s-2/3306/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-4", HDSUB2: "https://megaplay.buzz/stream/s-2/3306/sub" },
    { id: 5, title: "First Battle: The Struggle for Trost, Part 1", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-5", HD2: "https://megaplay.buzz/stream/s-2/3307/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-5", HDSUB2: "https://megaplay.buzz/stream/s-2/3307/sub" },
    { id: 6, title: "The World the Girl Saw: The Struggle for Trost, Part 2", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-6", HD2: "https://megaplay.buzz/stream/s-2/3308/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-6", HDSUB2: "https://megaplay.buzz/stream/s-2/3308/sub" },
    { id: 7, title: "Small Blade: The Struggle for Trost, Part 3", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-7", HD2: "https://megaplay.buzz/stream/s-2/3309/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-7", HDSUB2: "https://megaplay.buzz/stream/s-2/3309/sub" },
    { id: 8, title: "I Can Hear His Heartbeat: The Struggle for Trost, Part 4", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-8", HD2: "https://megaplay.buzz/stream/s-2/3310/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-8", HDSUB2: "https://megaplay.buzz/stream/s-2/3310/sub" },
    { id: 9, title: "Whereabouts of His Left Arm: The Struggle for Trost, Part 5", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-9", HD2: "https://megaplay.buzz/stream/s-2/3311/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-9", HDSUB2: "https://megaplay.buzz/stream/s-2/3311/sub" },
    { id: 10, title: "Response: The Struggle for Trost, Part 6", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-10", HD2: "https://megaplay.buzz/stream/s-2/3312/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-10", HDSUB2: "https://megaplay.buzz/stream/s-2/3312/sub" },
    { id: 11, title: "Idol: The Struggle for Trost, Part 7", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-11", HD2: "https://megaplay.buzz/stream/s-2/3313/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-11", HDSUB2: "https://megaplay.buzz/stream/s-2/3313/sub" },
    { id: 12, title: "Wound: The Struggle for Trost, Part 8", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-12", HD2: "https://megaplay.buzz/stream/s-2/3314/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-12", HDSUB2: "https://megaplay.buzz/stream/s-2/3314/sub" },
    { id: 13, title: "Primal Desire: The Struggle for Trost, Part 9", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-13", HD2: "https://megaplay.buzz/stream/s-2/3315/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-13", HDSUB2: "https://megaplay.buzz/stream/s-2/3315/sub" },
    { id: 14, title: "Can't Look into His Eyes Yet: Eve of the Counterattack, Part 1", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-14", HD2: "https://megaplay.buzz/stream/s-2/3316/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-14", HDSUB2: "https://megaplay.buzz/stream/s-2/3316/sub" },
    { id: 15, title: "Special Operations Squad: Eve of the Counterattack, Part 2", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-15", HD2: "https://megaplay.buzz/stream/s-2/3317/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-15", HDSUB2: "https://megaplay.buzz/stream/s-2/3317/sub" },
    { id: 16, title: "What Needs to be Done Now: Eve of the Counterattack, Part 3", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-16", HD2: "https://megaplay.buzz/stream/s-2/3318/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-16", HDSUB2: "https://megaplay.buzz/stream/s-2/3318/sub" },
    { id: 17, title: "Female Titan: The 57th Exterior Scouting Mission, Part 1", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-17", HD2: "https://megaplay.buzz/stream/s-2/3319/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-17", HDSUB2: "https://megaplay.buzz/stream/s-2/3319/sub" },
    { id: 18, title: "Forest of Giant Trees: The 57th Exterior Scouting Mission, Part 2", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-18", HD2: "https://megaplay.buzz/stream/s-2/3320/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-18", HDSUB2: "https://megaplay.buzz/stream/s-2/3320/sub" },
    { id: 19, title: "Bite: The 57th Exterior Scouting Mission, Part 3", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-19", HD2: "https://megaplay.buzz/stream/s-2/3321/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-19", HDSUB2: "https://megaplay.buzz/stream/s-2/3321/sub" },
    { id: 20, title: "Erwin Smith: The 57th Exterior Scouting Mission, Part 4", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-20", HD2: "https://megaplay.buzz/stream/s-2/3322/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-20", HDSUB2: "https://megaplay.buzz/stream/s-2/3322/sub" },
    { id: 21, title: "Crushing Blow: The 57th Exterior Scouting Mission, Part 5", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-21", HD2: "https://megaplay.buzz/stream/s-2/3323/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-21", HDSUB2: "https://megaplay.buzz/stream/s-2/3323/sub" },
    { id: 22, title: "The Defeated: The 57th Exterior Scouting Mission, Part 6", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-22", HD2: "https://megaplay.buzz/stream/s-2/3324/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-22", HDSUB2: "https://megaplay.buzz/stream/s-2/3324/sub" },
    { id: 23, title: "Smile: Assault on Stohess, Part 1", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-23", HD2: "https://megaplay.buzz/stream/s-2/3325/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-23", HDSUB2: "https://megaplay.buzz/stream/s-2/3325/sub" },
    { id: 24, title: "Mercy: Assault on Stohess, Part 2", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-24", HD2: "https://megaplay.buzz/stream/s-2/3326/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-24", HDSUB2: "https://megaplay.buzz/stream/s-2/3326/sub" },
    { id: 25, title: "Wall: Assault on Stohess, Part 3", HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-dub-episode-25", HD2: "https://megaplay.buzz/stream/s-2/3327/dub", HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-episode-25", HDSUB2: "https://megaplay.buzz/stream/s-2/3327/sub" },
  ];

  const ranvideo = [
    { link: "https://animeflux-deathnote.pages.dev/"},
    { link: "https://animeflux-shingeki-no-kyojin.pages.dev/"},
    { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-s01.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-s02.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-0.pages.dev/"},
    { link:"https://animeflux-puka-puka-juju.pages.dev/"},
    { link: "https://animeflux-solo-leveling-s01.pages.dev/"}, // Example random link
    { link: "https://animeflux-sololeveling-arise-from-the-shadow-s02.pages.dev/"}, // Example random link

  // Add more random links here
    
  ];

 const searchLinks = {
    "Death Note": { link: "https://animeflux-death-note", img: "https://static1.animekai.to/7e/i/f/bf/67664a569f3a5@100.jpg", year: "2006", type: "TV", rating: "R" },
    "Attack on Titan": { link: "https://animeflux-attack-on-titan.pages.dev/", img: "https://static1.animekai.to/45/i/b/79/67664a45311fc.jpg", year: "2013", type: "TV", rating: "R" },
    "Demon Slayer: Kimetsu no Yaiba": { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/", img: "https://static1.animekai.to/70/i/5/79/67664a9bdad80@300.jpg", year: "2019", type: "TV", rating: "PG-R" },
    "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/", img: "https://static1.animekai.to/78/i/0/44/67664a81b5dd4@300.jpg", year: "2021", type: "Movie", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/", img: "https://static1.animekai.to/d3/i/e/9c/67664a00ed86e@300.jpg", year: "2021", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/", img: "https://static1.animekai.to/28/i/d/60/67664938b51c4@300.jpg", year: "2023", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/", img: "https://static1.animekai.to/d1/i/d/30/67664a1707993@300.jpg", year: "2024", type: "TV", rating: "PG-R"},
    "Hunter x Hunter (2011)": {link:"", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2011", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S1": {link:"https://animeflux-jujutsukaisen-s01.pages.dev/", img: "https://static1.animekai.to/43/i/f/d2/67664a638ddda@100.jpg", year: "2020", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S2": {link:"https://animeflux-jujutsukaisen-s02.pages.dev/", img: "https://static1.animekai.to/44/i/9/b8/6766493099d89@100.jpg", year: "2021", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen 0": {link:"", img: "https://static1.animekai.to/8d/i/d/0f/67664a6c4ae80@100.jpg", year: "2022", type: "TV", rating: "PG-13"},
    "Puka Puka Juju": {link:"", img: "https://static1.animekai.to/a5/i/b/76/67664a0d0aeb9@100.jpg", year: "2023", type: "TV", rating: "PG-13"},
    "Sakamot Days": { link:"https://animeflux-sakamoto-days.pages.dev/", img: "https://static1.animekai.to/09/i/e/90/6782958e57c23.jpg", year: "2025", type: "TV", rating: "R" },
    "Tower of god s01": { link:"https://animeflux-tower-of-god-s01.pages.dev/", img: "https://static1.animekai.to/ca/i/8/0a/67664a6d3f5a2.jpg", year: "2020", type: "TV", rating: "PG-13" },
    "Tower of god s02": { link:"https://animeflux-tower-of-god-s02.pages.dev/", img: "https://static1.animekai.to/3c/i/b/05/676649ad3a95d.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "Wind Breaker": { link:"https://animeflux-windbreaker.pages.dev/", img: "https://static1.animekai.to/bd/i/5/4c/676649ee7430d.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "One Punch man s01": { link:"https://animeflux-one-punch-man-s01.pages.dev/", img: "https://static1.animekai.to/db/i/0/b6/67664ab866dbf.jpg", year: "2015", type: "TV", rating: "R" },
    "One Punch man s02": { link:"https://animeflux-one-punch-man-s02.pages.dev/", img: "https://static1.animekai.to/8d/i/b/f4/676649c3e82f2.jpg", year: "2019", type: "Tv", rating: "R" },
    "Ao Ashi": { link:"https://animeflux-ao-ashi.pages.dev/", img: "https://static1.animekai.to/03/i/3/1f/6766494451516.jpg", year: "2022", type: "TV", rating: "PG-13" },
    "Blue Lock s01": { link:"https://animeflux-bluelock-s01.pages.dev/", img: "https://static1.animekai.to/34/i/3/bd/67664ab2e7771.jpg", year: "2022", type: "TV", rating: "PG-13" },
    "Blue Lock s02": { link:"devhttps://animeflux-bluelock-s02.pages./", img: "https://static1.animekai.to/56/i/d/36/67664aa7a69dd.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "God of high school": { link:"/https://animeflux-god-of-high-school.pages.dev", img: "https://static1.animekai.to/4d/i/1/d8/67664984e84a9.jpg", year: "2020", type: "TV", rating: "PG-13" },
    "Psyco Pass 1": { link:"https://animeflux-psyco-pass-2-first-inspector.pages.dev/", img: "https://static1.animekai.to/f1/i/f/ba/67664970838b9.jpg", year: "2012", type: "TV", rating: "R" },
    "Code Geass: Lelouch of the Rebellion": { link:"https://animeflux-code-geass-lelouch-of-the-rebellion.pages.dev/", img: "https://static1.animekai.to/4d/i/3/52/67664928cd5ca.jpg", year: "2006", type: "TV", rating: "R" },
    "That Time I Got Reincarnated as a Slime S01": { link:"https://animeflux-that-time-i-got-reicarnated-as-slime-s01.pages.dev/", img:"https://static1.animekai.to/12/i/9/08/676649d245eb3.jpg", year: "2018", type: "TV", rating: "Pg-13" },
    
  };

  const [currentVideo, setCurrentVideo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedserver, setSelectedServer] = useState([]);
  const [toggle, setToggle] = useState();
  const [episodeRange, setEpisodeRange] = useState("001-25");
  const [episodeSearch, setEpisodeSearch] = useState("");
  const [showTitles, setShowTitles] = useState(false); // New state for toggling titles

  // Set default video and server on initial render
  React.useEffect(() => {
    const defaultVideo = videos.find(video => video.id === 1);
    setCurrentVideo(defaultVideo.HDSUB1);
    setSelectedServer("HDSUB1");
    setToggle(1);
  }, []);


  
  const movies = Object.keys(searchLinks);


  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * ranvideo.length);
    window.location.href = ranvideo[randomIndex].link;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 0) {
      const results = movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchLinks[searchQuery]) {
      window.location.href = searchLinks[searchQuery];
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    };

    const handleContextMenu = (e) => {
        e.preventDefault(); // Disable right-click context menu
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleEpisodetoggle = (id) => {
    setToggle((prev) => {
      if (prev === id) {
        return id; // Prevent toggling out
      } else {
        const selectedVideo = videos.find(video => video.id === id);
        if (selectedserver === "HDSUB1") {
          setCurrentVideo(selectedVideo.HDSUB1);
        } else if (selectedserver === "HDSUB2") {
          setCurrentVideo(selectedVideo.HDSUB2);
        } else if (selectedserver === "HD1") {
          setCurrentVideo(selectedVideo.HD1);
        } else {
          setCurrentVideo(selectedVideo.HD2);
        } 
        return id;
      }
    });
  };

  return (
    
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
    <nav className="bg-gray-900 p-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
      <a href="/">
      <span className="text-orange-500 text-2xl font-bold">Anime Flux</span>
      </a>

      <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white p-2">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search for a show..."
            className="w-full px-3 py-2 outline-none text-black"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {filteredMovies.length > 0 && (
          <ul className="absolute w-full bg-gray-800 border border-gray-600 mt-1 rounded-lg shadow-lg overflow-hidden">
            {filteredMovies.map((movie, index) => (
              <li
                key={index}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => window.location.href = searchLinks[movie].link}
                onKeyDown={handleKeyPress}
                
              >
                <img src={searchLinks[movie].img} alt={movie} className="w-12 h-12 rounded-md mr-3" />
                <div>
                  <p className="text-white font-bold">{movie}</p>
                  <p className="text-gray-400 text-sm">{searchLinks[movie].year} • {searchLinks[movie].type} • {searchLinks[movie].rating}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        </div>
        <button onClick={handleRandom} className="text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition">
          <FaRandom />
        </button>
      </nav>

     { /* Main Page Content */}
        <div className="flex flex-col lg:flex-row p-4 gap-4">


            {/* Anime Poster */}
            <div className="bg-gray-900 p-4 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-lg text-white flex flex-col">
           <img
          src="https://tse2.mm.bing.net/th/id/OIP.zvyutMzZ5u0vDoSK5Kr5LAHaLP?cb=iwp1&w=494&h=750&rs=1&pid=ImgDetMain"
          alt="Anime poster"
          className="w-16 md:w-32 lg:w-48"
          style={{ height: "min-content",objectFit: "cover" }}
            />
              <div className="flex items-center justify-between mb-4">
                
                <h2 className="text-xl font-bold">Episodes</h2>
                <div className="flex items-center space-x-2">

                  <button
                    className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-600"
                    onClick={() => setShowTitles(!showTitles)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-4 space-x-2">
              <select
                className="bg-gray-700 text-white rounded px-2 py-1 text-sm focus:outline-none"
                value={episodeRange}
                onChange={(e) => setEpisodeRange(e.target.value)}
              >
                <option>001-25</option>
              </select>
              <input
                type="text"
                placeholder="Find"
                className="flex-grow bg-gray-700 rounded px-2 py-1 text-sm text-white placeholder-gray-400 focus:outline-none"
                value={episodeSearch}
                onChange={(e) => setEpisodeSearch(e.target.value)}
              />
              </div>
              {showTitles ? (
                <div className="overflow-y-auto bg-gray-800 rounded-lg p-2" style={{ maxHeight: "34rem" }}>
                  {videos
                    .filter((video) => {
                      const [start, end] = episodeRange.split("-").map((v) => parseInt(v, 10));
                      if (video.id < start || video.id > end) return false;
                      if (episodeSearch && !video.id.toString().includes(episodeSearch)) return false;
                      return true;
                    })
                    .map((video) => (
                      <div
                        key={video.id}
                        onClick={() => handleEpisodetoggle(video.id)}
                        className={`flex items-center p-2 rounded cursor-pointer ${
                          toggle === video.id ? "bg-orange-500 text-black" : "hover:bg-gray-700 text-gray-300"
                        }`}
                      >
                        <span className="w-6 text-right mr-4 font-semibold">{video.id}</span>
                        <span className="truncate">{video.title}</span>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2">
                  {videos
                    .filter((video) => {
                      const [start, end] = episodeRange.split("-").map((v) => parseInt(v, 10));
                      if (video.id < start || video.id > end) return false;
                      if (episodeSearch && !video.id.toString().includes(episodeSearch)) return false;
                      return true;
                    })
                    .map((video) => (
                      <button
                        key={video.id}
                        onClick={() => handleEpisodetoggle(video.id)}
                        className={`px-4 py-2 rounded-lg text-center ${
                          toggle === video.id ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
                        }`}
                      >
                        {video.id}
                      </button>
                    ))}
                </div>
              )}
            </div>

          {/* Video Player */}
          <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={currentVideo}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay" 
            allowFullScreen
            style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp4769472.jpg')" , backgroundSize: "cover", backgroundPosition: 'center' }}
          ></iframe>
            </div>
        {/* Episode Selection UI */}

        {videos.map((video) => (
        toggle === video.id && (
       <div className="mt-6 w-full bg-gray-800 p-4 rounded-lg max-w-lg mx-auto text-center shadow-lg" style={{ maxWidth: "67rem" }}>
       <div className="bg-yellow-400 text-black p-3 rounded-t-lg font-bold">
        <p>You are watching</p>
        <p className="text-lg">Episode {video.id}</p>
        <p className="text-sm mt-1">If the current server doesn't work, please try other servers beside.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-b-lg text-center">
        <div className="mb-4">
          <p className="text-yellow-400 font-semibold inline-flex items-center">
            <span className="mr-2">🔠 SUB:</span>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB1");
                setCurrentVideo(video.HDSUB1);
              }}
            >
              HD-1
            </button>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB2");
                setCurrentVideo(video.HDSUB2);
              }}
            >
              HD-2
            </button>
          </p>
          <div className="mt-4">
          <p className="text-yellow-300 font-semibold inline-flex items-center">
            <span className="mr-2">🎤 DUB:</span>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD1");
                setCurrentVideo(video.HD1);
              }}
            >
              HD-1
            </button>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD2");
                setCurrentVideo(video.HD2);
              }}
            >
              HD-2
            </button>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
))}

        </div>
      </div>
      {/* Footer */}
      <footer className="mt-8 p-4 bg-black text-gray-400 text-center">
        <p>Copyright ©AnimeFlux. All Rights Reserved</p>
        <p className="text-sm mt-1">
          This site does not store any files on its server. All contents are provided by non-affiliated third parties.
        </p>
        <p className="mt-2">Socials: <span className="text-white">🐦</span></p>

      </footer>
      </div>

    
  );
};

export default AttackonTitanSeason1;
