const cmvauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqueous specimen PCR positive for herpes simplex virus or varicella zoster virus</li>
</ul>`

const hsauEx = 
`<ul>
<li>Concomitant dermatomal/cutaneous varicella zoster virus (unless aqueous specimen PCR positive for herpes simplex virus)</li>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqeous specimen PCR positive for cytomegalovirus or varicella zoster virus</li>
</ul>`

const vzvauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>3.	Aqueous specimen PCR positive for cytomegalovirus or herpes simplex virus</li>
</ul>`

const fusEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR* positive for cytomegalovirus, herpes simplex virus or varicella
zoster virus</ol>`

const jiacauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus</li>
</ul>`

const sauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus</li>
</ul>`

const tinuEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
</ul>`

///////////////////////////////////////other anterior uveitis
const syphauEx = 
`<ul>
<li>History of adequate treatment for syphilitic uveitis</li>
</ul>`

const tbauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Positive biopsy for sarcoidosis (and therefore an absence of histological or microbiologic confirmation of infection with M. tuberculosis)</li>
<li>Uveitic syndrome compatible with either sarcoidosis-associated uveitis or tubercular uveitis and bilateral hilar adenopathy on chest imaging without histological or microbiologic confirmation of the diagnosis of infection with M. tuberculosis</li>
</ul>`

const bdauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
</ul>`

const sarcauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of infection with Mycobacterium tuberculosis</li>
</ul>`
////////////////////////////////////////

const cmvauRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, anterior chamber inflammation should be present</li>
    <li>No evidence of retinitis</li>
</ol>`;

const cmvauRule_2_html = 
`<span style="font-weight:500">Evidence of cytomegalovirus infection in the eye</span>
<ol type="a" style="font-weight:400;">
    <li>Positive PCR for cytomegalovirus on aqueous specimen</li>
</ol>`;

const hsauRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chamber inflammation</li>
    <li>No evidence of retinitis</li>
</ol>`;

const hsauRule_2_html = 
`<span style="font-weight:500">Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)</span>`;

const hsauRule_3_html = 
`<span style="font-weight:500">Evidence of herpes simplex infection in the eye</span>
<ol type="a" style="font-weight:400;">
    <li>Aqueous humor PCR positive for herpes simplex virus OR</li>
    <li>Sectoral iris atrophy in a patient ≤50 years of age OR</li>
    <li>Herpes simplex keratitis</li>
</ol>`;

const vzvauRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chamber inflammation</li>
    <li>No evidence of retinitis</li>
</ol>`;

const vzvauRule_2_html =
`<span style="font-weight:500">Unilateral uveitis (unless there is a positive aqueous PCR for varicella zoster virus)</span>`;

const vzvauRule_3_html = 
`<span style="font-weight:500">Evidence of varicella zoster virus infection in the eye</span>
<ol type="a" style="font-weight:400;">
    <li>Aqueous humor PCR positive for varicella zoster virus OR</li>
    <li>Sectoral iris atrophy in a patient > 60 years of age OR</li>
    <li>Concurrent or recent dermatomal Herpes zoster</li>
</ol>`;

const fusRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If vitreous cells are present, anterior chamber inflammation also should be present</li>
    <li>No evidence of retinitis</li>
</ol>`;

const fusRule_2_html = 
`<span style="font-weight:500">Unilateral uveitis</span>`;

const fusRule_3_html = 
`<span style="font-weight:500">Evidence of Fuchs uveitis syndrome</span>
<ol type="a" style="font-weight:400;">
    <li>Heterochromia OR</li>
    <li>Unilateral diffuse iris atrophy AND stellate keratic precipitates</li>
</ol>`;

const fusRule_4_html = 
`<span style="font-weight:500">Neither endotheliitis nor nodular, coin-shaped endothelial lesions</span>`;

const jiacauRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chamber inflammation</li>
</ol>`;

const jiacauRule_2_html = 
`<span style="font-weight:500">Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic</span>`;

const jiacauRule_3_html =
`<span style="font-weight:500">Juvenile idiopathic arthritis of the following subtypes</span>
<ol type="a" style="font-weight:400;">
    <li>Oligoarthritis, persistent or extended OR</li>
    <li>Rheumatoid factor negative polyarthritis OR</li>
    <li>Juvenile psoriatic arthritis, other than psoriatic spondylitis </li>
</ol>`;

const sauRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chamber inflammation</li>
</ol>`;

const sauRule_2_html = 
`<span style="font-weight:500">Characteristic uveitis course</span>
<ol type="a" style="font-weight:400;">
    <li>Acute or recurrent acute, unilateral or unilateral alternating course OR</li>
    <li>Chronic course with a history of a recurrent acute, unilateral or unilateral alternating course evolving into chronic course</li>
</ol>`;

const sauRule_3_html = 
`<span style="font-weight:500">ASAS-defined spondyloarthritis (axial or peripheral) and/or HLA-B27-positive</span>`;

const sauRule_4_html = 
`<span style="font-weight:500">Chronic uveitis with both ASAS-defined spondyloarthritis (axial or peripheral) AND HLA-B27-positive</span>`;

const tinuRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If vitritis or choroiditis or retinal vascular changes are present, anterior chamber inflammation also should be present</li>
</ol>`;

const tinuRule_2_html = 
`<span style="font-weight:500">Evidence of tubulointerstitial nephritis, either</span>
<ol type="a" style="font-weight:400;">
    <li>Positive renal biopsy OR</li>
    <li>Elevated urine β-microglobulin and either abnormal urine analysis or elevated serum creatinine</li>
</ol>`;

////////////////////////////////////////////
const sarcauRule_1_html =
`<span style="font-weight:500">Compatible uveitic picture, either</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior uveitis OR</li>
    <li>Intermediate or anterior/intermediate uveitis  OR</li>
    <li>Posterior uveitis with either choroiditis (paucifocal choroidal nodule(s) or multifocal choroiditis) OR</li>
    <li>Panuveitis with choroiditis or retinal vascular sheathing or retinal vascular occlusion</li>
</ol>`;

const sarcauRule_2_html =
`<span style="font-weight:500">Evidence of sarcoidosis, either</span>
<ol type="a" style="font-weight:400;">
    <li>Tissue biopsy demonstrating non-caseating granulomata OR</li>
    <li>Bilateral hilar adenopathy on chest imaging</li>
</ol>`;

const syphauRule_1_html = 
`<span style="font-weight:500">Uveitis with a compatible uveitic presentation, including</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior uveitis OR</li>
    <li>Intermediate uveitis or anterior/intermediate uveitis OR</li>
    <li>Posterior or panuveitis with one of the following presentations</li>
    <ol type="i" style="font-weight:400;">
        <li>Placoid inflammation of the retinal pigment epithelium or</li>
        <li>Multifocal inflammation of the retina/retinal pigment epithelium or</li>
        <li>Necrotizing retinitis or</li>
        <li>Retinal vasculitis</li>
    </ol>
</ol>`;

const syphauRule_2_html = 
`<span style="font-weight:500">Evidence of infection with Treponema pallidum, either</span>
<ol type="a" style="font-weight:400;">
    <li>Positive treponemal test and non-treponemal test OR</li>
    <li>Positive treponemal test with two different treponemal tests</li>
</ol>`;

const tbauRule_1_html = 
`<span style="font-weight:500">Evidence of a tubercular uveitis compatible uveitic syndrome</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior uveitis with iris nodules</li>
    <li>Serpiginous-like tubercular choroiditis</li>
    <li>Choroidal nodule (i.e. tuberculoma)</li>
    <li>In individuals with active systemic tuberculosis, multifocal choroiditis</li>
    <li>Occlusive retinal vasculitis</li>
</ol>`;

const tbauRule_2_html = 
`<span style="font-weight:500">Evidence of infection with Mycobacterium tuberculosis, either</span>
<ol type="a" style="font-weight:400;">
    <li>Histologically- or microscopically-confirmed infection with M. tuberculosis* OR</li>
    <li>Positive interferon-γ release assay (IGRA) OR</li>
    <li>Positive tuberculin skin test</li>
</ol>`;

////////////////////////////////////////////