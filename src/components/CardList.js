import { React, useContext } from 'react';
import NasaContext from '../naseContext';
import CardItem from './CardItem';
import Introduction from './Introduction';

function CardList() {
  const { updatedData } = useContext(NasaContext);

  return (
    <div>
      <Introduction />
      {updatedData.map(d => <CardItem item={d} key={d.title}/>)}
    </div>
  )
}

export default CardList;
