import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cocktail({ strDrink, strDrinkThumb, idDrink }) {
  return (
    <li>
      <Link to={`/${idDrink}`}>
        <h3>{strDrink}</h3>
        <img src={strDrinkThumb} alt="" />
      </Link>
    </li>
  );
}

Cocktail.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};

export default Cocktail;
