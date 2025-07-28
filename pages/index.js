import React, { useState } from "react";
import styled from "styled-components";

// components
import Step1 from "../src/components/Step1";
import Step2 from "../src/components/Step2";
import Step3 from "../src/components/Step3";
import Step4 from "../src/components/Step4";
import ContinueAndGoBackButton from "../src/components/ContinueAndGoBackButton";

const StyledIndexPage = styled.div``;

function IndexPage(props) {
  // hooks
  const [step, setStep] = useState(1);

  // render
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  const goToNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const goToPreviousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <StyledIndexPage>
      <h2>Booking UI</h2>

      {renderStep()}

      <ContinueAndGoBackButton
        step={step}
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
      />
    </StyledIndexPage>
  );
}

export default IndexPage;
