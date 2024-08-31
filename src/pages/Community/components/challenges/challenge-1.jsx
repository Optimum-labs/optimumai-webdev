import React from "react";
import styled from "styled-components";
import img from "../../img/mock.png";
import leadImage from "../../img/lead.jpeg"; // Add the image path for the project lead

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
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #2d3748;
`;

const ClimateActionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ImpactList = styled.ol`
  list-style: decimal;
  padding-left: 1.5rem;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const ProjectLeadsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const LeadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;

const LeadDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeadName = styled.h4`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`;

const LeadDesignation = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  margin: 5px 0;
`;

const LeadSummary = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-top: 10px;
`;

const LinkedInLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
const ApplyLink = styled.a`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #2563eb;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background-color: #1e40af;
  }
`;

const Challenge1 = () => {
  return (
    <ClimateActionContainer>
      <Container>
        <ClimateActionTitle>Multi-Agent Content Creation Project</ClimateActionTitle>
        <ClimateActionImage src={img} alt="AI for Climate Action" />
        <ClimateActionDescription>
          <SectionTitle>Introduction</SectionTitle>
          In today's fast-paced world, people are often reluctant to spend extensive time sifting through numerous documents to write articles, social media content, research papers, and more. Crafting any of these types of writing is a significant undertaking. It requires considerable time to find, read, and comprehend the necessary documents, then use them as references. This process can take months to complete, reflecting the dedication and commitment needed to produce high-quality content. This challenge extends beyond writing, affecting audio content creators and image creators as well, who also spend significant time researching and generating relevant, high-quality materials.
        </ClimateActionDescription>
        <ClimateActionDescription>
          <SectionTitle>Problem Statement</SectionTitle>
          As technology advances, there have been several developments in the field that aim to provide proper context for the input needed for writing research articles, social media content, and other forms of writing. However, significant gaps remain. For instance, a research paper must feature an attractive abstract, yet there are no products on the market that fully automate the writing of different sections based on a given prompt. Current technologies often source data from unreliable and prohibited sources like Wikipedia, which is strictly prohibited in academic writing. Moreover, writers frequently encounter challenges with grammar, style, and clarity while crafting their work, whether it be a research paper, article, or social media post. These issues can sometimes lead to unintentional copying from other sources, resulting in plagiarism—a major concern in all forms of content creation. Similarly, audio content creators and image creators face their own set of challenges. Producing high-quality audio and visual content requires significant time and effort to find and integrate relevant information and resources. For image creators, issues related to copyright can further complicate the process, as they must ensure that the images they use or create do not infringe on existing copyrights. Current tools often fall short in providing comprehensive support for these tasks, leaving creators to navigate complex processes largely on their own. Despite advancements, the available tools do not fully address the critical needs of writers, audio content creators, and image creators, underscoring the necessity for more advanced solutions in the field.
        </ClimateActionDescription>
        <ClimateActionDescription>
          <SectionTitle>Project Goals</SectionTitle>
          The objective of this project is to develop a comprehensive chatbot that automates and streamlines the creation of written, audio, and visual content. By assisting content creators in tasks such as writing, formatting, scriptwriting, voiceover generation, image creation, and editing, the chatbot aims to:
          <ImpactList>
            <li>Generate high-quality content in multiple formats based on user prompts.</li>
            <li>Ensure the system is flexible enough to handle a wide range of topics and content types.</li>
            <li>Provide a user-friendly interface that facilitates easy interaction and customization of content.</li>
            <li>Help us better understand, mitigate, and adapt to climate change impacts.</li>
          </ImpactList>
        </ClimateActionDescription>
        <ClimateActionDescription>
          <SectionTitle>Project Objectives</SectionTitle>
          <ImpactList>
            <li>Develop a Multi-Modal Content Generation Chatbot.</li>
            <li>Ensure High-Quality Output Across Formats.</li>
            <li>Provide Customization and Personalization Features.</li>
            <li>Integrate Advanced AI Capabilities.</li>
            <li>Focus on User Experience and Accessibility.</li>
          </ImpactList>
        </ClimateActionDescription>
        <SectionTitle>What Skills Will You Learn in This Challenge?</SectionTitle>
        <ClimateActionDescription>
          AI model development for text, audio, image, and video generation.<br />
          Multi-modal content generation integration.<br />
          Customization and personalization techniques.<br />
          Implementing Ethical AI and content generation considerations.<br />
          Building APIs using Django and integration on AWS with Amazon API Gateway.<br />
          Deployment and Fine-Tuning on AWS Cloud/Azure.<br />
        </ClimateActionDescription>
        <ClimateActionDescription>
          <SectionTitle>Project Duration - 4 Weeks (Starts from 15th Sept 2024)</SectionTitle>
{/*             <a href="https://docs.google.com/document/d/1K2kDCddwMrx0NLt6cokDdbyfsQzyuTWbIrIs1IrahiQ/edit?usp=sharing" style={{ marginLeft: '10px', fontSize: '1rem', color: '#2563eb' }}>
              View Problem Statement
            </a></SectionTitle> */}
          <ImpactList>
            <li>Week 1: Project Initiation, Planning, and Market Research</li>
            <li>Week 2: Designing Multi-Agent Architecture and LLM Integration</li>
            <li>Week 3: Developing the AI Content Creation Prototype, Testing and Refinement</li>
            <li>Week 4: Project Report Submission with a Final Demo.</li>
          </ImpactList>
        </ClimateActionDescription>
        <ButtonContainer>
          <ApplyLink href="https://docs.google.com/document/d/1K2kDCddwMrx0NLt6cokDdbyfsQzyuTWbIrIs1IrahiQ/edit?usp=sharing" target="_blank">
          View Problem Statement
          </ApplyLink>
          <ApplyLink href="https://forms.gle/8na2REeK7pxXPKGn9" target="_blank">
          Apply for Challenge
          </ApplyLink>
        </ButtonContainer>
        <ClimateActionDescription>
          <SectionTitle>Project Leads</SectionTitle>
          <ProjectLeadsContainer>
            <LeadImage src={leadImage} alt="Project Lead" />
            <LeadDetails>
              <LeadName>Vijaya Krishna</LeadName>
              <LeadDesignation>Senior AI Researcher</LeadDesignation><LeadSummary>
                Detail-oriented data scientist specializing in GenAI Product Development. <br />
                Proficient in utilizing Python for data extraction, statistical modeling, <br />
                and generating actionable insights. Experienced in uncovering market trends and <br />
                consumer behavior patterns through advanced analytics. Skilled in communicating  <br />
                findings to support strategic business decisions. <br />
              </LeadSummary>
              <LinkedInLink href="https://www.linkedin.com/in/vijaya-krishna-k-139487297/" target="_blank">
                Connect on LinkedIn
              </LinkedInLink>
            </LeadDetails>
          </ProjectLeadsContainer>
        </ClimateActionDescription>
      </Container>
    </ClimateActionContainer>
  );
};

export default Challenge1;
