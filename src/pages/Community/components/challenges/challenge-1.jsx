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
        <ClimateActionTitle>Multi-Agent Content Creation Project</ClimateActionTitle>
        <ClimateActionImage src={img} alt="AI for Climate Action" />
        <ClimateActionDescription>
          <strong>Introduction:</strong> In today's fast-paced world, people are often reluctant to spend extensive time sifting through numerous documents to write articles, social media content, research papers, and more. Crafting any of these types of writing is a significant undertaking. It requires considerable time to find, read and comprehend the necessary documents, then use them as references. This process can take months to complete, reflecting the dedication and commitment needed to produce high-quality content. This challenge extends beyond writing, affecting audio content creators and image creators as well, who also spend significant time researching and generating relevant, high-quality materials.

          <br /> <br /> 

          <strong>Problem Statement: </strong> As technology advances, there have been several developments in the field that aim to provide proper context for the input needed for writing research articles, social media content, and other forms of writing. However, significant gaps remain. For instance, a research paper must feature an attractive abstract, yet there are no products on the market that fully automate the writing of different sections based on a given prompt. Current technologies often source data from unreliable and prohibited sources like Wikipedia, which is strictly prohibited in academic writing. Moreover, writers frequently encounter challenges with grammar, style, and clarity while crafting their work, whether it be a research paper, article, or social media post. These issues can sometimes lead to unintentional copying from other sources, resulting in plagiarism—a major concern in all forms of content creation. Similarly, audio content creators and image creators face their own set of challenges. Producing high-quality audio and visual content requires significant time and effort to find and integrate relevant information and resources. For image creators, issues related to copyright can further complicate the process, as they must ensure that the images they use or create do not infringe on existing copyrights. Current tools often fall short in providing comprehensive support for these tasks, leaving creators to navigate complex processes largely on their own. Despite advancements, the available tools do not fully address the critical needs of writers, audio content creators, and image creators, underscoring the necessity for more advanced solutions in the field.


          <br /> <br />

          The objective of this project is to develop a comprehensive chatbot that automates and streamlines the creation of written, audio, and visual content. By assisting content creators in tasks such as writing, formatting, scriptwriting, voiceover generation, image creation, and editing, the chatbot aims.





          <ImpactList>
            <li>Project Goals:</li>
            <li>Develop a chatbot capable of generating high-quality content in multiple formats based on user prompts.</li>
            <li>Ensure the system is flexible enough to handle a wide range of topics and content types.</li>
            <li>Provide a user-friendly interface that facilitates easy interaction and customization of content.</li>
            <li>
              Help us better understand, mitigate, and adapt to climate change
              impacts.
            </li>
          </ImpactList>
        </ClimateActionDescription>
        <ClimateActionDescription>
          <strong>Open to All:</strong>Project Objectives
Develop a Multi-Modal Content Generation Chatbot
Ensure High-Quality Output Across Formats
Provide Customization and Personalization Features
Integrate Advanced AI Capabilities:
Focus on User Experience and Accessibility


Duration 
Week 1: Project Initiation, Planning, and market research
Week 2: Model development
Week 3: Testing, Refinement
Week 4: Report writing and Finalization

Technical Skills and Knowledge to be Gained:
Knowledge and Experience in AI model development for text, audio, image, and video generation.
Knowledge in multi-modal content generation integration.
Customization and personalization techniques.
Implementing Ethical AI and content generation considerations.
Building API  using Django and integration on Aws with Amazon API Gateway.
Deployment and Fine-Tuning on Aws Cloud/Azure.


        </ClimateActionDescription>
        <ApplyLink href="https://forms.gle/8na2REeK7pxXPKGn9" target="_blank">Apply for Challenge</ApplyLink>
      </Container>
    </ClimateActionContainer>
  );
};

export default Challenge1;
