import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent='center'
    alignItems='center'
    mt='150px'
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    bgClip='text'
  >
    <Heading fontSize='6vw'>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'Countries Autocomplete',
};
