import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Not found page</h1>

      <p>
        Go to the home page , <Link to="/">click here.</Link>
      </p>
    </div>
  );
};

export default NotFound;
