import React from 'react';
import showCard1 from '../images/ShowCard1.svg';
import showCard2 from '../images/ShowCard2.svg';
import showCard3 from '../images/ShowCard3.svg';
import '../styles/bodyInicialPage.css';

function BodyInicialPage() {
  return (
    <div className="resto">
      <h1>Sponsored Series</h1>
      <div className="showCard">
        <div className="card">
          <img src={showCard1} alt="showCard1" />
          <h1>Cosmic Cliffs</h1>
          <p>
            This landscape of “mountains” and “valleys” speckled with glittering
            stars is actually the edge of a nearby, young, star-forming region
            called NGC 3324 in the Carina Nebula.
          </p>
        </div>
        <div className="card">
          <img src={showCard2} alt="showCard2" />
          <h1>Particle Fever</h1>
          <p>
            As the Large Hadron Collider is about to be launched for the first
            time, physicists are on the cusp of the greatest scientific
            discovery of all time -- or perhaps their greatest failure.
          </p>
        </div>
        <div className="card">
          <img src={showCard3} alt="showCard3" />
          <h1>Red Heaven</h1>
          <p>
            After a year of living on “Mars” the lines between reality and
            simulation blur. Following a crew of 6 led by a female physicist,
            RED HEAVEN takes viewers inside a year-long NASA psychological
            experiment
          </p>
        </div>
      </div>
      <div className="div-plan">
        <h1>Choose your plan</h1>
        <p>Discover our plans and choose the best option for you to enjoy our content.</p>
        <div className="div-plans">
          <button className="plans-btn" type="button">MONTHLY</button>
          <button className="plans-btn" type="button">6 MONTHS</button>
          <button className="plans-btn" type="button">YEARLY</button>
        </div>
        <div className="div-price">
          <div className="plans">
            <h2>MONTHLY</h2>
            <hr />
            <p>At Infinity & Beyond you will find the best content about space.</p>
            <p>
              <br />
              + Enjoy on all your devices
              <br />
              + Watch on two screens
              <br />
              + Watch anywhere you want
              <br />
              + Resolution adapted to your device
            </p>
            <h2>$19,90</h2>
            <p>/month</p>
            <button className="signUpPlanbtn" type="button">SIGN UP NOW!</button>
          </div>
          <div className="plans">
            <h2>6 MONTHS</h2>
            <hr />
            <p>At Infinity & Beyond you will find the best content about space.</p>
            <p>
              + Enjoy on all your devices
              <br />
              + Watch on multiple screens
              <br />
              + Watch wherever you want
              <br />
              + Resolution adapted to your device
              <br />
              + High resolution and 4k quality
              <br />
              + Create as many profiles as you want
              <br />
              + Download and watch offline
            </p>
            <h2>$18,90</h2>
            <p>/month</p>
            <button className="signUpPlanbtn" type="button">SIGN UP NOW!</button>
          </div>
          <div className="plans">
            <h2>YEARLY</h2>
            <hr />
            <p>At Infinity & Beyond you will find the best content about space.</p>
            <p>
              + Enjoy on all your devices
              <br />
              + Watch on multiple screens
              <br />
              + Watch wherever you want
              <br />
              + Resolution adapted to your device
              <br />
              + High resolution and 4k quality
              <br />
              + Create as many profiles as you want
              <br />
              + Download and watch offline
            </p>
            <h2>$17,90</h2>
            <p>/month</p>
            <button className="signUpPlanbtn" type="button">SIGN UP NOW!</button>
          </div>
        </div>
        <p>
          *See more information about payment plans
          {' '}
          <u>clicking here.</u>
        </p>
      </div>
    </div>
  );
}

export default BodyInicialPage;
