import * as React from 'react';
import { VStack, Link, Flex, Heading, Text } from '@chakra-ui/react';
import { Link as DomLink } from 'react-router-dom';

import siteConfig from '../../site-config';

const Footer = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      direction={['column-reverse', 'row']}
      align={['center', 'normal']}
    >
      <Flex
        justify="space-between"
        h={['5rem', '11rem']}
        flexGrow={1}
        direction="column"
        alignItems={['center', 'flex-start']}
      >
        <DomLink to="/">
          <Link fontWeight="extrabold" fontSize="lg" variant="link">
            {siteConfig.title}
          </Link>
        </DomLink>
        <Text> &copy; {siteConfig.footer.copyright}</Text>
      </Flex>
      {siteConfig.footer.rotes.map(route => (
        <VStack
          align="left"
          flexGrow={1}
          direction="column"
          mb={['4rem', 0]}
          alignItems={['center', 'flex-start']}
        >
          <Heading fontSize="lg">{route.heading}</Heading>
          {route.routes.map(([text, href]) => (
            <DomLink key={text} to={href}>
              <Link p={0}>{text}</Link>
            </DomLink>
          ))}
        </VStack>
      ))}
    </Flex>
  );
};

export default Footer;
