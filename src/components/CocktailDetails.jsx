import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CocktailDetails() {
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data }) => {
        setCocktail(data.drinks[0]);
      })
      .catch(() => {
        setError('i iz broken');
      });
  }, []);

  if (error) {
    return <p>Im broken plz latter</p>;
  }

  if (!cocktail) {
    return <p>Im searching plz wait</p>;
  }

  return (
    <>
      <h2>{cocktail.strDrink.toUpperCase()}</h2>
      <img src={cocktail.strDrinkThumb} alt="" />
      <p>{cocktail.strInstructionsDE || cocktail.strInstructions}</p>
    </>
  );
}
