import React from 'react';
import {
  faBriefcaseMedical,
  faCircle,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoClevelandClinic from '../assets/logo-clevelandclinic.png';
import LogoUPenn from '../assets/logo-upenn.png';
import LogoErasmus from '../assets/logo-erasmus.png';
import LogoSNUH from '../assets/logo-snuh.png';

function LandingPage() {
  return (
    <div className="landing-page-container">
      {/* hero section */}
      <div className="hero-container">
        <div className="w-100 bg-cover">
          <div className="container d-flex flex-column">
            <div className="hero-tagline row align-items-center justify-content-start py-12">
              <h1 className="col-md-12">
                International Consortium for Multimodality Phenotyping in Adults
                with non-Compaction
              </h1>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-row justify-content-end">
          <div className="hero-caption row pt-2">
            <p>Image by Linda A. Cicero / Stanford News Service</p>
          </div>
        </div>
      </div>
      {/* Enrollment Update */}
      <section className="page-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Enrollment Update</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur.</p>
          </div>
        </div>
      </section>
      {/* Example Cases */}
      <section className="page-section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Example Cases</h2>
            <div className="row pt-4">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-noncompact-accent" />
                  <FontAwesomeIcon icon={faBriefcaseMedical} className="fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3 font-weight-bold">Case 1 Title</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-noncompact-accent" />
                  <FontAwesomeIcon icon={faBriefcaseMedical} className="fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3 font-weight-bold">Case 2 Title</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-noncompact-accent" />
                  <FontAwesomeIcon icon={faBriefcaseMedical} className="fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3 font-weight-bold">Case 3 Title</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Something Personal */}
      <section className="page-section">
        <div className="container">
          <div className="text-center">
            <div className="fa-4x mb-4">
              <FontAwesomeIcon icon={faUserCircle} className="fa-4x text-noncompact-secondary" />
            </div>
            <p className="text-muted font-italic">Something personal - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur.</p>
          </div>
        </div>
      </section>
      {/* Consortium Site Links */}
      <div className="container py-5 border-top">
        <div className="row">
          <div className="col-md-3 col-sm-6 my-3 px-4 d-flex align-items-center">
            <a href="#!" className="external-link">
              <img className="img-fluid d-block mx-auto" src={LogoClevelandClinic} alt="Cleveland Clinic" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3 px-4 d-flex align-items-center">
            <a href="#!" className="external-link">
              <img className="img-fluid d-block mx-auto" src={LogoUPenn} alt="University of Pennsylvania" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3 px-4 d-flex align-items-center">
            <a href="#!" className="external-link">
              <img className="img-fluid d-block mx-auto" src={LogoErasmus} alt="Erasmus MC Rotterdam" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3 px-4 d-flex align-items-center">
            <a href="#!" className="external-link">
              <img className="img-fluid d-block mx-auto" src={LogoSNUH} alt="Seoul National University Hospital" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
