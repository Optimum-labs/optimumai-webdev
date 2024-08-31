import React from "react";
import styled from "styled-components";
import img from "../../img/financial-plan.jpeg";
import leadImage from "../../img/lead.jpeg"; // Add the correct path for lead images
import leadImage2 from "../../img/lead2.jpeg"; // Add the correct path for lead images

const Container = styled.div`
  margin-top: 30px;
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
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #2563eb;
  color: #fff;
  font-weight: 500;
  &:hover {
    background-color: #1e40af;
  }
`;

const SectionFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px; /* Space between the sections */
`;

const SectionLeft = styled.div`
  flex: 1; /* Takes up half the width */
`;

const SectionRight = styled.div`
  flex: 1; /* Takes up half the width */
`;

const ProjectLeadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LeadImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
`;

const LeadDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeadName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const LeadDesignation = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const LinkedInLink = styled.a`
  font-size: 0.9rem;
  color: #2563eb;
  &:hover {
    text-decoration: underline;
  }
`;

const LeadSummary = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const AIForHealthcareAccessibility = () => {
  return (
    <HealthcareContainer>
      <Container>
        <HealthcareTitle>
          AI Financial Planner using Multi-Agent Architecture
        </HealthcareTitle>
        <HealthcareImage src={img} alt="AI Financial Planner" />
        <HealthcareDescription>
          <strong>Introduction: </strong> <br /> In the rapidly evolving
          landscape of financial planning, the need for personalized and
          adaptive strategies is essential to navigate the complexities of
          today's economic environment. Traditional financial planning methods
          often lack the agility required to address individual needs and
          preferences, leading to suboptimal outcomes. To bridge this gap, an
          innovative AI-based financial planner leveraging multi-agent
          architecture is proposed. This cutting-edge solution aims to enhance
          financial well-being by utilizing large language models (LLMs) to
          understand individual financial goals, risk tolerance, and market
          dynamics. Through a collaborative multi-agent approach, the planner
          will provide tailored recommendations, adapt to changing economic
          conditions, and empower users to make informed financial decisions.
          This forward-thinking solution aligns with the dynamic nature of
          modern financial landscapes, ushering in a transformative era in
          personal finance.
        </HealthcareDescription>
        <HealthcareDescription>
          <strong>Problem Statement: </strong> <br />
          In the contemporary financial landscape, individuals face challenges
          in achieving their financial goals due to the complexity of financial
          markets, changing economic conditions, and the need for personalized
          strategies. Traditional financial planning tools often lack the
          adaptability and personalization required to address individual
          financial aspirations effectively. As a result, there is a growing
          demand for an AI-based financial planner that can leverage LLMs and
          multi-agent architecture to understand and cater to the diverse
          financial needs of individuals.
          <br />
          <br />
          The proposed AI financial planner seeks to address these challenges by
          providing a dynamic and personalized approach to financial planning.
          By employing multi-agent architecture, the system will be capable of
          analyzing diverse financial data, market trends, and individual
          preferences. It will collaboratively engage with users through
          intelligent conversations, extracting essential information to
          formulate personalized financial plans. The planner will continuously
          learn from user interactions, adapting its strategies to changing
          economic conditions and ensuring that users receive up-to-date and
          relevant financial advice.
          <br /> <br />
          <strong>Objectives and Goals: </strong>
          <ImpactList>
            <li>
              Develop an AI financial planner using multi-agent architecture
              that understands and adapts to individual financial goals, risk
              tolerance, and preferences.
            </li>
            <li>
              Utilize large language models to analyze financial data, market
              trends, and economic indicators for informed decision-making.
            </li>
            <li>
              Implement a collaborative multi-agent system that engages users in
              intelligent conversations to extract relevant financial
              information.
            </li>
            <li>
              Provide personalized financial recommendations and strategies
              tailored to individual needs.
            </li>
            <li>
              Ensure adaptability to changing economic conditions by
              continuously learning from user interactions and market dynamics.
            </li>
          </ImpactList>
          <br />
          <strong>Learning Outcomes:</strong> <br /> Participants in this
          project will gain expertise in:
          <br />
          <ImpactList>
            <li>
              Large Language Models and their application in financial analysis.
            </li>
            <li>
              Multi-agent architecture for collaborative decision-making in
              financial planning.
            </li>
            <li>
              Data analysis and interpretation of financial data and market
              trends.
            </li>
            <li>Personalized recommendation systems for financial planning.</li>
            <li>
              Model deployment and integration into user-friendly interfaces.
            </li>
          </ImpactList>
          <br />
          <b>Who Are We Looking For?</b> <br />
          We are looking for individuals with the following backgrounds:
          <ImpactList>
            <li>AI and Machine Learning Enthusiasts</li>
            <li>Software Developers with expertise in Multi-Agent Systems</li>
            <li>
              Financial Analysts or Planners with an interest in AI applications
            </li>
          </ImpactList>
          <br />
          <b>What Are the Deliverables from the Challenge?</b> <br />
          Participants are expected to deliver:
          <ImpactList>
            <li>AI Financial Planner using multi-agent architecture.</li>
            <li>
              Integration of LLMs for financial data analysis and
              decision-making.
            </li>
            <li>
              User-friendly interface for interaction with the AI financial
              planner.
            </li>
          </ImpactList>
          <br />
          <b>What Skills Will You Learn in This Challenge?</b> <br />
          Participants will acquire skills in:
          <ImpactList>
            <li>Multi-agent architecture design and implementation.</li>
            <li>Integration of LLMs for financial analysis.</li>
            <li> Personalized recommendation systems.</li>
            <li>User interface design and development.</li>
            <li>Continuous learning and adaptation in AI systems.</li>
          </ImpactList>
          <br />
          <strong>Timeline:</strong> <br />
          <li>
            Week 1: Understanding the Problem Statement, Literature Review, and
            Defining Key Metrics
          </li>
          <li>
            Week 2: Designing Multi-Agent Architecture and LLM Integration
          </li>
          <li>Week 3: Developing the AI Financial Planner Prototype</li>
          <li>Week 4: Testing, Fine-Tuning, and User Interface Design</li>
          <li>Week 5: Finalizing Project Deliverables and Presentations.</li>
        </HealthcareDescription>
        <SectionFlexContainer>
          {/* Left Section: Project Duration */}
          <SectionLeft>
            <HealthcareDescription>
              <strong>Project Duration:</strong> <br />
              <li>Week 1: Understanding the Problem Statement, Literature Review, and Defining Key Metrics</li>
              <li>Week 2: Designing Multi-Agent Architecture and LLM Integration</li>
              <li>Week 3: Developing the AI Financial Planner Prototype</li>
              <li>Week 4: Testing, Fine-Tuning, and User Interface Design</li>
              <li>Week 5: Finalizing Project Deliverables and Presentations</li>
            </HealthcareDescription>
          </SectionLeft>

          {/* Right Section: Project Leads */}
          <SectionRight>
            <HealthcareDescription>
              <strong>Project Leads:</strong>
              <ProjectLeadsContainer>
                <div>
                  <LeadImage src={leadImage} alt="Project Lead 1" />
                  <LeadDetails>
                    <LeadName>Vijaya Krishna</LeadName>
                    <LeadDesignation>Senior AI Researcher</LeadDesignation>
                    <LinkedInLink href="https://www.linkedin.com/in/vijaya-krishna-k-139487297/" target="_blank">
                      Connect on LinkedIn
                    </LinkedInLink>
                    <LeadSummary>
                      Vijaya Krishna is a seasoned AI researcher with extensive experience in developing and deploying AI models. He has led multiple projects focused on advanced machine learning techniques, contributing to both academia and industry with innovative solutions.
                    </LeadSummary>
                  </LeadDetails>
                </div>
                <div>
                  <LeadImage src={leadImage2} alt="Project Lead 2" />
                  <LeadDetails>
                    <LeadName>Swati Garg</LeadName>
                    <LeadDesignation>AI Researcher & Aws Architect</LeadDesignation>
                    <LinkedInLink href="https://www.linkedin.com/in/johndoe/" target="_blank">
                      Connect on LinkedIn
                    </LinkedInLink>
                    <LeadSummary>
                    Ph.D. in Physics with over 3 years of postdoctoral research experience, complemented
                    by 6+ months as a Data Analyst/Scientist. Demonstrates strong analytical skills in 
                    collecting, organizing, analyzing, and disseminating large datasets with precision.
                    Expertise includes feature engineering, machine learning, model building and deployment,
                    and computer vision techniques. Proficient in creating user-friendly interfaces with Flask
                    and Streamlit. Published over 15 papers in international journals and conferences. Also 
                    skilled as an AWS Data Architect, with experience in developing data pipelines, API
                    implementation, and data modeling.                    
                    </LeadSummary>
                  </LeadDetails>
                </div>
              </ProjectLeadsContainer>
            </HealthcareDescription>
          </SectionRight>
        </SectionFlexContainer>
        <br /> <br />
        <ApplyLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSfCEBH_cL3zAyR3g96-MB3K02Athgiz_VxyhHvNXNbppNnOEQ/viewform"
          target="_blank"
        >
          Apply for Challenge
        </ApplyLink>
      </Container>
    </HealthcareContainer>
  );
};

export default AIForHealthcareAccessibility;
