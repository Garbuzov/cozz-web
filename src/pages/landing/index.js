import React from 'react';
import { Container } from 'react-bootstrap';
import ClientLandingPage from './Client';
//  import RealtorLandingPage from './Realtor';

function LandingPage() {
  return (
    <section className="landing-page">
      <Container>
        <ClientLandingPage />
      </Container>
    </section>
  );
}

export default LandingPage;
