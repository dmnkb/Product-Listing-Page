import React from 'react';

import {
  IconButton  
} from '@material-ui/core'

import HeartIcon from '@material-ui/icons/Favorite';

import {
  StyledProductListHeader,
  StyledHeadline,
  StyledControls,
  StyledBadge
} from './styles'

interface ProductListHeaderProps {
  readonly resultsCount: number
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({resultsCount}) => { 

  /*const [sorting, setSorting] = React.useState('');

  const handleSortingChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSorting(event.target.value as string);
  };*/

  return (
    <StyledProductListHeader>
      
      <StyledHeadline variant="overline">
        {`Nike Air Force 1 (${resultsCount && resultsCount})`}
      </StyledHeadline>
        
        <StyledControls>
          {/* <Typography variant="subtitle2">
            Sort by:&nbsp;
          </Typography>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Sorting</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sorting}
              onChange={handleSortingChange}
              label="Sorting"
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
          <IconButton 
            aria-label="favorite"
            color="primary"
            className="fav-button"
            >
            <StyledBadge badgeContent={4} color="secondary">
              <HeartIcon />
            </StyledBadge>
          </IconButton>
        </StyledControls>

      </StyledProductListHeader>
  );
}

export default ProductListHeader;
