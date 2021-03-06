import React from 'react';
import { StoreContext } from '../../state/Context'

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

import { StyledFilterList } from './styles'

const Filter: React.FC = () => { 
  
  const genders = [
    {'all': 'All'},
    {'men': 'Men'},
    {'women': 'Women'},
    {'child': 'Child'},
    {'infant': 'Infant'},
    {'preschool': 'Preschool'},
    {'toddler': 'Toddler'},
    {'unisex': 'Unisex'},
    {'youth': 'Youth'},
  ]

  const releaseYearsStart = 2005
  let releaseYears: number[] = [2020]
  for (let i: number = 2019; i >= releaseYearsStart; i--) {
    releaseYears.push(i as number)
  }

  return (
    <StoreContext.Consumer>
      {( context ) => {
        return (     
          <StyledFilterList className="grid s-position-relative ipad-position-sticky">
            <div className="inner">
              <div className="s-6 l-12 col">
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="gender-select-outlined"
                    value={context.state.gender}
                    onChange={(e) => context.dispatch({ type: 'SET_GENDER', payload: e.target.value as string })}
                    label="Gender"
                    disabled={context.state.isLoading}
                    >
                    {genders.map((gender: any) => {
                      let key, val: string = ""
                      Object.keys(gender).forEach((g: any) => {
                        key = g
                        val = gender[g]
                      })
                      return <MenuItem 
                        key={key}
                        value={key}
                        >{val}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>

              <div className="s-6 l-12 col">
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Release Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="release-year-select-outlined"
                    value={context.state.releaseYear}
                    onChange={(e) => context.dispatch({ type: 'SET_RELEASE_YEAR', payload: e.target.value as string })}
                    label="Release Year"
                    disabled={context.state.isLoading}
                    >
                    {releaseYears.map((year: number) => {
                      return <MenuItem 
                        key={year}
                        value={year}
                        >{year}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
          </StyledFilterList>
        )
      }}
    </StoreContext.Consumer>
  );
}

export default Filter;
