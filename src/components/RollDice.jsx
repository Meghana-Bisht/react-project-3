import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice,rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/img/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
  }
`;
