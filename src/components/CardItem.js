import { React, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import NasaContext from '../naseContext';
import { HeartOutlined,   HeartFilled } from '@ant-design/icons';
import "antd/dist/antd.css";

/*
 * CardItem
 *
 * This is the page where you rednder a card for an Item
 * State: None
 *        
 * props: item
           {
              "copyright": "Isaac Guti�rrez Pascual",
              "date": "2010-09-15",
              "explanation": "Sometimes the sky above can become quite a show. Last week, for example, the Moon and Venus converged, creating quite a sight by itself for sky enthusiasts around the globe.  From some locations, though, the sky was even more picturesque. In the above image taken last week from Spain, a crescent Moon and the planet Venus, on the far right, were captured during sunset posing against a deep blue sky.  In the foreground, dark storm clouds loom across the image bottom, while a white anvil cloud shape appears above. Black specks dot the frame, caused by a flock of birds taking flight. Very soon after this picture was taken, however, the birds passed by, the storm ended, and Venus and the Moon set.  The Moon and Venus have now separated, although Venus will remain visible at sunset for the rest of this month.",
              "hdurl": "https://apod.nasa.gov/apod/image/1009/venusmoon_pascual_big.jpg",
              "media_type": "image",
              "service_version": "v1",
              "title": "Clouds, Birds, Moon, Venus \n",
              "url": "https://apod.nasa.gov/apod/image/1009/venusmoon_pascual.jpg"
	          }
 * App ---->> CardList ------>> CardItem
 */

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
