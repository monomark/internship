import React, { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function Search() {
  const [values, setValues] = useState({
    field: "",
  });

  const handleKeyDown = (evt: any) => {
    if (evt.keyCode === 13) {
      alert(evt.target.value);
    }
  };

  function inputChangeValue({ target: { name, value } }: any) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleClick = () => {
    alert(values.field);
  };

  return (
    <InputGroup width="340px" style={{ marginLeft: "900px" }}>
      <Input
        pr="50px"
        placeholder="Type something"
        name="field"
        onKeyDown={handleKeyDown}
        onChange={inputChangeValue}
        onClick={handleClick}
        value={values.field}
      />
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
