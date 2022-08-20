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
            This landscape of “mountains” and “valleys” speckled with glittering stars
            is actually the edge of a nearby, young, star-forming region called
            NGC 3324 in the Carina Nebula.
          </p>
        </div>
        <div className="card">
          <img src={showCard2} alt="showCard2" />
          <h1>Particle Fever</h1>
          <p>
            As the Large Hadron Collider is about to be launched for the first time,
            physicists are on the cusp of the greatest scientific discovery of all time --
            or perhaps their greatest failure.
          </p>
        </div>
        <div className="card">
          <img src={showCard3} alt="showCard3" />
          <h1>Red Heaven</h1>
          <p>
            After a year of living on “Mars” the lines between reality and simulation
            blur. Following a crew of 6 led by a female physicist, RED HEAVEN takes
            viewers inside a year-long NASA psychological experiment
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyInicialPage;
