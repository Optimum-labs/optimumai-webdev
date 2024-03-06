import React from "react";
import styled from "styled-components";
import img from "../../img/mock.png"; // Import the image

const Container = styled.div`
  padding: 40px;
`;

const HealthcareContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9fafb; /* Light gray background */
  color: #1a202c; /* Dark gray text color */
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  /* Tailwind CSS classes */
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const HealthcareTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HealthcareImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

const HealthcareDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ImpactList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`;

const ApplyLink = styled.a`
  background-color: lightblue;
  padding: 10px 20px;
  border-radius: 8px;
`;

const AIForHealthcareAccessibility = () => {
  return (
    <HealthcareContainer>
      <Container>
        <HealthcareTitle>AI for Healthcare Accessibility</HealthcareTitle>
        <HealthcareImage src={img} alt="AI for Healthcare Accessibility" />
        <HealthcareDescription>
          <strong>Challenge Overview:</strong> AI for Healthcare Accessibility is a global innovation challenge aimed at identifying and developing AI solutions to improve access to healthcare in underserved communities. We invite individuals, teams, and organizations to use their AI expertise to address the world's most pressing healthcare accessibility issues. 
        </HealthcareDescription>
        <HealthcareDescription>
          <strong>Potential Impact:</strong>
          <ImpactList>
            <li>Increase access to healthcare services for remote populations.</li>
            <li>Improve the accuracy and efficiency of medical diagnoses.</li>
            <li>Reduce healthcare costs and resource burden.</li>
            <li>Empower individuals to take control of their health.</li>
          </ImpactList>
        </HealthcareDescription>
        <ApplyLink href="#">Apply for Challenge</ApplyLink>
      </Container>
    </HealthcareContainer>
  );
};

export default AIForHealthcareAccessibility;
