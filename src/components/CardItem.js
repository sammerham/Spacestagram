import { React, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import NasaContext from '../naseContext';
import { HeartOutlined,   HeartFilled } from '@ant-design/icons';
import "antd/dist/antd.css";



function CardItem({ item }) {
  const { toggleLikeCard } = useContext(NasaContext);

  const { date, explanation, title,  url, like} = item;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <Card.Subtitle>{date}</Card.Subtitle>
        <Card.Text style={{ fontSize: '10px' }}>
          {explanation}
        </Card.Text>
        {like
          ?
          <HeartFilled
            style={{ color: 'red' }}
            onClick={() => toggleLikeCard(title)}
          / >
          :
          <HeartOutlined
            variant="primary"
            style={{ color: 'red' }}
            onClick={()=>toggleLikeCard(title)}
          />
        }
      </Card.Body>
    </Card>
  )
}

export default CardItem;
