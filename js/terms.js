const p = JSON.parse(sessionStorage.patient);

///////////////////////////////////////////////////////////////////////
const AGE = p.historyObj.age;
const FIRST_DIAGNOSIS = p.historyObj.firstDiagnosis;
const SYMPTOMATIC = p.historyObj.symptomatic;
const ONSET = p.historyObj.onset;
const COURSE = p.historyObj.course;
const LATERALITY = p.historyObj.laterality;
///////////////////////////////////////////////////////////////////////
const KERATITIS = p.ophthalExamObj.keratitis;
const KP = p.ophthalExamObj.kp;
const ANT_CHAMBER_CELLS = p.ophthalExamObj.antChamberCells;
const ANT_CHAMBER_FLARE = p.ophthalExamObj.antChamberFlare;
const IRIS_ATROPHY = p.ophthalExamObj.irisAtrophy;
const HETEROCHROMIA = p.ophthalExamObj.heterochromia;
const IRIS_NODULES = p.ophthalExamObj.irisNodules;
const ENDOTHELIITIS = p.ophthalExamObj.endotheliitis;
const ENDO_LESIONS = p.ophthalExamObj.endoLesions;
const VIT_CELLS = p.ophthalExamObj.vitCells;
const VIT_HAZE = p.ophthalExamObj.vitHaze;
//const VITRITIS = p.ophthalExamObj.vitritis;
const CHOROIDITIS = p.ophthalExamObj.choroiditis;
const RETINITIS = p.ophthalExamObj.retinitis;
//const RET_VAS_CHANGES = p.ophthalExamObj.retVasChanges;
///////////////////////////////////////////////////////////////////////
const DERM_HZ = p.pathologyObj.dermHZ;
const OLIGO_ARTH = p.pathologyObj.oligoArth;
const RF_NEG_POLY_ARTH = p.pathologyObj.rfNegPolyArth;
const JUV_PSOR_ARTH = p.pathologyObj.juvPsorArth;
const SPONDYLO_ARTH = p.pathologyObj.spondyloArth;
///////////////////////////////////////////////////////////////////////
const POS_PCR_CMV = p.labObj.posPcrCmv;
const POS_PCR_HSV = p.labObj.posPcrHsv;
const POS_PCR_VZV = p.labObj.posPcrVzv;
const POS_HLA_B27 = p.labObj.posHlaB27;
const POS_RENAL_BIOPSY = p.labObj.posRenalBiopsy;
const EL_URINE_BM = p.labObj.elUrineBM;
const AB_URINE_AN = p.labObj.abUrineAn;
const EL_SERUM_CR = p.labObj.elSerumCr;