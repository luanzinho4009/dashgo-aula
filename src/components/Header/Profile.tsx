import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luan Victor</Text>
          <Text color="gray.300" fontSize="small">
            luan4009@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Luan Victor" />
    </Flex>
  );
}
