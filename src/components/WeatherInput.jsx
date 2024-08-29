import React, { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const WeatherInput = () => {
  const weather = useWeather();
  const [error, setError] = useState(false);

  const handleSearchClick = () => {
    if (weather.citySearch.trim() === "") {
      setError(true);
    } else {
      setError(false);
      weather.fetchData();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  const style = {
    width: "600px",
    color: "black",
    bgcolor: "white",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
    },
  };
  return (
    <TextField
      sx={style}
      id="outlined-basic"
      label="Enter a City"
      variant="outlined"
      size="small"
      value={weather.citySearch}
      onChange={(e) => {
        weather.setCitySearch(e.target.value);
        setError(false);
      }}
      error={error}
      helperText={error ? "Please add a city" : ""}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default WeatherInput;
