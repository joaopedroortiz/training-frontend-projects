import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const HeaderBox = styled.div`
  height: 90px;
  width: 100%;
  background-color: #c0bebe;
  margin-bottom: 30px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const InsideHeaderBox = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

function Header() {
  return (
    <HeaderBox>
      <InsideHeaderBox>
        <div></div>
        <h3>My Tasks</h3>
        <Link to="/Add">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#686e6b",
              ":hover": { backgroundColor: "#686e6b" },
            }}
            type="submit"
          >
            <AddIcon />
          </Button>
        </Link>
      </InsideHeaderBox>
    </HeaderBox>
  );
}

export default Header;
