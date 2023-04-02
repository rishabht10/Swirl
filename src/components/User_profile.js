import React, { Component } from 'react'
import Identicon from 'identicon.js';

export default class User_profile extends Component {
  render() {
    return (
      <div>
        <div className="user">

          <h1 className="usrhead">Your Profile</h1>
          <div className="topwrap">

            {this.props.account
              ? <img
                className='upic'

                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
            <div className="info">
            
              <span className='uname'>{this.props.uname}</span>
              <button className="adrs" onClick={() => { alert(`Address on the Network is ${this.props.account}`) }}>Click to view Address</button>

            </div>

          </div>

          <div className="posts">
            <h3 className="ptext">POSTS</h3>
            <div className="postcontainer">
              No posts yet
            </div>

          </div>

        </div>
      </div>
    )
  }
}
