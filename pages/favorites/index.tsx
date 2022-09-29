import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'


const Favorites:NextPage = () => {

  const [ favoritesPokemons, setFavoritesPokemons ] = useState<number[]>([]);
  
  useEffect(() => {
    
  }, [])
  

  return (
    <Layout title='Favoritos'>
     <NoFavorites />
    </Layout>
  )
}

export default Favorites;