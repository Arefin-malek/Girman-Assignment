import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const Search = () => {
  return (
    <>
      <Box width={"70vh"} margin={5}>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>
    </>
  );
};

export default Search;
