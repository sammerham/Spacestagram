import React from 'react';

/*
 * Introduction
 *
 * This is the page where you rednder main title and subtitle
 * State: None
 *        
 * props: 
        None
  * State: 
        None      
 * App ---->> CardList ----> Introduction
                
 */
function Introduction() {
  return (
    <div>
      <h3>
        Spacestagram
      </h3>
      <div style={{fontSize:12}}>
        Brought to you by NASA'S image API
      </div>
    </div>
  )
}

export default Introduction;
