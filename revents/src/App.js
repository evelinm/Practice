import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from './Components/EventDashboard';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Container>
      <EventDashboard/>
      </Container>
    </div>
  );
}

export default App;
