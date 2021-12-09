import React, { useState } from "react";
import dynamicForm from "../../data/dynamicForm.json";
import uniqid from "uniqid";
import { Typography, Stack, List, ListItem, ListItemText, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ListItems = ({ fields, setFields }) => {
  const [listFields] = useState(dynamicForm?.fields);

  const handleAddItem = ({ component, label, type, options }) => {
    const newField = {
      _uid: uniqid(),
      component,
      label,
      type,
      options,
    };
    setFields([...fields, newField]);
  };

  return (
    <Stack width="50%" sx={{ mr: 3 }}>
      <Typography sx={{ mb: 2 }} variant="h3" align="center">
        Form Items
      </Typography>
      <List sx={{ width: "100%" }}>
        {listFields.map((field) => (
          <ListItem key={field._uid}>
            <ListItemText primary={field.component} />
            <IconButton onClick={() => handleAddItem(field)} sx={{ width: "3rem", height: "3rem" }}>
              <AddIcon color="success" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ListItems;
