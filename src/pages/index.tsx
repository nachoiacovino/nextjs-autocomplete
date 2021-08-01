import { Link, Text } from '@chakra-ui/react';

import Autocomplete from '../components/Autocomplete';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';
import countries from '../data/countries.json';

const Index = () => {
  const namedCountries = countries.map((country) => country.name);

  return (
    <Container height='100vh'>
      <Hero />
      <Main>
        <Autocomplete items={namedCountries} />

        {/*       <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <ChakraLink
            isExternal
            href='https://chakra-ui.com'
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <ChakraLink isExternal href='https://nextjs.org' flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List> */}
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>
          Built by{' '}
          <Link
            href='https://twitter.com/nachoiacovino'
            isExternal
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            _hover={{ textDecoration: 'underline' }}
          >
            Nacho Iacovino
          </Link>
        </Text>
      </Footer>
    </Container>
  );
};

export default Index;
