import React from 'react';

const StoreContext = React.createContext({
  favs: [''],
  favClicked: (id: string) => {},
  comparisonOpen: false,
  handleComparisonOpen: () => {},
  handleComparisonClose: () => {},
  gender: 'all',
  releaseYear: 2020,
  handleGenderChange: (event: React.ChangeEvent<{ value: unknown }>) => {},
  handleReleaseYearChange: (event: React.ChangeEvent<{ value: unknown }>) => {}
});

export default StoreContext