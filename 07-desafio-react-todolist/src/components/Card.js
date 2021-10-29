import React from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BasicModal from "./Modal";
const Item = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 95%;
  max-width: 800px;
  background-color: white;
  margin-top: 20px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  min-width: 220px;
  width: 45%;
`;

function Card({ title, description, id, setState }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const history = useHistory();
  async function deletation() {
    try {
      const response = await axios.delete(
        `https://otterwise-fake-api.herokuapp.com/tasks/04p06sl/${id}`
      );
      setState(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Item>
      <BasicModal open={open} setOpen={setOpen} deleter={deletation} />
      <TextBox>
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </TextBox>
      <Divider orientation="vertical" />
      <TextBox>
        <p>{description}</p>
      </TextBox>
      <Divider orientation="vertical" />
      <Icons>
        <DeleteIcon onClick={() => setOpen(true)} color="primary" />
        <EditIcon color="primary" onClick={() => history.push(`/Edit/${id}`)} />
      </Icons>
    </Item>
  );
}

export default Card;
