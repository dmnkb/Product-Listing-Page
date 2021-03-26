import React, { useEffect, useState } from 'react';
import StoreContext from '../Context'

import * as api from '../../api/Api'

import {
  Typography,
  Box,
} from '@material-ui/core'

import Filter from '../filter/Filter'
import ProductListHeader from '../productListHeader/ProductListHeader'
import ComparisonOverlay from '../comparison/Comparison'
import Header from '../header/Header'

import { 
  StyledProductList,
  StyledCircularProgress
} from './styles'

const ListPage: React.FC = () => {

  // general states
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(Object);

  // filtering
  const [gender, setGender] = React.useState('all');
  const [releaseYear, setReleaseYear] = React.useState(2020);
  
  // context
  const [favs, setFavs] = React.useState(['']);
  const [favCount, setFavCount] = React.useState(0);
  const [comparisonOpen, setComparisonOpen] = React.useState(false);

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
    let arr = favs
    favs.splice(0, 1)
    setFavs(arr)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    setIsError(false)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, releaseYear])

  const onFilterChanged = (gender: api.gender, releaseYear: number) => {
    setGender(gender)
    setReleaseYear(releaseYear)
    setIsLoading(true)
  }

  const favClicked = (id: string) => {
    let tempFavs = favs
    if ( tempFavs.findIndex(x => x===id) !== -1 ) {
      tempFavs.splice(tempFavs.indexOf(id), 1)
    } else {
      tempFavs.push(id)
    }    
    setFavs(tempFavs)
    setFavCount(tempFavs.length)
  }

  const handleComparisonOpen = () => {
    setComparisonOpen(true);
  };

  const handleComparisonClose = () => {
    setComparisonOpen(false);
  };

  return (
    <StoreContext.Provider value={{ 
      favs, 
      favClicked,
      comparisonOpen,
      handleComparisonOpen,
      handleComparisonClose 
      }}>

      <Header title="The 👟 Shop" />
      
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
                  <ProductListHeader resultsCount={productData.count} favCount={favCount} />
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

      <ComparisonOverlay 
        favs={favs}
        favCount={favCount}
        comparisonOpen={comparisonOpen}
        />

    </StoreContext.Provider>
  );
}

export default ListPage;
