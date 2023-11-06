import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess then 2 point will be dedcuted </li>
      </ul>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  ul{
    list-style: none;
    margin-top:24px ;
  }
`;
