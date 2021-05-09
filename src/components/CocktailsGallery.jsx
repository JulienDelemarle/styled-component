import { useEffect, useState } from 'react';
import axios from 'axios';

function CocktailsGallery() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      )
      .then(({ data }) => {
        console.log(data.drinks);
        setCocktails(data.drinks);
      });
  }, []);

  return (
    <>
      <h2>Cocktails</h2>
      <ul>
        {cocktails.map((cocktail) => {
          return (
            <li>
              <h3>{cocktail.strDrink}</h3>
              <img src={cocktail.strDrinkThumb} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default CocktailsGallery;
