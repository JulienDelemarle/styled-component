import { useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail';

function CocktailsGallery() {
  const [cocktails, setCocktails] = useState([]);
  const [choiceAlcohol, setChoiceAlcohol] = useState('Non_Alcoholic');

  const handleChangeAlcohol = (e) => {
    setChoiceAlcohol(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${choiceAlcohol}`
      )
      .then(({ data }) => {
        console.log(data.drinks);
        setCocktails(data.drinks);
      });
  }, [choiceAlcohol]);

  return (
    <>
      <h2>Cocktails</h2>
      <select onChange={handleChangeAlcohol}>
        <option value="Non_Alcoholic">sans alcool</option>
        <option value="Alcoholic">avec alcool</option>
      </select>
      <ul>
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.idDrink} {...cocktail} />;
        })}
      </ul>
    </>
  );
}
export default CocktailsGallery;
