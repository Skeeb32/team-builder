import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  width: 380px;
  height: 150px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 10px auto;
`;
const Title = styled.div`
  font-size: 18px;
  border-bottom: 1px solid lightgrey;
`;

const CardContent = styled.div`
  display: flex;
  text-align: left;
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
`

const MembersList = props => {
  return (
    <Card>
      <Title>{props.info.name}</Title>
      <CardContent>
        <CardImage src={props.info.image} />
        <div>
          <div>Email: {props.info.email}</div>
          <div>Role: {props.info.role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MembersList;