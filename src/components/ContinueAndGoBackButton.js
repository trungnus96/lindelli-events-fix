import React, { memo } from "react";
import styled from "styled-components";

const StyledContinueAndGoBackButtonStep3 = styled.div`
  margin-top: 16px;

  .continue {
    margin-bottom: 16px;
  }
`;

function ContinueAndGoBackButtonStep3(props) {
  // props
  const {
    step = 1,
    goToNextStep = () => {},
    goToPreviousStep = () => {},
  } = props;

  return (
    <StyledContinueAndGoBackButtonStep3>
      {step < 4 && (
        <button className="continue" onClick={goToNextStep}>
          Continue
        </button>
      )}

      {step > 1 && <button onClick={goToPreviousStep}>Go back</button>}
    </StyledContinueAndGoBackButtonStep3>
  );
}

export default ContinueAndGoBackButtonStep3;
