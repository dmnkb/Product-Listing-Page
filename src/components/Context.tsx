import React from 'react';

const StoreContext = React.createContext({
  favs: [''],
  favClicked: (id: string) => {},
  comparisonOpen: false,
  handleComparisonOpen: () => {},
  handleComparisonClose: () => {}
});

export default StoreContext