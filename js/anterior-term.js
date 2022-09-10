const html_1 = "../anterior-diagnosis/diagnosis01.html";
const html_2 = "../anterior-diagnosis/diagnosis02.html";
const html_3 = "../anterior-diagnosis/diagnosis03.html";
const html_4 = "../anterior-diagnosis/diagnosis04.html";
const html_5 = "../anterior-diagnosis/diagnosis05.html";

function joinText(arr,slice){
    let text = arr.join(slice);
    return text;
}

function inputText(arr1,arr2,href,rule){
    if(arr1.length!=arr2.length){
        console.log('hi')
        return;
    }
    let textArr = [];
    textArr.push(rule);
    textArr.push(`<div class="user-input-box" id="user-input-html">`)
    textArr.push(`<div style="font-weight:500;">User Input</div>`);
    for(let i = 0; i < arr1.length; i++){

        let line = `<div class="user-input" style="font-weight:400"><span class="user-input-href">${arr1[i]}</span>: <span class="user-input-ans">${arr2[i]}</span></div>`
        textArr.push(line);
    }
    textArr.push(`</div>`);
    return joinText(textArr,"");
}


const cmvauRule_1 = {
    ruleName: 'cmvau #1',
    rule : cmvauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`, `Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    href: [html_2,html_3,html_2,html_3],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}


const cmvauRule_2 = {
    ruleName: 'cmvau #2',
    rule : cmvauRule_2_html,
    variableNames: [`PCR CMV(+)`],
    variableValues: [POS_PCR_CMV],
    href: [html_5],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

const hsauRule_1 = {
    ruleName : "hsau #1",
    rule : hsauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    href: [html_2,html_3,html_2,html_3,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}


const hsauRule_2 = {
    ruleName : "hsau #2",
    rule : hsauRule_2_html,
    variableNames: ['Laterality','PCR HSV(+)'],
    variableValues: [LATERALITY,POS_PCR_HSV],
    href: [html_1,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule)
    }
}

const hsauRule_3 = {
    ruleName : "hsau #3",
    rule : hsauRule_3_html,
    variableNames: [`PCR HSV(+)`,`Iris atrophy`,`Age`,`Keratitis`],
    variableValues: [POS_PCR_HSV,IRIS_ATROPHY,AGE,KERATITIS],
    href: [html_5,html_2,html_1,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const vzvauRule_1 = {
    ruleName : "vzvau #1",
    rule :vzvauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    href: [html_2,html_3,html_2,html_3,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const vzvauRule_2 = {
    ruleName : "vzvau #2",
    rule : vzvauRule_2_html,
    variableNames: ['Laterality','PCR VZV(+)'],
    variableValues: [LATERALITY,POS_PCR_VZV],
    href: [html_1,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule)
    }
}

const vzvauRule_3 = {
    ruleName : "vzvau #3",
    rule :vzvauRule_3_html,
    variableNames: [`PCR VZV(+)`,`Iris atrophy`,`Age`,`Dermatomal herpes zoster`],
    variableValues: [POS_PCR_VZV,IRIS_ATROPHY,AGE,DERM_HZ],
    href: [html_5,html_2,html_1,html_4],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const fusRule_1 = {
    ruleName : "fus #1",
    rule : fusRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    href: [html_2,html_3,html_2,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const fusRule_2 = {
    ruleName : "fus #2",
    rule : fusRule_2_html,
    variableNames: ['Laterality'],
    variableValues: [LATERALITY],
    href: [html_1],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule)
    }
}

const fusRule_3 = {
    ruleName : "fus #3",
    rule : fusRule_3_html,
    variableNames: [`Heterochromia`,`Iris atrophy`,`Keratic precipitates`],
    variableValues: [HETEROCHROMIA,IRIS_ATROPHY,KP],
    href: [html_2,html_2,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const fusRule_4 = {
    ruleName : "fus #4",
    rule : fusRule_4_html,
    variableNames: ['Endotheliitis',`Endothelial Lesions`],
    variableValues: [ENDOTHELIITIS,ENDO_LESIONS],
    href: [html_2,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule)
    }
}

const jiacauRule_1 = {
    ruleName : "jiacau #1",
    rule : jiacauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE],
    href: [html_2,html_3,html_2,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const jiacauRule_2 = {
    ruleName : "jiacau #2",
    rule : jiacauRule_2_html,
    variableNames: ['Course',`Initial diagnosis`,`Onset`,`asymptomatic/mimimally symptomatic`],
    variableValues: [COURSE,FIRST_DIAGNOSIS,ONSET,SYMPTOMATIC],
    href: [html_1,html_1,html_1,html_1],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule)
    }
}

const jiacauRule_3 = {
    ruleName : "jiacau #3",
    rule : jiacauRule_3_html,
    variableNames: [`Oligoarthritis`,`Polyarthritis`,`Psoriasis and arthritis`],
    variableValues: [OLIGO_ARTH,RF_NEG_POLY_ARTH,JUV_PSOR_ARTH],
    href: [html_4,html_4,html_4],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const sauRule_1 = {
    ruleName : "sau #1",
    rule : sauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE],
    href: [html_2,html_3,html_2,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const sauRule_2 = {
    ruleName : "sau #2",
    rule : sauRule_2_html,
    variableNames: [`Course`,`Laterality`],
    variableValues: [COURSE,LATERALITY],
    href: [html_1,html_1],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const sauRule_3 = {
    ruleName : "sau #3",
    rule : sauRule_3_html,
    variableNames: [`Diagnosed spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [SPONDYLO_ARTH,POS_HLA_B27],
    href: [html_4,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const sauRule_4 = {
    ruleName : "sau #4",
    rule : sauRule_4_html,
    variableNames: [`Course`,`Diagnosed spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [COURSE,SPONDYLO_ARTH,POS_HLA_B27],
    href: [html_1,html_4,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const tinuRule_1 = {
    ruleName : "tinu #1",
    rule : tinuRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous Cells`,'Choroiditis',`Anterior chamber inflammation`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,CHOROIDITIS,ANT_CHAMBER_FLARE],
    href:[html_2,html_3,html_3,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}

const tinuRule_2 = {
    ruleName : "tinu #2",
    rule : tinuRule_2_html,
    variableNames: [`Renal biopsy(+)`,`Elevated urine β-microglobulin`,`Abnormal urine analysis`,`Elevated serum creatinine`],
    variableValues: [POS_RENAL_BIOPSY,EL_URINE_BM,AB_URINE_AN,EL_SERUM_CR],
    href: [html_5,html_5,html_5,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href,this.rule);
    }
}





