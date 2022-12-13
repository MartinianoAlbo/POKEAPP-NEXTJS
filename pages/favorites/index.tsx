import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritePokemons } from '../../components/pokemon'
import { PokeFavorite } from '../../interfaces'

const Favorites:NextPage = () => {

  const [ favoritesPokemons, setFavoritesPokemons ] = useState<PokeFavorite>( {} );
  
  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons );
  }, [])
  

  return (
    <Layout title='Favoritos'>
      {
        Object.values(favoritesPokemons).length > 0 
        ? ( <FavoritePokemons pokemons={ favoritesPokemons } /> )
        : ( <NoFavorites /> )
      }
     
    </Layout>
  )
}

export default Favorites;