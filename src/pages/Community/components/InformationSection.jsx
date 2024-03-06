import React from "react";
import styled from "styled-components";
import image from "../img/img-2.png";

const Section = styled.section`
  padding: auto;
`;

const Title = styled.h3`
  padding-left: 32px;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  max-width: 100%;
  padding-left: auto;
  padding-right: auto;

  @media (min-width: 768px) {
    max-width: 640px;
  }

  @media (min-width: 1024px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1024px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 22px;
    margin-left: 25px;
    padding-left: 15px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
    margin-top: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-top: 2rem;
  text-align: justify;
`;

const InformationSection = () => {
  return (
    <Section>
      <Title className="text-center text-dark dark:text-white">
        Information Of OptimumAI Labs
      </Title>
      <Container>
        <ContentContainer className="text-body-color dark:text-dark-6">
          <TextContent>
            <Paragraph>
              OptimumAI Labs is at the forefront of human development,
              leveraging the power of Artificial Intelligence (AI) to create
              innovative solutions. We specialize in building collaborative
              platforms that seamlessly integrate AI, empowering individuals and
              organizations to achieve their full potential. Our commitment lies
              in providing cutting-edge solutions that foster continuous
              learning, collaboration, and growth.
            </Paragraph>
            <Paragraph>
              Our flagship products, the Interview Prep Chatbot and
              CollaborateForge, are prime examples of how AI can revolutionize
              development. The Interview Prep Chatbot offers a personalized
              learning experience, providing users with tailored insights, goal
              recommendations, and skill-building modules to excel in
              interviews.
            </Paragraph>
          </TextContent>
          <ImageContainer>
            <Image src={image} alt="Placeholder" />
          </ImageContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default InformationSection;
