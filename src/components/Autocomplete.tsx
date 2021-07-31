import { Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import countries from '../data/countries.json';

const Autocomplete = () => {
  const [value, setValue] = useState('');
  const nameCountries = countries.map((country) => country.name);

  const [filteredCountries, setFilteredCountries] = useState(nameCountries);

  const handleChange = (e) => setValue(e.target.value);

  useEffect(() => {
    setFilteredCountries(
      nameCountries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }, [value]);

  return (
    <Stack>
      <Input value={value} onChange={handleChange} placeholder='Search' />
      {filteredCountries.slice(0, 10).map((country) => (
        <div>{country}</div>
      ))}
    </Stack>
  );
};

export default Autocomplete;
