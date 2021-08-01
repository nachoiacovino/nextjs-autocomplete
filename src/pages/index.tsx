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
