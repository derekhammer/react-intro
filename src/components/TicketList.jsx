import React from 'react';
import Ticket from './Ticket';

var masterTicketList =[
  {
    names: 'Doggo and James',
    location: 'Outside',
    issue: 'Parvo'
  },
  {
    names: 'Austin and Hisato',
    location: 'A4',
    issue: 'Hisato threw the computer out the window and we dont want to get in trouble but it seems like its going to happen'
  },
  {
    names: 'Eddie and Brian',
    location: 'G1',
    issue: 'Disagreement about validity of turtle powered vehicle'
  }
];
function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
