import { useState } from "react";
import SuperHerosData from "../assets/SuperHerosData.json";
import { SuperHeros } from "../types/SuperHeros";
import SearchForm from "./SearchForm";

export default function SuperHeroSearch() {
  const [sortKey, setSortKey] = useState<string>("name");
  const [selectedHero, setSelectedHero] = useState<SuperHeros | null>(null);
  const [filteredHeroes, setFilteredHeroes] = useState<SuperHeros[]>(SuperHerosData);

  const handleFilteredHeroes = (filteredHeroes: SuperHeros[]) => {
    setFilteredHeroes(filteredHeroes);
  };

  // Trier les super-héros en fonction du critère de tri
  const sortedHeros = [...filteredHeroes].sort((a, b) => {
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Recherche et tri des Super-Héros</h1>

      {/* Champ de recherche */}
      <SearchForm heroes={SuperHerosData} onFilteredHeroes={handleFilteredHeroes} />

      {/* Menu déroulant pour sélectionner le critère de tri */}
      <div className="mb-4">
        <label htmlFor="sortKey" className="form-label">
          Trier par :
        </label>
        <select
          id="sortKey"
          className="form-select"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="name">Nom</option>
          <option value="id">ID</option>
        </select>
      </div>

      {/* Affichage de la liste ou des détails du super-héros */}
      {selectedHero ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Détails du Super-Héros</h2>
            <p>
              <strong>Nom :</strong> {selectedHero.name}
            </p>
            <p>
              <strong>ID API :</strong> {selectedHero.id}
            </p>
            <p>
              <strong>Slug :</strong> {selectedHero.slug}
            </p>
            <button
              onClick={() => setSelectedHero(null)}
              className="btn btn-primary"
            >
              Retour à la liste
            </button>
          </div>
        </div>
      ) : (
        <ul className="list-group">
          {sortedHeros.map((hero) => (
            <li
              key={hero.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() =>
                setSelectedHero(
                  new SuperHeros(hero.id, hero.name, hero.slug, hero.powerstats)
                )
              }
              style={{ cursor: "pointer" }}
            >
              {hero.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
