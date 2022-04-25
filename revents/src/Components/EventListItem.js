import React from 'react';
import { Button, Icon, Item, ItemContent, List, Segment, SegmentGroup } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem() {
    return(
       <SegmentGroup>
           <Segment>
               <Item.Group>
                   <Item>
                       <Item.Image size='tiny' circular src='/assets/user.png'/>
                       <Item.Content>
                           <Item.Header Content="Event Title"/>
                           <Item.Description>
                               Hosted By Bob
                           </Item.Description>
                       </Item.Content>
                   </Item>
               </Item.Group>
           </Segment>
           <Segment>
               <span>
                   <Icon name='clock' /> Date
                   <Icon name='marker'/> Venue
               </span>
           </Segment>
           <Segment secondary>
            <List horizontal>
                <EventListAttendee/>
                <EventListAttendee/>
                <EventListAttendee/>
                <EventListAttendee/>
            </List>
           </Segment>
           <Segment clearing>
               <span>
                   Description of the Event
               </span>
               <Button color='teal' floated='right' content='view'/> 
           </Segment>
       </SegmentGroup>
    )
}