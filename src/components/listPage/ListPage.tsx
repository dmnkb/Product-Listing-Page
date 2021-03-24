import React, { useEffect, useState } from 'react';

import * as api from '../../api/Api'

import Filter from '../filter/Filter'

import { 
  StyledProductList,
  StyledCircularProgress
} from './styles'

import {
  Typography,
  Box
} from '@material-ui/core'

const ListPage: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(Object);

  const [gender, setGender] = React.useState('');
  const [releaseYear, setReleaseYear] = React.useState(2020);

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
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, releaseYear])


  return (
    <main className="grid">
      <div className="inner">
        <aside className="s-12 ipad-4 l-3 col">
          <Filter handler={onFilterChanged} />
        </aside>
        <main className="s-12 ipad-8 l-9 col">
          {isLoading ? (
            <StyledCircularProgress />
          ) : (        
            productData ? (
              <>
                <Box 
                  mb={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  >
                  <Typography 
                    variant="overline"
                    gutterBottom
                    >
                      {`Nike Air Force 1 (${productData && productData.count})`}
                    </Typography>

                </Box>
                <StyledProductList productData={productData.results} />
              </>
            ) : (
              <span>There was an error answering the request.</span>
            )
          )}
        </main>
      </div>
    </main>
  );
}

export default ListPage;
