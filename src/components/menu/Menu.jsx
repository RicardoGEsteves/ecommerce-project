import React from 'react';

import image1 from './adventure.jpg';
import image2 from './roadtrip.jpg';
import image3 from './vacation.jpg';
import image4 from './trips.jpg';
import image5 from './accommodations.jpg';

import './menu.scss';
import MenuItem from '../menu-item/MenuItem';

export class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      //   sections: [
      //     {
      //       title: 'ADVENTURE',
      //       imageUrl: './adventure.jpg',
      //       id: 1
      //     },
      //     {
      //       title: 'ROADTRIP',
      //       imageUrl: './roadtrip.jpg',
      //       id: 2
      //     },
      //     {
      //       title: 'VACATION',
      //       imageUrl: './vacation.jpg',
      //       id: 3
      //     },
      //     {
      //       title: 'TRIPS',
      //       imageUrl: './trips.jpg',
      //       id: 4
      //     },
      //     {
      //       title: 'ACCOMMODATIONS',
      //       imageUrl: './accommodations.jpg',
      //       id: 5
      //     }
      //   ]

      sections: [
        {
          title: 'ADVENTURE',
          imageUrl: image1,
          id: 1
        },
        {
          title: 'ROADTRIP',
          imageUrl: image2,
          id: 2
        },
        {
          title: 'VACATION',
          imageUrl: image3,
          id: 3
        },
        {
          title: 'TRIPS',
          imageUrl: image4,
          size: 'large',
          id: 4
        },
        {
          title: 'ACCOMMODATIONS',
          imageUrl: image5,
          size: 'large',
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className='menu'>
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Menu;
