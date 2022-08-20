import {
  faChevronDown,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import React, { useState } from "react";

const SearchBar = ({ searchField, setsearchField, theme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = useState("1");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
  };

  const handleSearch = (event) => {
    setsearchField(event.target.value);
  };

  const getText = (value) => `${value}kk`;
  return (
    <div className="search-bar-main-container">
      <div className="search-bar-box">
        <div className="search-bar-profile-count">
          <p>Profile (100)</p>
        </div>
        <div className="search-bar-input-box">
          <FontAwesomeIcon
            size="xl"
            className="search-bar-input-icon"
            icon={faMagnifyingGlass}
          />
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search Profile"
            onChange={handleSearch}
          ></input>
        </div>
        <button
          onClick={handleClick}
          className="search-bar-advance-filter-container"
        >
          <FontAwesomeIcon
            size="xl"
            className="search-bar-advance-filter-icon"
            icon={faFilter}
          />
          <p>Advance Filter</p>
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          style={{
            background: "rgba(0, 0, 0, 0.75)",
          }}
          PaperProps={
            theme === "dark-theme"
              ? {
                  style: {
                    backgroundColor: "#17181b",
                  },
                }
              : {
                  style: {
                    backgroundColor: "white",
                  },
                }
          }
        >
          <div className="search-bar-advance-filter-popup-container">
            <div className="search-bar-advance-filter-popup-section">
              <p>Filter Options</p>
            </div>
            <hr className="divider" />
            <div className="search-bar-advance-filter-popup-section">
              <p className="selectBox-label">Influencer's Industry</p>
              <Select
                value={age}
                onChange={handleChange}
                className="search-bar-advance-filter-popup-selectBox"
                IconComponent={() => (
                  <FontAwesomeIcon
                    size="xs"
                    className="selectBox-icon"
                    icon={faChevronDown}
                  />
                )}
                renderValue={() => (
                  <span className="selectBox-placeholder">Select Options</span>
                )}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
              </Select>
            </div>
            <div className="search-bar-advance-filter-popup-section">
              <p className="selectBox-label">Influencer's Country</p>
              <Select
                value={age}
                onChange={handleChange}
                className="search-bar-advance-filter-popup-selectBox"
                IconComponent={() => (
                  <FontAwesomeIcon
                    size="xs"
                    className="selectBox-icon"
                    icon={faChevronDown}
                  />
                )}
                renderValue={() => (
                  <span className="selectBox-placeholder">Select Options</span>
                )}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
              </Select>
            </div>
            <div className="search-bar-advance-filter-popup-section">
              <p className="selectBox-label">Audience's Country</p>
              <Select
                value={age}
                onChange={handleChange}
                className="search-bar-advance-filter-popup-selectBox"
                IconComponent={() => (
                  <FontAwesomeIcon
                    size="xs"
                    className="selectBox-icon"
                    icon={faChevronDown}
                  />
                )}
                renderValue={() => (
                  <span className="selectBox-placeholder">Select Options</span>
                )}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
              </Select>
            </div>
            <div className="search-bar-advance-filter-popup-section">
              <p className="selectBox-label">
                Influencer's Social Media Platform
              </p>
              <Select
                value={age}
                onChange={handleChange}
                className="search-bar-advance-filter-popup-selectBox"
                IconComponent={() => (
                  <FontAwesomeIcon
                    size="xs"
                    className="selectBox-icon"
                    icon={faChevronDown}
                  />
                )}
                renderValue={() => (
                  <span className="selectBox-placeholder">Select Options</span>
                )}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
              </Select>
            </div>
            <div className="search-bar-advance-filter-popup-section">
              <p className="selectBox-label">
                Influencer's Social Media Platform
              </p>
              <Box display="flex" flexDirection="column">
                <Slider
                  min={0}
                  max={6}
                  value={value}
                  marks={[
                    {
                      value: 0,
                      label: "1K",
                    },
                    {
                      value: 1,
                      label: "25K",
                    },
                    {
                      value: 2,
                      label: "50K",
                    },
                    {
                      value: 3,
                      label: "100K",
                    },
                    {
                      value: 4,
                      label: "250K",
                    },
                    {
                      value: 5,
                      label: "500K",
                    },
                    {
                      value: 6,
                      label: "1000K",
                    },
                  ]}
                  onChange={changeValue}
                  valueLabelDisplay="auto"
                  getAriaValueText={getText}
                />
              </Box>
            </div>
            <div className="search-bar-advance-filter-popup-section">
              <p className="selectBox-label">Influencer's Gender</p>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio className="radiuButton" />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio className="radiuButton" />}
                  label="Female"
                />
              </RadioGroup>
            </div>
            <div className="search-bar-advance-filter-popup-section search-bar-advance-filter-popup-section-button">
              <button className="search-bar-advance-filter-popup-button reset-btn">
                <p>Reset</p>
              </button>
              <button className="search-bar-advance-filter-popup-button">
                <p>Apply</p>
              </button>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default SearchBar;
