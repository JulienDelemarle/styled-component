import PropTypes from 'prop-types';

function Cocktail({ strDrink, strDrinkThumb }) {
  return (
    <li>
      <h3>{strDrink}</h3>
      <img src={strDrinkThumb} alt="" />
    </li>
  );
}

Cocktail.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
};

export default Cocktail;
