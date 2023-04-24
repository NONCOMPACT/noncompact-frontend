import React from 'react';
import LogoStanford from '../assets/logo-stanford.png';
import LogoClevelandClinic from '../assets/logo-clevelandclinic.png';
import LogoUPenn from '../assets/logo-upenn.png';
import LogoErasmus from '../assets/logo-erasmus.png';
import LogoSNUH from '../assets/logo-snuh.png';
import imagingExamples from '../lib/imaging';

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
                with Non-Compaction
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
            <p className="text-muted">
              As of April 2023, all centers are activily enrolling and a total
              of 120 participants were enrolled to date.
            </p>
          </div>
        </div>
      </section>
      {/* Example Cases */}
      <section className="page-section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Imaging Examples</h2>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="imaging-example example-echo">
                  <img src={imagingExamples.echo} alt="Echocardiogram" />
                </div>
                <h4 className="my-3 font-weight-bold">Echocardiogram</h4>
                <p className="text-muted">
                  Example showing thickening of the apex of the left ventricle.
                </p>
              </div>
              <div className="col-md-4">
                <div className="imaging-example example-mri">
                  <img src={imagingExamples.mri} alt="MRI scan" />
                </div>
                <h4 className="my-3 font-weight-bold">MRI Scan</h4>
                <p className="text-muted">
                  Example showing increased trabecular muscle.
                </p>
              </div>
              <div className="col-md-4">
                <div className="imaging-example example-ct">
                  <img src={imagingExamples.ct} alt="CT scan" />
                </div>
                <h4 className="my-3 font-weight-bold">CT Scan</h4>
                <p className="text-muted">
                  Example showing increased trabeculations along the wall of the
                  left ventricle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consortium Site Links */}
      <div className="container py-5">
        <div className="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-5 d-flex align-items-center">
          <div className="institution-logo col">
            <a href="https://www.stanford.edu/" className="external-link">
              <img
                className="img-fluid d-block mx-auto"
                src={LogoStanford}
                alt="Stanford University"
              />
            </a>
          </div>
          <div className="institution-logo col">
            <a href="https://my.clevelandclinic.org/" className="external-link">
              <img
                className="img-fluid d-block mx-auto"
                src={LogoClevelandClinic}
                alt="Cleveland Clinic"
              />
            </a>
          </div>
          <div className="institution-logo col">
            <a href="https://www.upenn.edu/" className="external-link">
              <img
                className="img-fluid d-block mx-auto"
                src={LogoUPenn}
                alt="University of Pennsylvania"
              />
            </a>
          </div>
          <div className="institution-logo col">
            <a href="https://www.erasmusmc.nl/nl-nl/" className="external-link">
              <img
                className="img-fluid d-block mx-auto"
                src={LogoErasmus}
                alt="Erasmus MC Rotterdam"
              />
            </a>
          </div>
          <div className="institution-logo col">
            <a href="https://cancer.snuh.org/main.do" className="external-link">
              <img
                className="img-fluid d-block mx-auto"
                src={LogoSNUH}
                alt="Seoul National University Hospital"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
