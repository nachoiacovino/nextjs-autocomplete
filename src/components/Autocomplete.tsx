import { Box, Heading, Input, List, ListItem, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Autocomplete = ({ items }: { items: string[] }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };
  const hoverBgColor = { light: 'gray.100', dark: 'gray.700' };

  const [value, setValue] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState('');

  const handleClick = (value) => {
    setSelectedItem(value);
    setValue('');
  };

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(value.toLowerCase())),
    );
  }, [value]);

  return (
    <Box pb={4} mb={4} margin='auto'>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search'
        width='500px'
        maxW='80vw'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      />
      <Box position='absolute'>
        {value !== '' && filteredItems.length !== 0 && (
          <List
            position='relative'
            borderRadius='4px'
            border={'1px solid rgba(0,0,0,0.1)'}
            boxShadow='6px 5px 8px rgba(0,50,30,0.02)'
            marginTop='8px'
            width='500px'
            maxW='80vw'
            maxHeight='200px'
            overflowY='auto'
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            zIndex='10'
          >
            {filteredItems.map((item) => (
              <ListItem
                key={item}
                px={3}
                py={2}
                borderBottom='1px solid rgba(0,0,0,0.01)'
                onClick={() => handleClick(item)}
                cursor='pointer'
                _hover={{ backgroundColor: hoverBgColor[colorMode] }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      {selectedItem && (
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          m='auto'
          mt='15px'
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {selectedItem}
          </Heading>
        </Box>
      )}
    </Box>
  );
};
export default Autocomplete;
