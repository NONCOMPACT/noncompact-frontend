import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import institutions from '../lib/institutions';
import investigators, { principalInvestigators } from '../lib/investigators';

function AboutUs() {
  // Render investigators of each institution
  function renderInvestigators(institution) {
    const people = investigators.filter(
      (person) => person.institution === institution
    );
    if (people && people.length) {
      return (
        <div className="investigators-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 w-100">
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

  function renderPrincipalInvestigators() {
    return (
      <div className="investigators-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 w-100">
        {principalInvestigators.map((item) => {
          return (
            <article key={item.name} className="investigator col mb-4">
              <figure className="investigator-image mb-2">
                <div className="media-wrapper">
                  <img src={item.photo} alt={item.name} />
                </div>
              </figure>
              <div className="investigator-name text-center font-size-smaller">
                <p className="h5">{item.name}</p>
                <p className="h6 text-muted">{item.institution}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  // Render 5 rows of institutions
  function renderInstitutions() {
    return (
      <div className="institutions-wrapper w-100">
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
          {/* Principal Investigators */}
          <div className="row text-left">
            <h3 className="mt-3 mb-1 w-100 font-weight-bold text-noncompact-secondary">
              Principal Investigators
            </h3>
            {renderPrincipalInvestigators()}
          </div>
          {/* Co-Investigators */}
          <div className="row text-left">
            <h4 className="mt-3 mb-4 w-100 font-weight-bold text-noncompact-secondary">
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
            <h2 className="section-heading">Study Funding</h2>
            <p className="text-muted">
              The International Consortium for Multimodality Phenotyping in
              Adults with Non-compaction (NONCOMPACT) is funded by the National
              Institutes of Health (NHLBI R01HL146754).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
