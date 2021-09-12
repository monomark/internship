import React from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function Search() {
  const handleKeyDown = (evt: any) => {
    if (evt.keyCode === 13) {
      alert(evt.target.value);
    }
  };

  return (
    <InputGroup width="340px" style={{ marginLeft: "900px" }}>
      <Input pr="50px" placeholder="Type something" onKeyDown={handleKeyDown} />
      <InputRightElement width="80px">
        <Button
          size="sm"
          style={{
            backgroundColor: "#FA4993",
            color: "white",
            fontSize: "14px",
          }}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;
