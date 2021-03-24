import React from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

import { StyledFilterList } from './styles'

interface FilterPorps {
  readonly handler: Function
}

const Filter: React.FC<FilterPorps> = ({handler}) => {

  const [gender, setGender] = React.useState('');
  const [releaseYear, setReleaseYear] = React.useState(2020);

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
    handler(event.target.value, releaseYear)
  };

  const handleReleaseYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReleaseYear(event.target.value as number);
    handler(gender, event.target.value)
  };
  
  const genders = [
    {'': 'All'},
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
    <StyledFilterList>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="gender-select-outlined"
          value={gender}
          onChange={handleGenderChange}
          label="Gender"
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

      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Release Year</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="release-year-select-outlined"
          value={releaseYear}
          onChange={handleReleaseYearChange}
          label="Release Year"
          >
          {releaseYears.map((year: number) => {
            return <MenuItem 
              key={year}
              value={year}
              >{year}</MenuItem>
          })}
        </Select>
      </FormControl>
    </StyledFilterList>
  );
}

export default Filter;
