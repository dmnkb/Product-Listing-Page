export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_ERROR":
      return { 
        ...state, 
        isError: action.payload 
      };
    case "SET_LOADING":
      return { 
        ...state, 
        isLoading: action.payload
      };
    case "PRODUCT_DATA_UPDATE":
      return { 
        ...state, 
        productData: action.payload
      };
    case "SET_PAGE":
      return { 
        ...state, 
        page: action.payload
      };
    case "SET_GENDER": 
      return {
        ...state, 
        gender: action.payload,
        page: 1
      };
    case "SET_RELEASE_YEAR":
    return {
      ...state,
      releaseYear: action.payload,
      page: 1
      };
    case "FAV_CLICKED":
      let tempFavs = state.favs
      let tempFavCount = state.favCount      
      if (!state.favs) {
        tempFavs = [action.payload]
        tempFavCount++
      } else {
        if (state.favs.findIndex( (x: any) => x===action.payload) !== -1) {
          tempFavs.splice(tempFavs.indexOf(action.payload), 1)
          tempFavCount--
        } else {
          tempFavs.push(action.payload)
          tempFavCount++
        }
      }
      return { 
        ...state,
        favs: tempFavs,
        favCount: tempFavCount
      }      
    case "SET_COMPARISON_OPEN":
      return { 
        ...state, 
        comparisonOpen: action.payload
      };
  case "LOGO_CLICK":
    return {
      ...state,
      gender: 'all',
      releaseYear: 2020,
      page: 1
    }
    default:
      return state
  }
}