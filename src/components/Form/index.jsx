import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FormItem from "../FormItem";

const Form = ({ fields, setFields }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Typography sx={{ mb: 2 }} variant="h3" align="center">
        Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack>
          {fields.map((field) => (
            <FormItem key={field._uid} {...field} fields={fields} setFields={setFields} />
          ))}
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
