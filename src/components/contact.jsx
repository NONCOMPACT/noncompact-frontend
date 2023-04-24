import React from 'react';

function Physicians() {
  return (
    <div className="physician-page-container">
      {/* Information to refer patients */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">Contact Information</h2>
            <p className="text-muted">
              For more information about the NONCOMPACT study or participation,
              please email us at{' '}
              <a href="mailto:noncompact-study@stanford.edu">
                noncompact-study@stanford.edu
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Physicians;
