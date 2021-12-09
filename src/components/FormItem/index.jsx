import React from "react";
import Input from "../Input";
import { Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FormItem = ({ fields, setFields, ...restProps }) => {
  const handleDeleteItem = (id) => {
    const newFields = fields.filter((field) => field._uid !== id);
    setFields(newFields);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Input {...restProps} />
      <IconButton
        onClick={() => handleDeleteItem(restProps._uid)}
        sx={{ width: "3rem", height: "3rem", ml: 2 }}
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Stack>
  );
};

export default FormItem;
