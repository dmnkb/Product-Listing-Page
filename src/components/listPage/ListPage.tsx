import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../state/Context'

import * as api from '../../api/Api'

import {
  Typography,
  Box,
} from '@material-ui/core'

import Filter from '../filter/Filter'
import ComparisonOverlay from '../comparison/Comparison'
import Header from '../header/Header'

import { 
  StyledProductList,
  StyledCircularProgress,
  StyledPagination
} from './styles'

const ListPage: React.FC = () => {

  const { state, dispatch } = useContext(StoreContext);
  
  const handleLogoClicked = () => {
    dispatch({ type: 'LOGO_CLICK' })
  }

  const getProducts = (
    gender: api.gender,
    releaseYear: number,
    page: number = 1
    ) => {
      dispatch({ type: 'SET_LOADING', payload: true })
      api.getProducts({
        gender: gender as api.gender,
        sort: '',
        releaseYear: releaseYear,
        page: state.page
      } as api.SneakerSpecs).then( (data: any) => {
        if (data.error) {
          console.log("Error:", data.error)
          dispatch({ type: 'SET_ERROR', payload: true })
        } else {
          dispatch({ type: 'PRODUCT_DATA_UPDATE', payload: data.response.data })
        }
        dispatch({ type: 'SET_LOADING', payload: false })
      })
  }

  useEffect(() => {
    getProducts('all', 2020)
    // eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    getProducts(state.gender, state.releaseYear)
    // eslint-disable-next-line
  }, [state.gender, state.releaseYear, state.page])

  return (
    <>
      <Header 
        title="The 👟 Shop" 
        handleLogoClicked={handleLogoClicked}
        />      
      <main className="grid">
        <div className="inner">
          <aside className="s-12 l-3 col">
            <Filter />
          </aside>
          <main className="s-12 l-9 col">
            {state.isLoading ? (
              <StyledCircularProgress />
            ) : (        
              (!state.isError && state.productData) ? (
                <>
                  <StyledProductList productData={state.productData.results} />
                  <Box
                    display="flex"
                    justifyContent="center"
                    my={6}
                    >
                    <StyledPagination 
                      count={Math.floor(state.productData.count / 12) | 1} 
                      color="primary"                         
                      page={state.page}
                      onChange={ 
                        (event, newPage) => { 
                          dispatch({ type: 'SET_PAGE', payload: newPage }) 
                        }}
                      />
                  </Box>
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
      <ComparisonOverlay />
     </>
  );
}

export default ListPage;
