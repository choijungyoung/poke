import React, { useState } from 'react';
import styled from 'styled-components';

const FlipImageContainer = styled.div`
  perspective: 1000px;
`;

const FlipButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function FlipCard({ frontImage, backImage }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(prev => !prev);

  return (
    <FlipImageContainer>
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <img src={flipped ? backImage : frontImage} alt="Pokemon" />
      </div>
      <FlipButton onClick={handleFlip}>Flip</FlipButton>
    </FlipImageContainer>
  );
}

export default FlipCard;
