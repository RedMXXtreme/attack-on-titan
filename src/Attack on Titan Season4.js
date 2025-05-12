import React, { useState, useEffect } from "react";
import { FaRandom, FaSearch } from "react-icons/fa";
const AttackonTitanSeason4 = () => {
  const videos = [
    { 
      id: 1, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-1", 
      HD2: "https://megaplay.buzz/stream/s-2/51475/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-1", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51475/sub" 
    },
    { 
      id: 2, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-2", 
      HD2: "https://megaplay.buzz/stream/s-2/51476/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-2", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51476/sub" 
    },
    { 
      id: 3, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-3", 
      HD2: "https://megaplay.buzz/stream/s-2/51477/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-3", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51477/sub" 
    },
    { 
      id: 4, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-4", 
      HD2: "https://megaplay.buzz/stream/s-2/51478/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-4", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51478/sub" 
    },
    { 
      id: 5, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-5", 
      HD2: "https://megaplay.buzz/stream/s-2/51479/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-5", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51479/sub" 
    },
    { 
      id: 6, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-6", 
      HD2: "https://megaplay.buzz/stream/s-2/51480/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-6", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51480/sub" 
    },
    { 
      id: 7, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-7", 
      HD2: "https://megaplay.buzz/stream/s-2/51481/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-7", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51481/sub" 
    },
    { 
      id: 8, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-8", 
      HD2: "https://megaplay.buzz/stream/s-2/51482/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-8", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51482/sub" 
    },
    { 
      id: 9, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-9", 
      HD2: "https://megaplay.buzz/stream/s-2/51483/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-9", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51483/sub" 
    },
    { 
      id: 10, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-10", 
      HD2: "https://megaplay.buzz/stream/s-2/51484/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-10", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51484/sub" 
    },
    { 
      id: 11, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-11", 
      HD2: "https://megaplay.buzz/stream/s-2/51485/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-11", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51485/sub" 
    },
    { 
      id: 12, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-12", 
      HD2: "https://megaplay.buzz/stream/s-2/51486/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-12", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51486/sub" 
    },
    { 
      id: 13, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-13", 
      HD2: "https://megaplay.buzz/stream/s-2/51487/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-13", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51487/sub" 
    },
    { 
      id: 14, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-14", 
      HD2: "https://megaplay.buzz/stream/s-2/51488/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-14", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51488/sub" 
    },
    { 
      id: 15, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-15", 
      HD2: "https://megaplay.buzz/stream/s-2/51489/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-15", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51489/sub" 
    },
    { 
      id: 16, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-dub-episode-16", 
      HD2: "https://megaplay.buzz/stream/s-2/51490/dub", 
      HDSUB1: "https://2anime.xyz/embed/Shingeki-no-Kyojin-The-Final-Season-episode-16", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/51490/sub" 
    },
    { 
      id: 17, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-1", 
      HD2: "https://megaplay.buzz/stream/s-2/85848/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-1", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/85848/sub" 
    },
    { 
      id: 18, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-2", 
      HD2: "https://megaplay.buzz/stream/s-2/86081/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-2", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86081/sub" 
    },
    { 
      id: 19, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-3", 
      HD2: "https://megaplay.buzz/stream/s-2/86082/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-3", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86082/sub" 
    },
    { 
      id: 20, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-4", 
      HD2: "https://megaplay.buzz/stream/s-2/86083/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-4", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86083/sub" 
    },
    { 
      id: 21, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-5", 
      HD2: "https://megaplay.buzz/stream/s-2/86326/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-5", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86326/sub" 
    },
    { 
      id: 22, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-6", 
      HD2: "https://megaplay.buzz/stream/s-2/86327/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-6", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86327/sub" 
    },
    { 
      id: 23, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-7", 
      HD2: "https://megaplay.buzz/stream/s-2/86707/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-7", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86707/sub" 
    },
    { 
      id: 24, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-8", 
      HD2: "https://megaplay.buzz/stream/s-2/86708/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-8", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86708/sub" 
    },
    { 
      id: 25, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-9", 
      HD2: "https://megaplay.buzz/stream/s-2/86709/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-9", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/86709/sub" 
    },
    { 
      id: 26, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-10", 
      HD2: "https://megaplay.buzz/stream/s-2/88252/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-10", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/88252/sub" 
    },
    { 
      id: 27, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-11", 
      HD2: "https://megaplay.buzz/stream/s-2/88253/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-11", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/88253/sub" 
    },
    { 
      id: 28, 
      HD1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-dub-episode-12", 
      HD2: "https://megaplay.buzz/stream/s-2/88254/dub", 
      HDSUB1: "https://2anime.xyz/embed/shingeki-no-kyojin-the-final-season-part-2-episode-12", 
      HDSUB2: "https://megaplay.buzz/stream/s-2/88254/sub" 
    }
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
            <div className="bg-gray-800 p-4 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md">
            <img
          src="https://static1.animekai.to/83/i/4/9a/6766499bd3723.jpg"
          alt="Anime poster"
          className="w-16 md:w-32 lg:w-48"
          style={{ height: "191px", width: "min-content", objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-2 text-center" style={{ fontSize: "10px" }}></h2>

            <h2 className="text-xl font-bold mb-4">List of episodes:</h2>
            <div className="grid grid-cols-4 gap-2">
          {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => handleEpisodetoggle(video.id)}
            className={`px-4 py-2 rounded-lg text-center ${
              toggle === video.id ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
              >
            {video.id}
              </button>
          ))}
            </div>
          </div>
          <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={currentVideo}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay" 
            allowFullScreen
            style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp8115072.png')" , backgroundSize: 'cover', backgroundPosition: 'center' }}
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

export default AttackonTitanSeason4;