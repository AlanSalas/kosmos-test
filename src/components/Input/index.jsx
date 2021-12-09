import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Input = ({ ...restProps }) => {
  switch (restProps.type) {
    case "text":
      return <TextField sx={{ mb: 2 }} variant="outlined" fullWidth label={restProps.label} />;

    case "select":
      return (
        <TextField sx={{ mb: 2 }} variant="outlined" fullWidth label={restProps.label} select>
          {restProps.options.map((option) => (
            <MenuItem key={option.name}>{option.name}</MenuItem>
          ))}
        </TextField>
      );

    case "radio":
      return (
        <FormControl sx={{ mb: 2 }} component="fieldset">
          <FormLabel component="legend">{restProps.label}</FormLabel>
          <RadioGroup>
            {restProps.options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );

    default:
      break;
  }
};

export default Input;
