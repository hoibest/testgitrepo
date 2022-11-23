const html_1 = "../intermediate-diagnosis/diagnosis01.html";
const html_2 = "../intermediate-diagnosis/diagnosis02.html";

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

        let line = `<div class="user-input" style="font-weight:400"><span class="user-input-href"><a href="${href[i]}">${arr1[i]}</a></span>: <span class="user-input-ans">${arr2[i]}</span></div>`
        textArr.push(line);
    }
    textArr.push(`</div>`);
    return joinText(textArr,"");
}


const msiuRule_1 = {
    ruleName: 'msiu #1',
    rule : msiuRule_1_html,
    variableNames: [`Vitreous cells`,'Vitreous haze','Anterior chamber cells','Anterior chamber inflammation','Retinitis','Choroiditis'],
    variableValues: [VIT_CELLS,VIT_HAZE,ANT_CHAMBER_CELLS,ANT_CHAMBER_FLARE,RETINITIS,CHOROIDITIS],
    href: [html_1,html_1,html_1,html_1,html_1,html_1],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

const msiuRule_2 = {
    ruleName: 'msiu #2',
    rule : msiuRule_2_html,
    variableNames: ['Multiple sclerosis'],
    variableValues: [MS],
    href: [html_2],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

const ppiuRule_1 = {
    ruleName: 'ppiu #1',
    rule : ppiuRule_1_html,
    variableNames: [`Vitreous cells`,'Vitreous haze','Anterior chamber cells','Anterior chamber inflammation','Retinitis','Choroiditis','Retinal vascular occlusion in posterior pole & mid-periphery'],
    variableValues: [VIT_CELLS,VIT_HAZE,ANT_CHAMBER_CELLS,ANT_CHAMBER_FLARE,RETINITIS,CHOROIDITIS,INT_RET_VAS_OCCLUSION],
    href: [html_1,html_1,html_1,html_1,html_1,html_1,html_2],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

const ppiuRule_2 = {
    ruleName: 'ppiu #2',
    rule : ppiuRule_2_html,
    variableNames: ['Snowbanks','Snowballs'],
    variableValues: [SNOWBANKS,SNOWBALLS],
    href: [html_2,html_2],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

const nppiuRule_1 = {
    ruleName: 'nppiu #1',
    rule : nppiuRule_1_html,
    variableNames: [`Vitreous cells`,'Vitreous haze','Anterior chamber cells','Anterior chamber inflammation','Retinitis'],
    variableValues: [VIT_CELLS,VIT_HAZE,ANT_CHAMBER_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    href: [html_1,html_1,html_1,html_1,html_1],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

const nppiuRule_2 = {
    ruleName: 'nppiu #2',
    rule : nppiuRule_2_html,
    variableNames: ['Snowbanks','Snowballs'],
    variableValues: [SNOWBANKS,SNOWBALLS],
    href: [html_2,html_2],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}