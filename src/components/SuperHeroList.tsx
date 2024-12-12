import { SuperHeros } from "../types/SuperHeros";
import HeroCard from "./HeroCard";

type SuperHeroListProps = {
  heroes: SuperHeros[];
};

const SuperHeroList = ({ heroes }: SuperHeroListProps) => {
  return (
    <div className="container" style={{ marginTop: '80px' }}> 
      <h1 className="text-center mb-4">Liste des Super-Héros</h1>
      <p className="text-center">
        Nombre de super-héros chargés : {heroes.length}
      </p>
      <div className="row">
        {heroes.map((hero) => (
          <div key={hero.id} className="col-md-4 mb-4">
            <HeroCard hero={hero} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperHeroList;
