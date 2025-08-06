import React, { useState } from "react";
import styled from "styled-components";

const StyledStep4 = styled.div`
  button {
    margin-top: 16px;
  }
`;

function Step4(props) {
  // hooks
  const [is_submitted, setIsSubmitted] = useState(false);

  // functions
  const submitAppointment = () => {
    // Logic to submit the appointment
    console.log("Appointment submitted");

    try {
      const book_appointment_event_payload = {
        first_name: "John",
        last_name: "Smith",
        email: "john@smith.com",
        service_name: "engagement_ring",
        appointment_date: "28-07-2025",
        appointment_time: "10:00 AM - 11:00 AM",
      };

      window.gtag("event", "submit_appointment", {
        appointment_source: "Brauz Booking",
      });

      console.log("Sending booking_submitted message to parent page");
      window.parent.postMessage({ event: "booking_submitted" }, "*");
    } catch (e) {
      console.log("Error submitting appointment", e);
    }

    alert("Appointment submitted successfully!");
    setIsSubmitted(true);
  };

  return (
    <StyledStep4>
      <h2>Step 4</h2>

      <div>Review your booking, and submit appointment</div>

      {is_submitted ? (
        <div>Appointment submitted successfully!</div>
      ) : (
        <button onClick={submitAppointment}>Submit appointment</button>
      )}
    </StyledStep4>
  );
}

export default Step4;
