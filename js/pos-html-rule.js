const apmppeEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
</ul>`

const bcEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Evidence of intraocular lymphoma on diagnostic vitrectomy or tissue biopsy</li>
</ul>`

const mewdsEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Bilateral simultaneous disease onset</li>
</ul>`

const mcpEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Evidence of infection with Mycobacterium tuberculosis, either
    <ol type="a" style="font-weight:400;">
        <li>Histologically- or microbiologically-confirmed infection with M. tuberculosis OR</li>
        <li>Positive interferon-Ɣ release assay (IGRA) OR</li>
        <li>Positive tuberculin skin test</li>
    </ol>
</li>
</ul>`

const picEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
</ul>`

const scEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Evidence of infection with Mycobacterium tuberculosis, either
    <ol type="a" style="font-weight:400;">
        <li>Histologically- or microbiologically-confirmed infection with M. tuberculosis OR</li>
        <li>Positive interferon-Ɣ release assay (IGRA) OR</li>
        <li>Positive tuberculin skin test</li>
    </ol>
</li>
</ul>`

const arnEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Intraocular specimen PCR-positive for cytomegalovirus or Toxoplasma gondii (unless there is immune compromise, morphologic evidence for >1 infection, the characteristic clinical picture of acute retinal necrosis, and the intraocular fluid specimen has a positive PCR for either HSV or VZV)</li>
</ul>`

const cmvrEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Intraocular specimen PCR-positive for herpes simplex virus, varicella zoster virus or Toxoplasma gondii (unless there is immune compromise, morphologic evidence for >1 infection, the characteristic picture of cytomegalovirus retinitis, and the intraocular fluid specimen also has a positive PCR for cytomegalovirus)</li>
</ul>`

const tprEx = 
`<ul>
<li>Both negative IgG AND IgM antibodies against Toxoplasma gondii (unless there is a positive PCR for Toxoplasma gondii from an aqueous or vitreous specimen)</li>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Intraocular specimen PCR-positive for herpes simplex virus, varicella zoster virus or cytomegalovirus  (unless there is immune compromise, morphologic evidence for >1 infection, the characteristic picture of toxoplasmic retinitis, and the intraocular fluid specimen also has a positive PCR for T. gondii)</li>
</ul>`



const apmppeRule_1_html = 
`<span style="font-weight:500">Paucifocal or multifocal choroidal lesions on clinical examination with</span>
<ol type="a" style="font-weight:400;">
    <li>Plaque-like or placoid appearance to the lesions</li>
</ol>`;

const apmppeRule_2_html = 
`<span style="font-weight:500">Characteristic fluorescein angiogram in the acute phase of the disease (lesions are hypofluorescent early and diffusely hyperfluorescent late)</span>
`;

const bcRule_1_html = 
`<span style="font-weight:500">Characteristic bilateral multifocal choroiditis on ophthalmoscopy</span>
<ol type="a" style="font-weight:400;">
    <li>Multifocal cream-colored or yellow-orange, oval or round choroidal lesions (“birdshot spots”)</li>
</ol>`;

const bcRule_2_html = 
`<span style="font-weight:500">Absent to mild anterior chamber inflammation</span>
<ol type="a" style="font-weight:400;">
    <li>Absent to mild anterior chamber cells AND</li>
    <li>No keratic precipitates AND</li>
    <li>No posterior synechiae</li>
</ol>`;

const bcRule_3_html = 
`<span style="font-weight:500">Absent to moderate vitritis</span>
`;

const bcRule_4_html = 
`<span style="font-weight:500">Multifocal choroiditis with</span>
<ol type="a" style="font-weight:400;">
    <li>Positive HLA-A29 test AND either (b. or c.)</li>
    <li>Characteristic “birdshot” spots (multifocal cream-colored or yellow-orange, oval or round choroidal lesions) on ophthalmoscopy OR</li>
    <li>Characteristic indocyanine green angiogram (multifocal hypofluorescent spots) without characteristic “birdshot” spots on ophthalmoscopy</li>
</ol>`;

const mewdsRule_1_html = 
`<span style="font-weight:500">Multifocal chorioretinal gray-white spots with foveal granularity</span>
`;

const mewdsRule_2_html = 
`<span style="font-weight:500">Characteristic fluorescein angiogram or optical coherence tomogram (OCT)</span>
<ol type="a" style="font-weight:400;">
    <li>“Wreath-like” hyperfluorescent lesions on fluorescein angiogram OR</li>
    <li>Hyperreflective lesions on OCT extending from the retinal pigment epithelium, into and/or through the ellipsoid zone into the outer nuclear layer of the retina</li>
</ol>`;

const mewdsRule_3_html = 
`<span style="font-weight:500">Absent to mild anterior chamber and vitreous inflammation</span>
`;

const mcpRule_1_html = 
`<span style="font-weight:500">Multifocal choroiditis with</span>
<ol type="a" style="font-weight:400;">
    <li>Oval or round lesions AND</li>
    <li>Predominant lesion size >125 µm</li>
</ol>`;

const mcpRule_2_html = 
`<span style="font-weight:500">Characteristic appearance</span>
<ol type="a" style="font-weight:400;">
    <li>“Punched-out atrophic” chorioretinal scars OR</li>
    <li>Active lesions with more than minimal vitreous inflammation</li>
</ol>`;

const mcpRule_3_html = 
`<span style="font-weight:500">Inflammatory lesions and/or characteristic scars involving the mid-periphery or periphery with or without posterior pole involvement</span>
`;

const picRule_1_html = 
`<span style="font-weight:500">Multifocal choroidal inflammatory lesions</span>
<ol type="a" style="font-weight:400;">
    <li>Predominant lesion size <250 µm AND</li>
    <li>Punctate lesion appearance</li>
</ol>`;

const picRule_2_html = 
`<span style="font-weight:500">Lesion involvement of posterior pole with or without mid-periphery</span>
`;

const picRule_3_html = 
`<span style="font-weight:500">Absent to minimal anterior chamber and vitreous inflammation</span>
`;

const scRule_1_html = 
`<span style="font-weight:500">Paucifocal or multifocal choroiditis with an ameboid or serpentine shape*</span>
`;

const scRule_2_html = 
`<span style="font-weight:500">Characteristic imaging</span>
<ol type="a" style="font-weight:400;">
    <li>Fluorescein angiogram with early diffuse hypofluorescent lesions and late hyperfluorescent lesion borders OR</li>
    <li>Fundus auto-fluorescence with hypo-autofluorescent lesions with hyper-autofluorescent borders</li>
</ol>`;

const scRule_3_html = 
`<span style="font-weight:500">Absent to minimal anterior chamber and vitreous inflammation</span>
`;


const arnRule_1_html = 
`<span style="font-weight:500">Necrotizing retinitis involving the peripheral retina</span>
`;

const arnRule_2_html = 
`<span style="font-weight:500">Evidence of infection with either herpes simplex virus (HSV) or Varicella zoster virus (VZV)</span>
<ol type="a" style="font-weight:400;">
    <li>Positive PCR* for either HSV or VZV from either an aqueous or vitreous specimen</li>
</ol>`;

const arnRule_3_html = 
`<span style="font-weight:500">Characteristic clinical picture</span>
<ol type="a" style="font-weight:400;">
    <li>Circumferential or confluent retinitis AND</li>
    <li>Retinal vascular sheathing and/or occlusion AND</li>
    <li>More than minimal vitritis † </li>
</ol>`;

const cmvrRule_1_html = 
`<span style="font-weight:500">Necrotizing retinitis with indistinct borders due to numerous small (<50 μm) satellites</span>
`;

const cmvrRule_2_html = 
`<span style="font-weight:500">Immune compromise, either</span>
<ol type="a" style="font-weight:400;">
    <li>Systemic (e.g. AIDS, organ transplant, chemotherapy) OR</li>
    <li>Ocular (e.g. intraocular corticosteroids or chemotherapy)</li>
</ol>`;

const cmvrRule_3_html = 
`<span style="font-weight:500">Characteristic clinical picture ([a. or b. or c.] AND d.)</span>
<ol type="a" style="font-weight:400;">
    <li>Wedge-shaped area of retinitis OR</li>
    <li>Hemorrhagic appearance of the retinitis OR</li>
    <li>Granular appearance of the retinitis AND</li>
    <li>Absent to mild vitritis</li>
</ol>`;

const cmvrRule_4_html = 
`<span style="font-weight:500">Evidence of intraocular infection with cytomegalovirus</span>
<ol type="a" style="font-weight:400;">
    <li>Positive PCR* for cytomegalovirus from either the aqueous or vitreous specimen</li>
</ol>`;

const tprRule_1_html = 
`<span style="font-weight:500">Focal or paucifocal necrotizing retinitis*</span>
`;

const tprRule_2_html = 
`<span style="font-weight:500">Evidence of infection with Toxoplasma gondii</span>
<ol type="a" style="font-weight:400;">
    <li>Positive PCR† for Toxoplasma gondii from either the aqueous or vitreous specimen OR</li>
    <li>Positive serum IgM antibodies against Toxoplasma gondii</li>
</ol>`;

const tprRule_3_html = 
`<span style="font-weight:500">Characteristic clinical ocular features</span>
<ol type="a" style="font-weight:400;">
    <li>Hyperpigmented and/or atrophic chorioretinal scar (“toxoplasmic scar”) AND (b. or c.)</li>
    <li>Round or oval retinitis lesions OR</li>
    <li>Recurrent acute (episodic) course</li>
</ol>`;

