import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-coral-bottom dreamy-app">
      <div className="dreamy-container">
        <div className="dreamy-card dreamy-card-hero text-center">
          <div className="dreamy-sun"></div>
          <div className="dreamy-mountains"></div>
          <h1 className="text-6xl font-bold text-[hsl(var(--foreground))] mb-4 relative z-10">404</h1>
          <p className="text-xl text-[hsl(var(--foreground))] opacity-80 mb-6 relative z-10">Oops! Page not found</p>
          <p className="text-sm text-[hsl(var(--foreground))] opacity-70 mb-8 relative z-10">
            The page you're looking for doesn't exist
          </p>
          <Link to="/">
            <button className="dreamy-button relative z-10">
              Return to Home
            </button>
          </Link>
        </div>
        
        <div className="dreamy-card text-center">
          <div className="text-4xl mb-4">🏠</div>
          <h2 className="text-lg font-bold text-[hsl(var(--foreground))] mb-2">
            Lost your way?
          </h2>
          <p className="text-sm text-[hsl(var(--foreground))] opacity-70">
            Let's get you back to your emotional wellness toolkit
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
