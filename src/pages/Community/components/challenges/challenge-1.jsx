import React from "react";
import styled from "styled-components";
import img from "../../img//mock.png"; 

const Container = styled.div`
  margin-top: 80px;
  padding: 10px;
  text-align: justify;
`;

const ClimateActionContainer = styled.div`
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
  margin-top: 2rem;
`;

const ImpactList = styled.ol`
  list-style: number;
  padding-left: 1.5rem;
  margin: 20px auto;
`;

const ApplyLink = styled.a`  
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #2563eb;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  &:hover {
    background-color: #1e40af;
  }
`;

const Challenge1 = () => {
  return (
    <ClimateActionContainer>
      <Container>
        <ClimateActionTitle>AI system for Habit Building using Recipes of Soft Skills</ClimateActionTitle>
        <ClimateActionImage src={img} alt="AI for Climate Action" />
        <ClimateActionDescription>
          <strong>Introduction:</strong> In the rapidly evolving landscape of financial planning, the need for personalized and adaptive strategies is essential to navigate the complexities of today's economic environment. Traditional financial planning methods often lack the agility required to address individual needs and preferences, leading to suboptimal outcomes. To bridge this gap, an innovative AI-based financial planner leveraging multi-agent architecture is proposed. This cutting-edge solution aims to enhance financial well-being by utilizing large language models (LLMs) to understand individual financial goals, risk tolerance, and market dynamics. Through a collaborative multi-agent approach, the planner will provide tailored recommendations, adapt to changing economic conditions, and empower users to make informed financial decisions. This forward-thinking solution aligns with the dynamic nature of modern financial landscapes, ushering in a transformative era in personal finance.

          <br /> <br /> 

          <strong>Problem Statement: </strong> In the contemporary financial landscape, individuals face challenges in achieving their financial goals due to the complexity of financial markets, changing economic conditions, and the need for personalized strategies. Traditional financial planning tools often lack the adaptability and personalization required to address individual financial aspirations effectively. As a result, there is a growing demand for an AI-based financial planner that can leverage LLMs and multi-agent architecture to understand and cater to the diverse financial needs of individuals.

          <br /> <br />

          The proposed AI financial planner seeks to address these challenges by providing a dynamic and personalized approach to financial planning. By employing multi-agent architecture, the system will be capable of analyzing diverse financial data, market trends, and individual preferences. It will collaboratively engage with users through intelligent conversations, extracting essential information to formulate personalized financial plans. The planner will continuously learn from user interactions, adapting its strategies to changing economic conditions and ensuring that users receive up-to-date and relevant financial advice.

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
        <ApplyLink href="https://docs.google.com/forms/d/e/1FAIpQLSd1ggnVtP4J5NyJk1b1CDTy_9596aad52uzUejYZqfVxIJ2Lw/viewform" target="_blank">Apply for Challenge</ApplyLink>
      </Container>
    </ClimateActionContainer>
  );
};

export default Challenge1;
