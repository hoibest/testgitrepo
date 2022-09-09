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
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
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
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
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
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
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
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
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