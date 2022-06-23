import React, { Component } from 'react';
import './skills.scss';

class Skills extends Component {
  render() {
    return (
      <section className="section skills">
          <h2 className="section__main-title">I&apos;m a Dab Hand At</h2>
          <div className="skills__container">
            <div className="skills__skill-disc">
              <div className="skills__skill-disc-graphic skills__skill-disc-graphic--html5">
                <span className="skills__skill-disc-title">HTML5</span>
              </div>
              <p className="skills__skill-description">Semantic, descriptive, <br />uncluttered and compliant</p>
            </div>
            <div className="skills__skill-disc">
              <div className="skills__skill-disc-graphic skills__skill-disc-graphic--css">
                <span className="skills__skill-disc-title">CSS3</span>
              </div>
              <p className="skills__skill-description">BEM-powered, robust, <br /> componentised and accurate
              </p>
            </div>
            <div className="skills__skill-disc">
              <div className="skills__skill-disc-graphic skills__skill-disc-graphic--js">
                <span className="skills__skill-disc-title">ES Next</span>
              </div>
              <p className="skills__skill-description">Modular, decoupled, <br />elegant and testable
              </p>
            </div>            
          </div>
      </section>
    );
  }
}

export default Skills;
