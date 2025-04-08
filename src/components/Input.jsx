import { Input } from "@chakra-ui/react";

const CustomInput = ({ type, placeholder }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      fontSize="lg"
      border="none"
      borderBottom="1px solid #999"
      borderRadius="0"
      px="0"
      _focus={{
        border: "none",
        borderBottom: "1px solid #999", // retain or remove as needed
        boxShadow: "none",
        outline: "none",
      }}
      _focusVisible={{
        outline: "none",
        boxShadow: "none",
      }}
    />
  );
};

export default CustomInput;
