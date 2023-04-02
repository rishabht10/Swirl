import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sideout">        
          <span className="swr">Swirl</span>
          <div className="btn">

            
              <Link className="linkbtn" id="lbtn1" to="/" >
              Feed
              </Link>
           

            
              <Link className="linkbtn" id="lbtn2" to='/uprfl'>
              Profile
              </Link>

              <Link className="linkbtn" id="lbtn3" to='/capsg'>
              generate image
              </Link>
            
          </div>
          <span className="copy">&copy;dappelovers</span>
        
      </div>
      </div>
    )
  }
}


