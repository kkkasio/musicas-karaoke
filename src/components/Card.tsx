import { Box, Text, Link as ChakraLink } from "@chakra-ui/layout";
import { SkeletonText } from "@chakra-ui/skeleton";
import { transition } from "@chakra-ui/styled-system";
import Link from 'next/link'
import slugify from 'slugify'

type CardProps = {
  isLoading: boolean;
  type?: 'cantor' | 'musica',
  data?: {
    id: string;
    cantor: string;
    musica: string
  }
}

export function Card({ isLoading = false, data, type = 'musica' }: CardProps) {
  return (
    <Box padding={6} boxShadow="lg" background="white" width="250px" >
      {isLoading && (
        <>
          <SkeletonText my={4} noOfLines={1} />
          <SkeletonText my={4} noOfLines={1} />
          <SkeletonText my={4} noOfLines={3} />
        </>
      )}
      {data && (
        <Box _hover={{ top: '-4px', transform: "scale(1.1)" }} transition="all .5s ease-out">
          <ChakraLink as={Link} href={`${slugify(data.cantor)}/${slugify(data.musica)}`} passHref>
            <Box as="a" display="flex" flexDir="column" alignItems="center">
              <Text fontSize="3xl" letterSpacing={8} fontWeight="600" color="green.600">{data.id}</Text>
              <Text my={4} fontSize="lg" fontWeight="400">
                {type === 'musica' ? data.musica : data.cantor}
              </Text>

              <Text noOfLines={[1, 2, 3]} fontSize='xs' textAlign="center" fontWeight="300">
                {type === 'musica' ? data.cantor : data.musica}
              </Text>
            </Box>
          </ChakraLink>
        </Box>

      )}

    </Box>
  )
}