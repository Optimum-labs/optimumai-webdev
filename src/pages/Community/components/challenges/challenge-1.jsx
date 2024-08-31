// import React from "react";
// import styled from "styled-components";
// import img from "../../img/mock.png";
// import leadImage from "../../img/lead.jpeg"; // Add the image path for the project lead
// import leadImage2 from "../../img/lead2.jpeg"; // Add the image path for the second project lead


// const Container = styled.div`
//   margin-top: 80px;
//   padding: 10px;
//   text-align: justify;
// `;

// const ClimateActionContainer = styled.div`
//   margin: 0 auto;
//   padding: 2rem;
//   background-color: #f9fafb; /* Light gray background */
//   color: #1a202c; /* Dark gray text color */
//   border-radius: 0.5rem;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   @media (min-width: 640px) {
//     padding: 2.5rem;
//   }
//   @media (min-width: 1024px) {
//     padding: 3rem;
//   }
// `;

// const ClimateActionTitle = styled.h2`
//   font-size: 2.5rem;
//   text-align: center;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// const ClimateActionImage = styled.img`
//   width: 100%;
//   max-height: 400px;
//   object-fit: cover;
//   margin-bottom: 1rem;
//   border-radius: 10px;
// `;

// const SectionTitle = styled.h3`
//   font-size: 1.8rem;
//   font-weight: 500;
//   margin-top: 2rem;
//   margin-bottom: 1rem;
//   color: #2d3748;
// `;

// const ClimateActionDescription = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.6;
//   margin-bottom: 1rem;
// `;

// const ImpactList = styled.ol`
//   list-style: decimal;
//   padding-left: 1.5rem;
//   margin: 20px 0;
// `;

// const ButtonContainer = styled.div`
//   margin-top: 20px;
//   display: flex;
//   gap: 10px;
// `;

// const ProjectLeadsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 40px;
// `;

// const LeadImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin-right: 20px;
//   object-fit: cover;
// `;

// const LeadDetails = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const LeadName = styled.h4`
//   font-size: 1.5rem;
//   margin: 0;
//   font-weight: 600;
// `;

// const LeadDesignation = styled.p`
//   font-size: 1.1rem;
//   color: #4a5568;
//   margin: 5px 0;
// `;

// const LeadSummary = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
//   color: #4a5568;
//   margin-top: 10px;
//   white-space: pre-wrap; /* This preserves the formatting of line breaks */
// `;

// const LinkedInLink = styled.a`
//   color: #2563eb;
//   text-decoration: none;
//   font-size: 1rem;
//   &:hover {
//     text-decoration: underline;
//   }
// `;
// const ApplyLink = styled.a`
//   padding: 10px 20px;
//   border-radius: 8px;
//   background-color: #2563eb;
//   color: #fff;
//   font-weight: 500;
//   margin-top: 20px;
//   display: inline-block;
//   text-decoration: none;
//   &:hover {
//     background-color: #1e40af;
//   }
// `;

// const Challenge1 = () => {
//   return (
//     <ClimateActionContainer>
//       <Container>
//         <ClimateActionTitle>Multi-Agent Content Creation Project</ClimateActionTitle>
//         <ClimateActionImage src={img} alt="AI for Climate Action" />
//         <ClimateActionDescription>
//           <SectionTitle>Introduction</SectionTitle>
//           In today's fast-paced world, people are often reluctant to spend extensive time sifting through numerous documents to write articles, social media content, research papers, and more. Crafting any of these types of writing is a significant undertaking. It requires considerable time to find, read, and comprehend the necessary documents, then use them as references. This process can take months to complete, reflecting the dedication and commitment needed to produce high-quality content. This challenge extends beyond writing, affecting audio content creators and image creators as well, who also spend significant time researching and generating relevant, high-quality materials.
//         </ClimateActionDescription>
//         <ClimateActionDescription>
//           <SectionTitle>Problem Statement</SectionTitle>
//           As technology advances, there have been several developments in the field that aim to provide proper context for the input needed for writing research articles, social media content, and other forms of writing. However, significant gaps remain. For instance, a research paper must feature an attractive abstract, yet there are no products on the market that fully automate the writing of different sections based on a given prompt. Current technologies often source data from unreliable and prohibited sources like Wikipedia, which is strictly prohibited in academic writing. Moreover, writers frequently encounter challenges with grammar, style, and clarity while crafting their work, whether it be a research paper, article, or social media post. These issues can sometimes lead to unintentional copying from other sources, resulting in plagiarism—a major concern in all forms of content creation. Similarly, audio content creators and image creators face their own set of challenges. Producing high-quality audio and visual content requires significant time and effort to find and integrate relevant information and resources. For image creators, issues related to copyright can further complicate the process, as they must ensure that the images they use or create do not infringe on existing copyrights. Current tools often fall short in providing comprehensive support for these tasks, leaving creators to navigate complex processes largely on their own. Despite advancements, the available tools do not fully address the critical needs of writers, audio content creators, and image creators, underscoring the necessity for more advanced solutions in the field.
//         </ClimateActionDescription>
//         <ClimateActionDescription>
//           <SectionTitle>Project Goals</SectionTitle>
//           The objective of this project is to develop a comprehensive chatbot that automates and streamlines the creation of written, audio, and visual content. By assisting content creators in tasks such as writing, formatting, scriptwriting, voiceover generation, image creation, and editing, the chatbot aims to:
//           <ImpactList>
//             <li>Generate high-quality content in multiple formats based on user prompts.</li>
//             <li>Ensure the system is flexible enough to handle a wide range of topics and content types.</li>
//             <li>Provide a user-friendly interface that facilitates easy interaction and customization of content.</li>
//             <li>Help us better understand, mitigate, and adapt to climate change impacts.</li>
//           </ImpactList>
//         </ClimateActionDescription>
//         <ClimateActionDescription>
//           <SectionTitle>Project Objectives</SectionTitle>
//           <ImpactList>
//             <li>Develop a Multi-Modal Content Generation Chatbot.</li>
//             <li>Ensure High-Quality Output Across Formats.</li>
//             <li>Provide Customization and Personalization Features.</li>
//             <li>Integrate Advanced AI Capabilities.</li>
//             <li>Focus on User Experience and Accessibility.</li>
//           </ImpactList>
//         </ClimateActionDescription>
//         <SectionTitle>What Skills Will You Learn in This Challenge?</SectionTitle>
//         <ClimateActionDescription>
//           AI model development for text, audio, image, and video generation.<br />
//           Multi-modal content generation integration.<br />
//           Customization and personalization techniques.<br />
//           Implementing Ethical AI and content generation considerations.<br />
//           Building APIs using Django and integration on AWS with Amazon API Gateway.<br />
//           Deployment and Fine-Tuning on AWS Cloud/Azure.<br />
//         </ClimateActionDescription>
//         <ClimateActionDescription>
//           <SectionTitle>Project Duration - 4 Weeks (Starts from 15th Sept 2024)</SectionTitle>
// {/*             <a href="https://docs.google.com/document/d/1K2kDCddwMrx0NLt6cokDdbyfsQzyuTWbIrIs1IrahiQ/edit?usp=sharing" style={{ marginLeft: '10px', fontSize: '1rem', color: '#2563eb' }}>
//               View Problem Statement
//             </a></SectionTitle> */}
//           <ImpactList>
//             <li>Week 1: Project Initiation, Planning, and Market Research</li>
//             <li>Week 2: Designing Multi-Agent Architecture and LLM Integration</li>
//             <li>Week 3: Developing the AI Content Creation Prototype, Testing and Refinement</li>
//             <li>Week 4: Project Report Submission with a Final Demo.</li>
//           </ImpactList>
//         </ClimateActionDescription>
//         <ButtonContainer>
//           <ApplyLink href="https://docs.google.com/document/d/1K2kDCddwMrx0NLt6cokDdbyfsQzyuTWbIrIs1IrahiQ/edit?usp=sharing" target="_blank">
//           View Problem Statement
//           </ApplyLink>
//           <ApplyLink href="https://forms.gle/8na2REeK7pxXPKGn9" target="_blank">
//           Apply for Challenge
//           </ApplyLink>
//         </ButtonContainer>
//         <ClimateActionDescription>
//           <SectionTitle>Project Leads</SectionTitle>
//           <ProjectLeadsContainer>
//             <LeadImage src={leadImage} alt="Project Lead" />
//             <LeadDetails>
//               <LeadName>Vijaya Krishna</LeadName>
//               <LeadDesignation>Senior AI Researcher</LeadDesignation>
//               <LeadSummary>
//                 Detail-oriented data scientist specializing in GenAI Product  Development. 
//                 Proficient in utilizing Python for data extraction, statistical  modeling, and 
//                 generating actionable insights. Experienced in uncovering market trends and 
//                 consumer behavior patterns through advanced analytics.Skilled in communicating 
//                 findings to support strategic business decisions.
//               </LeadSummary>
//               <LinkedInLink href="https://www.linkedin.com/in/vijaya-krishna-k-139487297/" target="_blank">
//                 Connect on LinkedIn
//               </LinkedInLink>
//             </LeadDetails>
//           </ProjectLeadsContainer>
//           <ProjectLeadsContainer>
//             <LeadImage src={leadImage2} alt="Project Lead 2" />
//             <LeadDetails>
//               <LeadName>Swati Garg</LeadName>
//               <LeadDesignation> AI Researcher & Aws Architect </LeadDesignation>
//               <LeadSummary>
//                 Ph.D. in Physics with over 3 years of postdoctoral research experience, complemented
//                 by 6+ months as a Data Analyst/Scientist. Demonstrates strong analytical skills in 
//                 collecting, organizing, analyzing, and disseminating large datasets with precision.
//                 Expertise includes feature engineering, machine learning, model building and deployment,
//                 and computer vision techniques. Proficient in creating user-friendly interfaces with Flask
//                 and Streamlit. Published over 15 papers in international journals and conferences. Also 
//                 skilled as an AWS Data Architect, with experience in developing data pipelines, API
//                 implementation, and data modeling.
//               </LeadSummary>
//               <LinkedInLink href="https://www.linkedin.com/in/swati-garg-02513153/" target="_blank">
//                 Connect on LinkedIn
//               </LinkedInLink>
//             </LeadDetails>
//           </ProjectLeadsContainer>
//         </ClimateActionDescription>
//       </Container>
//     </ClimateActionContainer>
//   );
// };

// export default Challenge1;








import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Timeline, TimelineItem, TimelineItemContent, TimelineItemIndicator, TimelineItemTitle } from "@/components/ui/timeline"

import img from "../../img/mock.png"
import leadImage from "../../img/lead.jpeg"
import leadImage2 from "../../img/lead2.jpeg"

export default function MultiAgentContentCreation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Multi-Agent Content Creation Project</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Revolutionizing content creation with AI</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={img}
            width={800}
            height={400}
            alt="AI for Content Creation"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <p className="text-muted-foreground">
            In today's fast-paced world, content creators face numerous challenges in producing high-quality material efficiently. Our Multi-Agent Content Creation Project aims to develop a comprehensive chatbot that automates and streamlines the creation of written, audio, and visual content.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="problem" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="problem">Problem Statement</TabsTrigger>
          <TabsTrigger value="goals">Project Goals</TabsTrigger>
          <TabsTrigger value="objectives">Project Objectives</TabsTrigger>
        </TabsList>
        <TabsContent value="problem">
          <Card>
            <CardHeader>
              <CardTitle>Problem Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <p>
                  Despite technological advancements, significant gaps remain in content creation tools. Current solutions often rely on unreliable sources, struggle with grammar and style issues, and fail to fully automate the writing process for various content types. Additionally, audio and visual content creators face unique challenges in finding and integrating relevant information while navigating copyright concerns.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Project Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate high-quality content in multiple formats based on user prompts</li>
                <li>Ensure system flexibility to handle a wide range of topics and content types</li>
                <li>Provide a user-friendly interface for easy interaction and content customization</li>
                <li>Contribute to better understanding and adaptation to climate change impacts</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="objectives">
          <Card>
            <CardHeader>
              <CardTitle>Project Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Develop a Multi-Modal Content Generation Chatbot</li>
                <li>Ensure High-Quality Output Across Formats</li>
                <li>Provide Customization and Personalization Features</li>
                <li>Integrate Advanced AI Capabilities</li>
                <li>Focus on User Experience and Accessibility</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Skills You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>AI model development</Badge>
            <Badge>Multi-modal content generation</Badge>
            <Badge>Customization techniques</Badge>
            <Badge>Ethical AI considerations</Badge>
            <Badge>API development with Django</Badge>
            <Badge>AWS/Azure deployment</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
          <CardDescription>4 Weeks (Starts from 15th Sept 2024)</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineItemTitle>Week 1</TimelineItemTitle>
              <TimelineItemContent>Project Initiation, Planning, and Market Research</TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemTitle>Week 2</TimelineItemTitle>
              <TimelineItemContent>Designing Multi-Agent Architecture and LLM Integration</TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemTitle>Week 3</TimelineItemTitle>
              <TimelineItemContent>Developing the AI Content Creation Prototype, Testing and Refinement</TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemTitle>Week 4</TimelineItemTitle>
              <TimelineItemContent>Project Report Submission with a Final Demo</TimelineItemContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="https://docs.google.com/document/d/1K2kDCddwMrx0NLt6cokDdbyfsQzyuTWbIrIs1IrahiQ/edit?usp=sharing" target="_blank">View Problem Statement</Link>
          </Button>
          <Button asChild>
            <Link href="https://forms.gle/8na2REeK7pxXPKGn9" target="_blank">Apply for Challenge</Link>
          </Button>
        </CardFooter>
      </Card>

      <h2 className="text-3xl font-bold mb-4">Project Leads</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Avatar className="w-24 h-24">
              <AvatarImage src={leadImage.src} alt="Vijaya Krishna" />
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>
            <CardTitle>Vijaya Krishna</CardTitle>
            <CardDescription>Senior AI Researcher</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Detail-oriented data scientist specializing in GenAI Product Development. Proficient in utilizing Python for data extraction, statistical modeling, and generating actionable insights. Experienced in uncovering market trends and consumer behavior patterns through advanced analytics. Skilled in communicating findings to support strategic business decisions.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href="https://www.linkedin.com/in/vijaya-krishna-k-139487297/" target="_blank">Connect on LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Avatar className="w-24 h-24">
              <AvatarImage src={leadImage2.src} alt="Swati Garg" />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <CardTitle>Swati Garg</CardTitle>
            <CardDescription>AI Researcher & AWS Architect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ph.D. in Physics with over 3 years of postdoctoral research experience, complemented by 6+ months as a Data Analyst/Scientist. Expertise in feature engineering, machine learning, model building and deployment, and computer vision techniques. Skilled AWS Data Architect with experience in developing data pipelines, API implementation, and data modeling.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href="https://www.linkedin.com/in/swati-garg-02513153/" target="_blank">Connect on LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}