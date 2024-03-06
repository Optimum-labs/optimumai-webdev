import React from "react";
import styled from "styled-components";
import img from "../../img/free-mock.png"; // Import the image

const Container = styled.div`
  padding: 40px;
`;

const ClimateActionContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9fafb; /* Light gray background */
  color: #1a202c; /* Dark gray text color */
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  /* Tailwind CSS classes */
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const ClimateActionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ClimateActionImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 10px;
  border-radius: 10px;
`;

const ClimateActionDescription = styled.p`
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

const AIForClimateAction = () => {
  return (
    <ClimateActionContainer>
      <Container>
        <ClimateActionTitle>AI for Climate Action</ClimateActionTitle>
        <ClimateActionImage src={img} alt="AI for Climate Action" />
        <ClimateActionDescription>
          <strong>Challenge Overview:</strong> The AI for Climate Action
          challenge invites individuals, organizations, and academic
          institutions to develop innovative and scalable solutions using
          Artificial Intelligence (AI) to address the pressing issue of climate
          change. We seek solutions that can:
          <ImpactList>
            <li>Reduce greenhouse gas emissions.</li>
            <li>Enhance carbon sequestration.</li>
            <li>Support climate adaptation and resilience.</li>
            <li>
              Help us better understand, mitigate, and adapt to climate change
              impacts.
            </li>
          </ImpactList>
        </ClimateActionDescription>
        <ClimateActionDescription>
          <strong>Open to All:</strong> We encourage submissions from all over the world and
          diverse backgrounds, including data scientists, researchers, students,
          and anyone with a passion for tackling climate change. We particularly
          welcome solutions applicable in low-resource settings and addressing
          the needs of vulnerable communities.
        </ClimateActionDescription>
        <ApplyLink href="#">Apply for Challenge</ApplyLink>
      </Container>
    </ClimateActionContainer>
  );
};

export default AIForClimateAction;
