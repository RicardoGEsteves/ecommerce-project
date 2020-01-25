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
      sections: [
        {
          title: 'ADVENTURE',
          imageUrl: image1,
          id: 1,
          linkUrl: 'adventure'
        },
        {
          title: 'ROADTRIP',
          imageUrl: image2,
          id: 2,
          linkUrl: ''
        },
        {
          title: 'VACATION',
          imageUrl: image3,
          id: 3,
          linkUrl: ''
        },
        {
          title: 'TRIPS',
          imageUrl: image4,
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'ACCOMMODATIONS',
          imageUrl: image5,
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }
  render() {
    return (
      <div className='menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Menu;
