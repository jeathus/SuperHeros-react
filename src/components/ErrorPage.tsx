import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"style={{ marginTop: '80px' }}>Page non trouvée</h1>
      <p className="text-center">La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="btn btn-primary mt-4">Retour à la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
