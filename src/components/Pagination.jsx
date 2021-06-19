import { Flex, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export const Pagination = ({ pageNo, setPageNo }) => {
  return (
    <Flex justify="space-between" align="center" p="8">
      <Button
        size="sm"
        isAttached={true}
        disabled={pageNo === 0 ? true : false}
        leftIcon={<ArrowBackIcon />}
        colorScheme="teal"
        variant="link"
        onClick={() => setPageNo(pageNo - 1)}
      >
        Previous
      </Button>
      <Button
        size="sm"
        isAttached={true}
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="link"
        onClick={() => setPageNo(pageNo + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};
