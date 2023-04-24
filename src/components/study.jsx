import React from 'react';
import {
  faCheckCircle,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LVWallImg from '../assets/3d_render_lv_wall.jpg';

function Study() {
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
                  <span>At least 18 years old</span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Increased trabeculations of the left ventricle seen by
                    echocardiography
                  </span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    A cardiac MRI scan was previously performed or is planned
                    for clinical reasons
                  </span>
                </li>
              </ul>
            </div>
            {/* General exclusion criteria */}
            <h5 className="my-3 font-weight-bold">
              General exclusion criteria
            </h5>
            <div className="w-100 mb-3">
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Complex congenital heart disease, neuromuscular disorders,
                    increased trabeculations of the right ventricle alone
                  </span>
                </li>
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>
                    Inability to safely undergo cardiac MRI (only applies if an
                    MRI scan has not yet been performed), for example: pacemaker
                    or ICD, contrast allergy, irregular heart rhythm, severe
                    shortness of breath
                  </span>
                </li>
              </ul>
            </div>
            {/* Exclusion criteria for CT scan */}
            <h5 className="my-3 font-weight-bold">
              Exclusion criteria for CT scan (if contra-indications to CT exist
              participation in the general study is still possible)
            </h5>
            <div className="w-100 mb-3">
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-2 text-noncompact-accent"
                  />
                  <span>Age below 21 years</span>
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
              What is non-compaction of the left ventricle?
            </h2>
            <p className="text-muted">
              Left ventricular non-compaction (LVNC), also referred to as
              non-compaction cardiomyopathy or increased trabeculation of the
              left ventricle, is a poorly understood disorder characterized by a
              left heart chamber with a prominent inner layer of loose
              myocardial tissue. The condition has been associated with heart
              failure, stroke and arrhythmia. However, for most patients with
              increased trabeculations there are no negative consequences.
            </p>
          </div>
        </div>
      </section>
      {/* Why do we study NCCM */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">
              Why do we study LV non-compaction?
            </h2>
            <p className="text-muted">
              LV non-compaction is more and more often diagnosed, partially
              because of the improved quality of imaging techniques. A small
              proportion of patients with increased trabeculations develop
              complications, but in the vast majority the condition does not
              cause problems in the future. Currently we are not well able to
              tell which type of non-compaction is harmless and which one
              requires measures to prevent complications. For a growing group of
              patients diagnosed with LV non-compaction there is a need for
              better risk stratification to appropriately allocate (or safely
              withhold) impactful preventive measures such as ICDs and
              anticoagulation (blood thinners).
            </p>
          </div>
        </div>
      </section>
      {/* Impressive images */}
      <section className="page-section bg-light">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">3D structure of the LV wall</h2>
            <p className="text-muted">
              3D Rendered inside view of the left ventricle, which shows the
              complex trabecular structure of the ventricular wall.
            </p>
            <img src={LVWallImg} alt="LV Wall" className="rounded float-left" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Study;
