import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  padding: 48px 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

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

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #fff;
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: #fff;
`;

const blink = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
`;

const Header = () => {
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const texts = [
      "Empowering individuals to understand AI",
      "Shaping the future of AI",
      "Harnessing the potential of AI",
      "Enhancing human productivity",
      "Contributing to the responsible evolution of AI",
    ];

    const intervalId = setInterval(() => {
      setTypingText((prevText) => {
        if (prevText === texts[textIndex]) {
          setTextIndex((textIndex + 1) % texts.length);
          return "";
        } else {
          return texts[textIndex].substring(0, prevText.length + 1);
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [textIndex]);

  return (
    <Section>
      <Title>Welcome to OptimumAI</Title>
      <Text className="text-body-color dark:text-dark-6">
        OptimumAI is a platform that aims to empower individuals to understand AI
        and its potential. We are committed to shaping the future of AI by
        harnessing its potential to enhance human productivity and contribute to
        the responsible evolution of AI.
      </Text>
      <br />
      <Container>
        <Text className="text-body-color dark:text-dark-6">
          {typingText}
          <Cursor className="text-body-color dark:text-dark-6">|</Cursor>
        </Text>
      </Container>
    </Section>
  );
};

export default Header;
