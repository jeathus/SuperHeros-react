import { SuperHeros } from "../types/SuperHeros";
import { useState } from "react";
import { Link } from "react-router-dom";

type HeroCardProps = {
  hero: SuperHeros;
};

const HeroCard = ({ hero }: HeroCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/superheros/${hero.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        className={`card shadow-lg h-100 ${
          isHovered ? "border-primary" : "border-transparent"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
    </Link>
  );
};

export default HeroCard;
