import { Flex, Image } from "@chakra-ui/react";

const WorkRow = () => {
  return (
    <Flex flexDirection="column" gap={5}>
      <Image
        src="/work-row-1.png"
        alt=""
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <Image
        src="/work-row-2.png"
        alt=""
        height="100%"
        width="100%"
        objectFit="cover"
        pb={20}
      />
    </Flex>
  );
};

export default WorkRow;
