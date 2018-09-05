import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(props){
  var myStyledComponentStyles = {
    backgroundColor: 'hotpink',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
    return (
      <div style={myStyledComponentStyles}>
        <Header/>
        <TicketList/>
    </div>
    );
}

export default App;
