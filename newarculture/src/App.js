import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends React.Component {
  handleClick = () => {
    this.props.history.push("/learn-more");
}

  render() {
    return (
      <section className="main-page">
        <div>
          <h1 id="firstpageh1"class="animated slideInUp">United we Stand, Divided we Fall</h1>
          <p class="animated slideInUp" id="main-head">We are Newars <br></br>but above all, we are all Nepali<br></br> because where there is unity <br></br>there is always a victory.</p>

        </div>
        <button className="btn" onClick={this.handleClick} >Learn More</button>
      </section>
    );
  }
}
export default App;

