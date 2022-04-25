import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar (){
    return (
      <Menu inverted fixed="top">
        <Container>
            <Menu.Item header>
                <img src='/assets/logo.png' alt='logo' style={{ marginRight: '15px' }}/>
                Re-events
            </Menu.Item>
            <Menu.Item name="Events"/>
            <Menu>
            <Button positive inverted content="Create Event"/>
            </Menu>
            <Menu.Item position='right'>
                <Button basic inverted content='login'/>

                <Button basic inverted content='logout' style={{marginLeft: '0.5em'}}/>
            </Menu.Item>
        </Container>
      </Menu>
    )
}