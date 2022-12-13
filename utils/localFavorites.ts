import { Pokemon } from "../interfaces";
import { PokeFavorite } from "../interfaces";

const toggleFavorite = ( pokemon :Pokemon ) => {

  const { id, name } = pokemon;

  let favorites: PokeFavorite = JSON.parse( localStorage.getItem('favorites') || '{}' );

  if ( Object.hasOwn(favorites, id) ) {

    const { [id]: deletedPorperty, ...rest } = favorites;

   localStorage.setItem('favorites', JSON.stringify( rest ));
   
  } else {
    Object.assign(favorites, { [id] : { id, name } } )
    localStorage.setItem('favorites', JSON.stringify( favorites ));
  }

}

const existInFavorites = ( id:number ): boolean => {
  
  if( typeof window === 'undefined' ) return false;

  const favorites: PokeFavorite = JSON.parse( localStorage.getItem( 'favorites' ) || '{}'  );

  return Object.hasOwn(favorites, id);
}

const pokemons = (): PokeFavorite => {
  
  return JSON.parse( localStorage.getItem('favorites') || '{}' );
}

export default { toggleFavorite, existInFavorites, pokemons }
