import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../components/Particle';
import Techstack from '../components/Skillset/Techstack';

const Skillset = () => {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
            <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
            </h1>

            <Techstack />
            
            <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
            </h1>
            </Container>
            
        </Container>
    );
};

export default Skillset;