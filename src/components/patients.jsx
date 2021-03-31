import React from 'react';
import {
  faCheckCircle,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Patients() {
  return (
    <div className="patients-page-container">
      {/* Information about the study in lay language */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">About the NONCOMPACT study</h2>
            <p className="text-muted">
              In a large cohort of adult patients with suspected NCCM we will
              perform in-depth phenotyping, including clinical information,
              pedigree data, genetics, echocardiography and MRI, and follow
              participants for up to 3 years. We will apply machine-learning
              based analytics to develop predictive models and compare their
              performance to currently used models and treatment criteria.
              Secondly, in a subset of participants we will perform
              high-resolution cardiac CT for detailed structural
              characterization of the myocardial wall. We will investigate
              associations between myocardial structure and regional contractile
              function, as assessed by echo and MRI.
            </p>
            <p className="text-muted">
              The aim of this study is to identify a structural signature
              associated with pathological non-compaction and improve developed
              risk prediction models. Discovery of pathological structural
              signatures through innovative imaging techniques, in relation to
              myocardial contractility, will advance our understanding of NCCM.
            </p>
            {/* Inclusion criteria */}
            <h5 className="my-3 font-weight-bold">Inclusion criteria</h5>
            <div className="w-100 mb-3">
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>≥18 years old</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Hypertrabeculation of the left ventricle fulfilling the
                    echo-based Jenni criteria of NCCM
                  </span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Clinical cardiac MRI examination performed or planned
                  </span>
                </li>
              </ul>
            </div>
            {/* Exclusion Criteria (general cohort) */}
            <h5 className="my-3 font-weight-bold">
              Exclusion Criteria (general cohort)
            </h5>
            <div className="w-100 mb-3">
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Complex congenital disease (including transposition great
                    arteries, tetralogy of Fallot, tricuspid atresia, truncus
                    arteriosis, single ventricle, hypoplastic left heart,
                    pulmonary atresia, double-outlet RV), neuromuscular
                    disorders or isolated RV non-compaction
                  </span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>Inability to provide informed consent</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Contra-indications to MRI, which apply if the clinical
                    cardiac MRI has not yet been performed at the time of study
                    enrollment: permanent pacemakers/ICDs, MRI contrast medium
                    allergy, significant arrhythmia with highly irregular RR
                    intervals, severe dyspnea with inability to lay flat/breath
                    hold, inability to communicate with the MRI technician or
                    follow commands for any reason (psychosis, agitation, etc.),
                    other site-specific contra-indications to clinical MRI of
                    the heart.
                  </span>
                </li>
              </ul>
            </div>
            {/* Exclusion Criteria (cardiac CT examination) */}
            <h5 className="my-3 font-weight-bold">
              Exclusion Criteria (cardiac CT examination)
            </h5>
            <div className="w-100 mb-3">
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>Age &lt;21 years</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Decompensated heart failure, or otherwise clinically
                    unstable
                  </span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>BMI&gt;40 kg/m2</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>Pregnancy (or cannot be ruled out)</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>Known iodine contrast medium allergy</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>Kidney dysfunction: eGFR&lt;45 ml/min</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Thyroid disease: toxic multinodular goiter, Graves&apos;
                    disease, Hashimoto&apos;s thyroiditis
                  </span>
                </li>
              </ul>
            </div>
            {/* Supported by */}
            <h5 className="my-3 font-weight-bold">Supported by</h5>
            <div className="w-100">
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  <span>NIH/NHLBI 1R01HL146754</span>
                </li>
                <li className="list-group-item text-muted">
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <span>
                      Stanford Department of Medicine, Division of
                      Cardiovascular Medicine
                    </span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="ml-2"
                    />
                  </a>
                </li>
                <li className="list-group-item text-muted">
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <span>Stanford Department of Radiology</span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="ml-2"
                    />
                  </a>
                </li>
                <li className="list-group-item text-muted">
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <span>Stanford Cardiovascular Institute</span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="ml-2"
                    />
                  </a>
                </li>
                <li className="list-group-item text-muted">
                  <span>More information at </span>
                  <a
                    href="https://clinicaltrials.gov/ct2/show/study/NCT04424030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      https://clinicaltrials.gov/ct2/show/study/NCT04424030
                    </span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="ml-2"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* What is non-compaction cardiomyopathy */}
      <section className="page-section bg-light">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">
              What is non-compaction cardiomyopathy
            </h2>
            <p className="text-muted">
              Non-compaction cardiomyopathy (NCCM), also sometimes called left
              ventricular noncompaction (LVNC), is a heterogeneous, poorly
              understood disorder characterized by a prominent inner layer of
              loose myocardial tissue, and associated with heart failure,
              stroke, severe rhythm irregularities and death. For a growing
              population diagnosed with NCCM there is a need for better risk
              stratification to appropriately allocate (or safely withhold)
              these impactful preventive measures.
            </p>
          </div>
        </div>
      </section>
      {/* Why do we study NCCM */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">Why do we study NCCM</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur.
            </p>
          </div>
        </div>
      </section>
      {/* Impressive images */}
      <section className="page-section bg-light">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">Impressive images</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur.
            </p>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">FAQs</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Patients;
