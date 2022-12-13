import React, { FC } from 'react'
import { Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  id:number;
  name: string
}

export const FavoritePokemonCard: FC<Props> = ({ id, name }) => {

  const router = useRouter();

  const onFavoriteClicked = ( name:string ) => {
    router.push(`/name/${name}`);
  }

  return (
    <Card
      hoverable
      clickable
      css={{ padding: 10 }}
      onClick={ () => onFavoriteClicked(name) }
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={'100%'}
        height={140}
      />
    </Card>
  )
}
