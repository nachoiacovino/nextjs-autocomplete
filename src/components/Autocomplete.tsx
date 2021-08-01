import { Box, Input, List, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import countries from '../data/countries.json';

const Autocomplete = () => {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const nameCountries = countries.map((country) => country.name);
  const [filteredCountries, setFilteredCountries] = useState(nameCountries);

  const handleChange = (e) => setValue(e.target.value);

  const handleClick = (value) => {
    setSelectedValue(value);
    setValue('');
  };

  useEffect(() => {
    setFilteredCountries(
      nameCountries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }, [value]);

  return (
    <Box pb={4} mb={4} margin='auto'>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Search'
        width='500px'
      />
      <Box position='absolute'>
        {value !== '' && filteredCountries.length !== 0 && (
          <List
            position='relative'
            borderRadius='4px'
            border={'1px solid rgba(0,0,0,0.1)'}
            boxShadow='6px 5px 8px rgba(0,50,30,0.02)'
            marginTop='8px'
            width='500px'
            maxHeight='200px'
            overflowY='auto'
            bg='inherit'
          >
            {filteredCountries.map((country) => (
              <ListItem
                key={country}
                px={3}
                py={2}
                borderBottom='1px solid rgba(0,0,0,0.01)'
                onClick={() => handleClick(country)}
                cursor='pointer'
              >
                {country}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      {selectedValue && <p>{selectedValue}</p>}
    </Box>
  );
};
export default Autocomplete;
