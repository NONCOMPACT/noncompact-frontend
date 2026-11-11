import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Research() {
  return (
    <div className="research-page-container">
      {/* Information about publications and citations */}
      <section className="page-section">
        <div className="container">
          <div className="row text-left">
            <h2 className="section-heading">Research</h2>
            <h3 className="mt-3 mb-1 w-100 font-weight-bold text-noncompact-secondary">
              Publications
            </h3>
            {/* publication entry */}
            <div className="publication-item">
              <p className="publication-citation text-muted mt-3">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/40846526/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-weight-bold">
                    Cardiac CT fractal analysis of LV noncompaction and common cardiomyopathies
                  </span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2"
                  />
                </a>
                <br/>
                <span className="mr-2">
                  Manohar A, Wong A, Castillo E, Gunderson A, Mistelbauer G, Bagherzadeh SP, Haddad F, Caliskan K, Budde RPJ, Hirsch A, Lee SP, Lee W, Owens A, Litt H, Wheeler M, Kwon DH, Tang WHW, Nieman K. <em>J Cardiovasc Comput Tomogr. 2026 Jan-Feb;20(1):13-22. doi: 10.1016/j.jcct.2025.08.004. Epub 2025 Aug 21. PMID: 40846526; PMCID: PMC12520610</em>
                </span>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12520610/pdf/nihms-2104683.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Fulltext PDF
                  </span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2"
                  />
                </a>
              </p>
              <p className="publication-summary text-muted mt-2 mb-3 pb-4 border-bottom">
                <span className="font-weight-bold mr-1">
                  Summary:
                </span>
                <span>
                  This study by Manohar et al. (Journal of Cardiovascular Computed Tomography, 2026) examined whether cardiac CT can tell left ventricular noncompaction (LVNC) apart from other cardiomyopathies by measuring the complexity of the LV trabeculae with fractal analysis. Patients with LVNC, hypertrophic cardiomyopathy (HCM), and dilated cardiomyopathy (DCM), along with controls, who had coronary CT angiography were included. Trabecular structure was quantified on a stack of 15 short-axis CT images, yielding a maximum (FDmax) and an average (FDglobal) fractal dimension for each subject. A subset also had clinical cardiac MRI for comparison. The cohort included 313 subjects (median age 58.8 years, 153 male): 89 controls, 46 LVNC, 106 HCM, and 72 DCM. FDmax was significantly higher in LVNC (1.379 ± 0.047) than in controls (1.305), HCM (1.321), and DCM (1.344), all p &lt; 0.001, and FDglobal was likewise significantly higher in LVNC than in the other groups. In 132 subjects with both CT and MRI, fractal dimensions from the two modalities were strongly correlated (r = 0.63), though CT-derived values were consistently higher. The authors conclude that CT-derived fractal dimensions are significantly higher in LVNC than in controls, HCM, and DCM, and that they correlate strongly with, but run higher than, MRI-derived values in the same patients.
                </span>
              </p>
            </div>

            {/* publication entry */}
            <div className="publication-item">
              <p className="publication-citation text-muted mt-3">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/40274207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-weight-bold">
                    Prognostic Value of Compact Myocardial Thinning in Patients With Left Ventricular Noncompaction
                  </span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2"
                  />
                </a>
                <br/>
                <span className="mr-2">
                  Gegenava T, Tukker M, Caliskan K, Hirsch A, Manohar A, Lee SP, Owens A, Kwon DH, Ramchand J, Wheeler MT, Tang WHW, Nieman K. <em>Am J Cardiol. 2025 Aug 15;249:51-58. doi: 10.1016/j.amjcard.2025.04.018. Epub 2025 Apr 22. PMID: 40274207; PMCID: PMC12380258</em>
                </span>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12380258/pdf/nihms-2076572.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Fulltext PDF
                  </span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2"
                  />
                </a>
              </p>
              <p className="publication-summary text-muted mt-2 mb-3 pb-4 border-bottom">
                <span className="font-weight-bold mr-1">
                  Summary:
                </span>
                This multicenter study by Gegenava et al. (American Journal of Cardiology, 2025) tested whether focal thinning of the compact myocardium on cardiac MRI predicts outcomes in patients with left ventricular noncompaction (LVNC). The researchers identified 214 adults meeting LVNC imaging criteria (54% male, mean age 41 ± 16 years). They defined myocardial thinning as a reduction of 50% or more in compact myocardial thickness relative to an adjacent segment on CMR. The primary endpoint was a composite of major adverse cardiovascular events: all-cause death, heart failure hospitalization, LVAD or heart transplant, cardiac resynchronization therapy, stroke or TIA, ventricular tachycardia, and appropriate ICD therapy. Focal thinning was present in 42 patients (20%). These patients had more cumulative adverse events than those without thinning, even after matching for medical risk score. In multivariate analysis, thinning remained independently associated with outcomes (HR 3.05; 95% CI 1.57–5.94; p = 0.001). Ventricular tachycardia, LV end-systolic volume, and left bundle branch block also predicted events. The authors conclude that adding myocardial thinning to risk assessment could improve prediction and management of adverse outcomes in LVNC patients.
              </p>
            </div>

            {/* publication entry */}
            <div className="publication-item">
              <p className="publication-citation text-muted mt-3">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/38114847/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-weight-bold">
                    Quantitative metrics of the LV trabeculated layer by cardiac CT and cardiac MRI in patients with suspected noncompaction cardiomyopathy
                  </span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2"
                  />
                </a>
                <br/>
                <span className="mr-2">
                  Manohar A, Vigneault DM, Kwon DH, Caliskan K, Budde RPJ, Hirsch A, Lee SP, Lee W, Owens A, Litt H, Haddad F, Mistelbauer G, Wheeler M, Rubin D, Tang WHW, Nieman K. <em>Eur Radiol. 2024 Jul;34(7):4261-4272. doi: 10.1007/s00330-023-10526-1. Epub 2023 Dec 19. PMID: 38114847; PMCID: PMC12582908</em>
                </span>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12582908/pdf/nihms-2119344.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Fulltext PDF
                  </span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2"
                  />
                </a>
              </p>
              <p className="publication-summary text-muted mt-2 mb-3 pb-4 border-bottom">
                <span className="font-weight-bold mr-1">
                  Summary:
                </span>
                This study by Manohar et al. (European Radiology, 2024) asked whether cardiac CT can match cardiac MRI for measuring the left ventricle's trabeculated layer in patients with suspected noncompaction cardiomyopathy. Patients with excessive LV trabeculation who had both CMR and CCT as part of the prospective, international, multicenter NONCOMPACT study were included, and short-axis slices from the two modalities were matched. The researchers calculated four quantitative metrics: the 1D noncompacted-to-compacted ratio (NCC), trabecular-to-myocardial area ratio (TMA), trabecular-to-endocardial cavity area ratio (TCA), and trabecular-to-myocardial volume ratio (TMV). In a subset of 20 patients, they also compared CT images taken at end-diastole and mid-diastole. Across 48 patients (mean age about 50, 28 female), agreement between CMR and CCT was moderate for NCC (r = 0.62), strong for TMA and TMV (r = 0.78 each), and excellent for TCA (r = 0.92). CCT slightly underestimated all four metrics relative to CMR. TMA, TCA, and TMV also correlated excellently between end-diastolic and mid-diastolic CT images, with small biases. The authors conclude that CCT performs similarly to CMR for quantifying the trabeculated layer. Because the two cardiac phases differed only slightly, the trabeculated layer could potentially be measured from routine clinical coronary CT angiograms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
