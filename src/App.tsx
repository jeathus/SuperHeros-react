import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SuperHeroList from './components/SuperHeroList';
import SuperHeroDetail from './components/SuperHeroDetail';
import { SuperHeros } from './types/SuperHeros';
import SuperHerosData from './assets/SuperHerosData.json';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import { PowerStats } from './types/PowerStats';
import SuperHeroFilterPage from './components/SuperHeroFilterPage'; 

const App = () => {
  const [heroes, setHeroes] = useState<SuperHeros[]>([]);

  useEffect(() => {
    const heroesData = SuperHerosData.map(
      (heroData: {
        id: number;
        name: string;
        slug: string;
        powerstats: PowerStats;
      }) =>
        new SuperHeros(
          heroData.id,
          heroData.name,
          heroData.slug,
          heroData.powerstats,
        )
    );
    setHeroes(heroesData);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SuperHeroList heroes={heroes} />} />
        <Route path="/superheros/:id" element={<SuperHeroDetail />} />
        <Route path="/filtrage" element={<SuperHeroFilterPage heroes={heroes} />} /> 
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  );
};

export default App;
