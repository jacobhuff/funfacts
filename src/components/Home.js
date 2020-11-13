import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <h1>Fun facts about JavaScript</h1>
      <p>Click a sqaure to reveal a fact</p>
      <div className="squares">
        <Link to='/factOne'><div className="square">Fact 1</div></Link>
        <Link to='/factTwo'><div className="square">Fact 2</div></Link>
        <Link to='/factThree'><div className="square">Fact 3</div></Link>
      </div>
    </div>
  )
}

export default withRouter(Home)
