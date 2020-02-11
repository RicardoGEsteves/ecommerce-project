const INITIAL_STATE = {
  sections: [
    {
      title: 'ADVENTURE',
      imageUrl: 'https://i.imgur.com/V2Bv39g.jpg',
      id: 1,
      linkUrl: 'shop/adventure'
    },
    {
      title: 'ROADTRIP',
      imageUrl: 'https://i.imgur.com/dkuXLaR.jpg',
      id: 2,
      linkUrl: 'shop/roadtrip'
    },
    {
      title: 'VACATIONS',
      imageUrl: 'https://i.imgur.com/gAogIna.jpg',
      id: 3,
      linkUrl: 'shop/vacations'
    },
    {
      title: 'TRIPS',
      imageUrl: 'https://i.imgur.com/5xnQRCk.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/trips'
    },
    {
      title: 'ACCOMMODATIONS',
      imageUrl: 'https://i.imgur.com/bNpJGFV.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/accommodations'
    }
  ]
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
