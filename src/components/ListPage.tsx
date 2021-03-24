import React, { useEffect, useState } from 'react';

import * as api from '../api/Api'

import ProductList from './ProductList'
import Filter from './filter/Filter'

import {
  CircularProgress
} from '@material-ui/core'

const ListPage: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);

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
        setProductData(data.response.data.results)
        console.log(data)
      }
      setIsLoading(false)
    })
  }
  
  useEffect(() => {
    getProducts()
  }, [])
  
  useEffect(() => {
    getProducts()
  }, [gender, releaseYear])


  return (
    <main className="grid">
      <div className="inner">
        <aside className="s-12 m-6 l-3 col">
          <Filter handler={onFilterChanged} />
        </aside>
        <main className="s-12 m-6 l-9 col">
          {isLoading ? (
            <CircularProgress />
          ) : (        
            productData ? (
              <ProductList productData={productData} />
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
