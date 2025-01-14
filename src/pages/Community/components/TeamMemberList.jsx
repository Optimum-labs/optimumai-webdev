import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import teamMembers from '../../../data/teamMembers';

const Section = styled.section`
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0);
  padding: 1.5rem;
`;

const Image = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: block;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Role = styled.p`
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  & > * {
    color: #3182ce;
    margin-right: 1rem;
    font-size: 1.5rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TeamMemberList = () => {
  
  return (
    <Section>
      <Container>
        <Title className='text-center text-dark dark:text-white'>Our Team</Title>
        <Grid>
          {teamMembers.map((member, index) => (
            <Card key={index} className='text-body-color dark:text-dark-6'>
              <Image src={member.imageUrl} alt={member.name} />
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <SocialLinks>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </SocialLinks>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default TeamMemberList;
