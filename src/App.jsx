import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import ListItems from "./components/ListItems";
import Form from "./components/Form";

const App = () => {
  const [fields, setFields] = useState([]);

  return (
    <Container>
      <Stack direction="row" width="100%">
        <ListItems fields={fields} setFields={setFields} />
        <Form fields={fields} setFields={setFields} />
      </Stack>
    </Container>
  );
};

export default App;
