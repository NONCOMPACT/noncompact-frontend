import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import institutions from '../lib/institutions';
import investigators from '../lib/investigators';

function AboutUs() {
  // Render investigators of each institution
  function renderInvestigators(institution) {
    const people = investigators.filter(
      (person) => person.institution === institution
    );
    if (people && people.length) {
      return (
        <div className="investigators-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4">
          {people.map((item) => {
            return (
              <article key={item.name} className="investigator col mb-4">
                <figure className="investigator-image mb-2">
                  <div className="media-wrapper">
                    {item.photo ? (
                      <img src={item.photo} alt={item.name} />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                  </div>
                </figure>
                <div className="investigator-name text-center font-size-smaller">
                  <p className="h5">{item.name}</p>
                </div>
              </article>
            );
          })}
        </div>
      );
    }

    return null;
  }

  // Render 5 rows of institutions
  function renderInstitutions() {
    return (
      <div className="institutions-wrapper">
        {institutions.map((item) => {
          return (
            <div key={item.abbr} className="institution-row">
              <h5 className="mt-2 text-noncompact-muted institution-header">
                <img
                  src={item.logo}
                  className="institution-logo"
                  alt={item.name}
                />
                <span className="institution-name font-weight-bold">
                  {item.name}
                </span>
              </h5>
              {renderInvestigators(item.name)}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="about-page-container">
      {/* About the consortium */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">About the Consortium</h2>
            <p className="text-muted">
              The goal of this international consortium is to improve care of
              patients with non-compaction cardiomyopathy. We hypothesize that
              comprehensive analysis of clinical, genetic, structural and
              functional information will improve risk stratification. In
              addition, we hypothesize that detailed structural analysis will
              allow for differentiation of pathological and benign patterns of
              non-compaction.
            </p>
          </div>
          {/* Co-Investigators */}
          <div className="row text-left">
            <h4 className="mt-3 mb-4 font-weight-bold text-noncompact-secondary">
              Investigators from the five institutions below are the founders of
              the NONCOMPACT Consortium
            </h4>
            {renderInstitutions()}
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
