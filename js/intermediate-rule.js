const TRUE = 1;
const FALSE = 0;
const IDK = 2;
const dk = `Don't know`
const ALL_EXCLUDED = 99;

class ruleList {
    inList = [];
    outList = [];
    checkList = [];
};

let dxList = [];
let exList = [];
let possList = [];

function is(val,ans){
    if(val==ans){
        return TRUE;
    }
    else if(val==dk){
        return IDK;
    }
    else {return FALSE;}
}

function numIs(val){
    if(val > 0){
        return TRUE;
    }
    else if(val==0){
        return FALSE;
    }
    else{
        return IDK;
    }
}


let msiuList = new ruleList();
let ppiuList = new ruleList();
let nppiuList = new ruleList();

function msiuRuleOne(){
    let rule = 'msiu #1';
    let disList = msiuList;
    let a = IDK; let b = IDK; let c = IDK;
    if((VIT_CELLS==dk&&VIT_CELLS==0)&&(VIT_HAZE==dk&&VIT_HAZE==0)){
        a = FALSE;
    }
    else if(VIT_CELLS > 0 || VIT_HAZE > 0){
        a = TRUE;
    }
    else{
        a = IDK;
    }
    if(ANT_CHAMBER_CELLS > 0){
        if(VIT_HAZE!=dk&&ANT_CHAMBER_FLARE!=dk){
            if(VIT_HAZE > ANT_CHAMBER_FLARE){
                b = TRUE;
            }
            else{
                b = FALSE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(ANT_CHAMBER_CELLS==0){
        b = TRUE;
    }
    else{
        b = IDK;
    }
    if(RETINITIS!=dk&&CHOROIDITIS!=dk){
        if(RETINITIS=='yes'||CHOROIDITIS=='yes'){
            c = FALSE;
        }
        else if(RETINITIS=='no'&&CHOROIDITIS=='no'){
            c = TRUE;
        }
    }
    else{
        c = IDK;
    }
    

    if(a==FALSE||b==FALSE||c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE&&b==TRUE&&c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function msiuRuleTwo(){
    let rule = 'msiu #2';
    let disList = msiuList;
    let a = IDK;
    a = is(MS,"yes");
    if(a==FALSE){disList.outList.push(rule);}
    else if(a==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function msiuDiagnosis(){
    let disList = msiuList;
    msiuRuleOne();
    msiuRuleTwo();

    if(disList.outList.includes('msiu #1')||disList.outList.includes('msiu #2')){
        exList.push('MSIU');
    }
    else if(disList.inList.includes('msiu #1')&&disList.inList.includes('msiu #2')){
        dxList.push('MSIU');
    }
    else{
        possList.push('MSIU');
    }
}

function ppiuRuleOne(){
    let rule = 'ppiu #1';
    let disList = ppiuList;
    let a = IDK; let b = IDK; let c = IDK; let d = IDK;
    if((VIT_CELLS==dk&&VIT_CELLS==0)&&(VIT_HAZE==dk&&VIT_HAZE==0)){
        a = FALSE;
    }
    else if(VIT_CELLS > 0 || VIT_HAZE > 0){
        a = TRUE;
    }
    else{
        a = IDK;
    }
    if(ANT_CHAMBER_CELLS > 0){
        if(VIT_HAZE!=dk&&ANT_CHAMBER_FLARE!=dk){
            if(VIT_HAZE > ANT_CHAMBER_FLARE){
                b = TRUE;
            }
            else{
                b = FALSE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(ANT_CHAMBER_CELLS==0){
        b = TRUE;
    }
    else{
        b = IDK;
    }
    if(RETINITIS!=dk&&CHOROIDITIS!=dk){
        if(RETINITIS=='yes'||CHOROIDITIS=='yes'){
            c = FALSE;
        }
        else if(RETINITIS=='no'&&CHOROIDITIS=='no'){
            c = TRUE;
        }
    }
    else{
        c = IDK;
    }
    d = is(INT_RET_VAS_OCCLUSION,"no")

    if(a==FALSE||b==FALSE||c==FALSE||d==FALSE){disList.outList.push(rule);}
    else if(a==TRUE&&b==TRUE&&c==TRUE&&d==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function ppiuRuleTwo(){
    let rule = 'ppiu #2';
    let disList = ppiuList;
    let a = IDK; let b = IDK; 
    a = is(SNOWBALLS,"yes");
    b = is(SNOWBANKS,"yes");
    if(a==FALSE&&b==FALSE){disList.outList.push(rule);}
    else if(a==TRUE||b==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function ppiuDiagnosis(){
    let disList = ppiuList;
    ppiuRuleOne();
    ppiuRuleTwo();
    if(disList.outList.includes('ppiu #1')||disList.outList.includes('ppiu #2')){
        exList.push('PPIU');
    }
    else if(disList.inList.includes('ppiu #1')&&disList.inList.includes('ppiu #2')){
        dxList.push('PPIU');
    }
    else{
        possList.push('PPIU');
    }
}

function nppiuRuleOne(){
    let rule = 'nppiu #1';
    let disList = nppiuList;
    let a = IDK; let b = IDK; let c = IDK;
    if((VIT_CELLS==dk&&VIT_CELLS==0)&&(VIT_HAZE==dk&&VIT_HAZE==0)){
        a = FALSE;
    }
    else if(VIT_CELLS > 0 || VIT_HAZE > 0){
        a = TRUE;
    }
    else{
        a = IDK;
    }
    if(ANT_CHAMBER_CELLS > 0){
        if(VIT_HAZE!=dk&&ANT_CHAMBER_FLARE!=dk){
            if(VIT_HAZE > ANT_CHAMBER_FLARE){
                b = TRUE;
            }
            else{
                b = FALSE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(ANT_CHAMBER_CELLS==0){
        b = TRUE;
    }
    else{
        b = IDK;
    }
    c = is(RETINITIS,"no");

    if(a==FALSE||b==FALSE||c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE&&b==TRUE&&c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function nppiuRuleTwo(){
    let rule = 'nppiu #2';
    let disList = nppiuList;
    let a = IDK; let b = IDK; 
    a = is(SNOWBALLS,"no");
    b = is(SNOWBANKS,"no");
    if(a==FALSE||b==FALSE){disList.outList.push(rule);}
    else if(a==TRUE&&b==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function nppiuDiagnosis(){
    let disList = nppiuList;
    nppiuRuleOne();
    nppiuRuleTwo();
    if(disList.outList.includes('nppiu #1')||disList.outList.includes('nppiu #2')){
        exList.push('NPPIU');
    }
    else if(disList.inList.includes('nppiu #1')&&disList.inList.includes('nppiu #2')){
        dxList.push('NPPIU');
    }
    else{
        possList.push('NPPIU');
    }
}

function intDiagnosis(){
    msiuDiagnosis();
    ppiuDiagnosis();
    nppiuDiagnosis();
    

    console.log(`dxList: ${dxList}
possList: ${possList}
exList: ${exList}`)
}