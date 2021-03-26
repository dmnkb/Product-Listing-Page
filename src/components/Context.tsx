import React from 'react';

const StoreContext = React.createContext({
  favs: [''],
  favClicked: (id: string) => {},
  handleComparisonClick: () => {}
});

export default StoreContext