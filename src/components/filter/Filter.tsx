import React, { useEffect, useState } from 'react';

import * as api from '../../api/Api'

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

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
  
  const genders = [
    {'': 'None'},
    {'men': 'Men'},
    {'women': 'Women'},
    {'child': 'Child'},
    {'infant': 'Infant'},
    {'preschool': 'Preschool'},
    {'toddler': 'Toddler'},
    {'unisex': 'Unisex'},
    {'youth': 'Youth'},
  ]

  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
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
  );
}

export default Filter;
