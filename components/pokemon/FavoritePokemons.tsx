import React, { FC } from 'react'
import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from './FavoritePokemonCard';
import { PokeFavorite } from '../../interfaces';

interface Props {
  pokemons: PokeFavorite
}


export const FavoritePokemons: FC<Props> = ({ pokemons })  => {
  
  return (
    <Grid.Container gap={1} direction='row' justify='flex-start' >
      {
        Object.values(pokemons).map( ({id, name}) => (
          <Grid xs={4} sm={2} md={3} xl={1} key={id} >
           <FavoritePokemonCard key={id} name={name} id={id} />
          </Grid>
        ))
      }
    </Grid.Container>
  )
}
