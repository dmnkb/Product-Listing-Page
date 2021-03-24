import React, { useEffect, useState } from 'react';

import * as api from '../../api/Api'

import {
  Typography,
  Box
} from '@material-ui/core'

import Filter from '../filter/Filter'
import ProductListHeader from '../productListHeader/ProductListHeader'

import { 
  StyledProductList,
  StyledCircularProgress
} from './styles'

const ListPage: React.FC = () => {

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(Object);

  const [gender, setGender] = React.useState('');
  const [releaseYear, setReleaseYear] = React.useState(2020);
  
  const [sorting, setSorting] = React.useState('');

  const onFilterChanged = (gender: api.gender, releaseYear: number) => {
    setGender(gender)
    setReleaseYear(releaseYear)
    setIsLoading(true)
  }

  const getProducts = () => {
    api.getProducts({
      gender: gender as api.gender,
      sort: '',
      releaseYear: releaseYear,
      page: 1
    } as api.SneakerSpecs).then( (data: any) => {
      if (data.error) {
        console.log("Error:", data.error)
        setIsError(true)
      } else {
        setProductData(data.response.data)
      }
      setIsLoading(false)
    })
  }
  
  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    setIsError(false)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, releaseYear])

  

  return (
    <main className="grid">
      <div className="inner">
        <aside className="s-12 l-3 col">
          <Filter handler={onFilterChanged} />
        </aside>
        <main className="s-12 l-9 col">
          {isLoading ? (
            <StyledCircularProgress />
          ) : (        
            (!isError && productData) ? (
              <>
                <ProductListHeader resultsCount={productData.count}/>
                <StyledProductList productData={productData.results} />
              </>
            ) : (
              <Box 
                display="flex"
                justifyContent="center"
                p={2}
                >
                <Typography variant="subtitle1">Uh-oh. Seems like something went wrong! 🤫</Typography>
              </Box>
            )
          )}
        </main>
      </div>
    </main>
  );
}

export default ListPage;
