import { Link, useNavigate, useParams } from "react-router-dom";
import SuperHerosData from "../assets/SuperHerosData.json";
import { SuperHeros } from "../types/SuperHeros";
import { useEffect } from "react";

const SuperHeroDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const heroId = id ? parseInt(id, 10) : undefined;
  const hero =
    heroId !== undefined
      ? SuperHerosData.find((hero: SuperHeros) => hero.id === heroId)
      : undefined;

  // Redirect to error page if hero is not found
  useEffect(() => {
    if (!hero) {
      navigate("/error");
    }
  }, [hero, navigate]);

  if (!hero) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <div className="row" style={{ marginTop: "80px" }}>
      <h1 className="text-center mb-4 text-primary">{hero.name}</h1>
        {/* Hero Image Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`}
            className="img-fluid rounded"
            alt={hero.name}
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>

        {/* Hero Details Section */}
        <div className="col-md-6">
          <div className="card-body">
            {/* Basic Information */}
            <h3>Informations de Base</h3>
            <p className="card-text"><strong>Id API :</strong> {hero.id}</p>
            <p className="card-text"><strong>Slug :</strong> {hero.slug}</p>
            <p className="card-text"><strong>Genre :</strong> {hero.appearance?.gender || "N/A"}</p>
            <p className="card-text"><strong>Race :</strong> {hero.appearance?.race || "N/A"}</p>
            <p className="card-text"><strong>Taille :</strong> {hero.appearance?.height?.join(", ") || "N/A"}</p>
            <p className="card-text"><strong>Poids :</strong> {hero.appearance?.weight?.join(", ") || "N/A"}</p>

            {/* Powerstats */}
            <h3>Statistiques de Pouvoir</h3>
            {Object.keys(hero.powerstats).map((stat) => (
              <p className="card-text" key={stat}>
                <strong>{capitalize(stat)} :</strong>{" "}
                <span className={`badge bg-${getBadgeColor(stat)}`}>
                  {hero.powerstats[stat as keyof typeof hero.powerstats]}
                </span>
              </p>
            ))}

            {/* Biography */}
            <h3>Biographie</h3>
            <p><strong>Nom Complet :</strong> {hero.biography?.fullName || "N/A"}</p>
            <p><strong>Alias :</strong> {hero.biography?.aliases?.join(", ") || "N/A"}</p>
            <p><strong>Alignement :</strong> {hero.biography?.alignment || "N/A"}</p>

            {/* Additional Details */}
            <h3>Autres Détails</h3>
            <p><strong>Première Apparition :</strong> {hero.biography?.firstAppearance || "N/A"}</p>
            <p><strong>Éditeur :</strong> {hero.biography?.publisher || "N/A"}</p>
            <p><strong>Base :</strong> {hero.work?.base || "N/A"}</p>
          </div>
        </div>
      </div>
      {/* Back to List */}
      <Link to="/" className="btn btn-primary mt-4">Retour à la liste</Link>
    </div>
  );
};

// Helper Function for Badge Colors
const getBadgeColor = (stat: string) => {
  switch (stat) {
    case "intelligence":
      return "primary";
    case "strength":
      return "success";
    case "speed":
      return "warning";
    case "durability":
      return "danger";
    case "power":
      return "info";
    case "combat":
      return "secondary";
    default:
      return "dark";
  }
};

// Helper Function for Capitalizing Words
const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export default SuperHeroDetail;
