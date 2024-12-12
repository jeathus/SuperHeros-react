import { useState } from 'react';
import SearchForm from './SearchForm';
import { SuperHeros } from '../types/SuperHeros';

type SuperHeroFilterPageProps = {
  heroes: SuperHeros[];
};

const SuperHeroFilterPage = ({ heroes }: SuperHeroFilterPageProps) => {
  const [filteredHeroes, setFilteredHeroes] = useState<SuperHeros[]>(heroes);

  const handleFilteredHeroes = (filteredHeroes: SuperHeros[]) => {
    setFilteredHeroes(filteredHeroes);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Filtrer les Super-Héros</h1>
      <SearchForm heroes={heroes} onFilteredHeroes={handleFilteredHeroes} />
      <div className="row">
        {filteredHeroes.map((hero) => (
          <div key={hero.id} className="col-md-4 mb-4">
            <div className="card shadow-lg h-100">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`}
                    className="img-fluid rounded"
                    alt={hero.name}
                    style={{ maxHeight: "250px", objectFit: "contain" }}
                  />
                </div>
                {/* Contenu */}
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{hero.name}</h5>
                    <p className="card-text">
                      <strong>Id API :</strong> {hero.id}
                    </p>
                    <p className="card-text">
                      <strong>Slug :</strong> {hero.slug}
                    </p>
                    <p className="card-text">
                      <strong>Intelligence :</strong>{" "}
                      <span className="badge bg-primary">{hero.powerstats.intelligence}</span>
                    </p>
                    <p className="card-text">
                      <strong>Force :</strong>{" "}
                      <span className="badge bg-success">{hero.powerstats.strength}</span>
                    </p>
                    <p className="card-text">
                      <strong>Vitesse :</strong>{" "}
                      <span className="badge bg-warning text-dark">{hero.powerstats.speed}</span>
                    </p>
                    <p className="card-text">
                      <strong>Endurance :</strong>{" "}
                      <span className="badge bg-danger">{hero.powerstats.durability}</span>
                    </p>
                    <p className="card-text">
                      <strong>Pouvoir :</strong>{" "}
                      <span className="badge bg-info text-dark">{hero.powerstats.power}</span>
                    </p>
                    <p className="card-text">
                      <strong>Combat :</strong>{" "}
                      <span className="badge bg-secondary">{hero.powerstats.combat}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperHeroFilterPage;
