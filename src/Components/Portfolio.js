import React, { Component } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = 'images/portfolio/' + projects.image;

      return (
        <div key={id++} className='columns portfolio-item'>
          <div className='item-wrap'>
            <a href={projects.url} target='_blank' rel='noopener noreferrer'>
              <Zmage alt={projects.title} src={projectImage} />
            </a>
            <div style={{ textAlign: 'center' }}>
              <a href={projects.url} target='_blank' rel='noopener noreferrer'>
                {projects.title}
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id='portfolio'>
        {/* <Fade left duration={1000} distance='40px'> */}
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Tutorial Videos</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {projects}
            </div>
          </div>
        </div>
        {/* </Fade> */}
      </section>
    );
  }
}

export default Portfolio;
