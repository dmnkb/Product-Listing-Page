import React from 'react';

const StoreContext = React.createContext({
  favs: [''],
  favClicked: (favs: string[], id: string) => { }
});

export default StoreContext