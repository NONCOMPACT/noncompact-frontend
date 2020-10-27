import React from 'react';

function AboutUs() {
  return (
    <div className="about-page-container">
      {/* Co-Investigators */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">Co-Investigators</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur.</p>
          </div>
        </div>
      </section>
      {/* NIH Funding */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">NIH Funding</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
