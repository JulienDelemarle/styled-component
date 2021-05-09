import { Switch, Route } from 'react-router-dom';
import CocktailsGallery from './components/CocktailsGallery';
import CocktailDetails from './components/CocktailDetails';

function App() {
  return (
    <div className="App">
      <h1>Cocktails</h1>
      <Switch>
        <Route exact path="/">
          <CocktailsGallery />
        </Route>
        <Route path="/:id">
          <CocktailDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
