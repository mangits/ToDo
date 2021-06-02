import React from 'react';
import Welcome from './Welcome.js'

function UserName (props) {
    return (
      <form className="submitUsername" onSubmit={props.newUser}>
        <label>
          <input type="text" id="username" placeholder="Enter Username! 🥳"></input>
        </label>
        <input type="submit" value="Submit Username 🖕"/>
      </form>
    )
  }


export default UserName;