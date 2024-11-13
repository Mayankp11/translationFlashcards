import { Heading, Highlight } from '@chakra-ui/react';

const AppHeader = () => {
  return (
    <Heading textAlign="center" mt={4} mb={4} fontFamily="Georgia" fontSize="7xl">
      <Highlight query="CARDS" styles={{ px: '2', py: '1', bg: 'yellow.200', rounded: 'full' }}>
        FlashThem
      </Highlight>
    </Heading>
  );
};

export default AppHeader;
