import { useState, ChangeEvent, FormEvent } from 'react';
import { PowerStats } from '../types/PowerStats';
import { SuperHeros } from '../types/SuperHeros';

type SearchFormProps = {
  heroes: SuperHeros[];
  onFilteredHeroes: (filteredHeroes: SuperHeros[]) => void;
};

const SearchForm = ({ heroes, onFilteredHeroes }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [powerLevels, setPowerLevels] = useState<{ [key in keyof PowerStats]: number }>({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPowerLevels((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = heroes
        .filter((hero) => hero.name.toLowerCase().includes(value.toLowerCase()))
        .map((hero) => hero.name);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    const filtered = heroes.filter((hero) => {
      const nameMatch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());

      const powerMatch = Object.keys(powerLevels).every((key) => {
        const heroPower = hero.powerstats[key as keyof PowerStats] ?? 0;
        const powerLevel = powerLevels[key as keyof PowerStats] ?? 0;
  
        return powerLevel === 0 || heroPower >= powerLevel;
      });
  
      return nameMatch && powerMatch;
    });
  
    onFilteredHeroes(filtered);
  };
  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group m-4">
        <label htmlFor="searchTerm">Nom du super-héros</label>
        <input
          type="text"
          className="form-control"
          id="searchTerm"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {suggestions.length > 0 && (
          <ul className="list-group mt-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => {
                  setSearchTerm(suggestion);
                  setSuggestions([]);
                }}
                style={{ cursor: 'pointer' }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="intelligence">Intelligence</label>
        <input
          type="number"
          className="form-control"
          id="intelligence"
          name="intelligence"
          value={powerLevels.intelligence}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="strength">Force</label>
        <input
          type="number"
          className="form-control"
          id="strength"
          name="strength"
          value={powerLevels.strength}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="speed">Vitesse</label>
        <input
          type="number"
          className="form-control"
          id="speed"
          name="speed"
          value={powerLevels.speed}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="durability">Endurance</label>
        <input
          type="number"
          className="form-control"
          id="durability"
          name="durability"
          value={powerLevels.durability}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="power">Pouvoir</label>
        <input
          type="number"
          className="form-control"
          id="power"
          name="power"
          value={powerLevels.power}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="combat">Combat</label>
        <input
          type="number"
          className="form-control"
          id="combat"
          name="combat"
          value={powerLevels.combat}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary m-3">Rechercher</button>
    </form>
  );
};

export default SearchForm;
