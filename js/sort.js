//Button HTML for results
let dxText = [];
let exText = [];
let possText = [];

const cmvau = {
    link: "../classification/anterior/cmvau.html",
    disList: cmvauList,
    nameShort : 'CMVAU',
    nameLong : 'Cytomegalovirus Anterior Uveitis',
    disRules: [cmvauRule_1,cmvauRule_2],
    inResult : [], outResult : [], checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const hsau = {
    link: "../classification/anterior/hsau.html",
    disList : hsauList,
    nameShort : 'HSAU',
    nameLong : 'Herpes Simplex Anterior Uveitis',
    disRules : [hsauRule_1,hsauRule_2,hsauRule_3],
    inResult : [],outResult : [],checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const vzvau = {
    link: "../classification/anterior/vzvau.html",
    disList : vzvauList,
    disRules: [vzvauRule_1,vzvauRule_2,vzvauRule_3],
    nameShort : 'VZVAU',
    nameLong : 'Varicella Zoster Virus Anterior Uveitis',
    inResult : [], outResult : [], checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const fus = {
    link: "../classification/anterior/fus.html",
    disList : fusList,
    disRules: [fusRule_1,fusRule_2,fusRule_3,fusRule_4],
    nameShort : 'FUS',
    nameLong : 'Fuchs Uveitis Syndrome',
    inResult : [], outResult : [], checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const jiacau = {
    link: "../classification/anterior/jiacau.html",
    disList : jiacauList,
    disRules: [jiacauRule_1,jiacauRule_2,jiacauRule_3],
    nameShort : 'JIACAU',
    nameLong : 'Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis',
    inResult : [], outResult : [], checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const shau = {
    link: "../classification/anterior/shau.html",
    disList : sauList,
    disRules: [sauRule_1,sauRule_2,sauRule_3,sauRule_4],
    nameShort : 'SHAU',
    nameLong : 'Spondyloarthritis/HLA-B27-associated Anterior Uveitis',
    inResult : [], outResult : [], checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const tinu = {
    link: "../classification/anterior/tinu.html",
    disList : tinuList,
    disRules : [tinuRule_1,tinuRule_2],
    nameShort : 'TINU',
    nameLong : 'Tubulointerstitial Nephritis with Uvieitis Syndrome',
    inResult : [], outResult : [], checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}



function ruleIn(disList,dis,inResult){
    if(disList.inList.length==0){
        inResult.push(`<div class="na">N/A</div>`);
    }
    if(dis.disRules){
        for(let i = 0; i < disList.inList.length; i++){
            for(let j = 0; j < dis.disRules.length; j++){
                if(disList.inList[i]==dis.disRules[j].ruleName){
                    inResult.push(dis.disRules[j].userInput());
                }
            }
        }
    }
}

function ruleOut(disList,dis,outResult){
    if(disList.outList.length==0){
        outResult.push(`<div class="na">N/A</div>`);
    }
    if(dis.disRules){
        for(let i = 0; i < disList.outList.length; i++){
            for(let j = 0; j < dis.disRules.length; j++){
                if(disList.outList[i]==dis.disRules[j].ruleName){
                    outResult.push(dis.disRules[j].userInput());
                }
            }
        }
    }
}

function ruleCheck(disList,dis,checkResult){
    if(disList.checkList.length==0){
        checkResult.push(`<div class="na">N/A</div>`);
    }
    if(dis.disRules){
        for(let i = 0; i < disList.checkList.length; i++){
            for(let j = 0; j < dis.disRules.length; j++){
                if(disList.checkList[i]==dis.disRules[j].ruleName){
                    checkResult.push(dis.disRules[j].userInput());
                }
            }
        }
    }
}



antUveitisList = [cmvau,hsau,vzvau,fus,jiacau,shau,tinu]
for(let i = 0; i < antUveitisList.length; i++){
    antUveitisList[i].ruleIn();
    antUveitisList[i].ruleOut();
    antUveitisList[i].ruleCheck();
}


function createBtn(dis,type){
    let btnHtml = 
    `<div class="content" id="${dis.nameShort}" onclick="showModal(this)">
        <div class=${type}></div>
        <div class='comp2'>${dis.nameLong}</div>
        <div class='comp3' id="comp3-${dis.nameShort}"><img src='../../img/dropdown-icon.png'></div>
    </div>
    <div class="show-result" id="show-result-${dis.nameShort}">
        <div class="criteria-link" onclick="goToPage('${dis.link}')"><a>Check the classification criteria</a></div>
        <div id="criteria-not-fulfilled" class="not-fulfilled">
            <div style="font-size:20px;font-weight:700;">Criteria not fulfilled</div>
            <div style="font-size:12px;font-weight:400;">Requires further evidence to be fulfilled</div>
            <br>
            <div>
                <div>
                    <div id="dis-html">
                        ${joinText(dis.checkResult,"")}
                    </div>
                </div>
            </div>
        </div>
        <div id="criteria-fulfilled" class="fulfilled">
            <div style="font-size:20px;font-weight:700;">Criteria fulfilled</div>
            <br>
            <div>
                <div>
                    <div id="dis-html">
                    ${joinText(dis.inResult,"")}
                    </div>
                </div>
            </div>
        </div>
        <div id="criteria-contradicted" class="contradicted">
            <div style="font-size:20px;font-weight:700;">Criteria contradicted</div>
            <div style="font-size:12px;font-weight:400;">*Disease may be classified through other evidence</div>
            <br>
            <div>
                <div>
                    <div id="dis-html">
                    ${joinText(dis.outResult,"")}
                    </div>
                </div>
            </div>
        </div>
    </div>`
    return btnHtml;
}



if(dxList.length==0){
    let c = COURSE;
    let l = LATERALITY;
    if(c==`Don't know`){c=`(unknown course)`;}
    if(l==`Don't know`){l=`(unknown laterality)`;}
    let undifferentiated = `Undifferentiated, ${l}, ${c} anterior uveitis`
    dxText.push(
        `<div class="content" id="undifferentiated" onclick="showModal(this)">
            <div class="c-comp1"></div>
            <div class='comp2'>Undifferentiated anterior uveitis</div>
            <div class='comp3' id="comp3-undifferentiated"><img src='../../img/dropdown-icon.png'></div>
        </div>
        <div class="show-result" id="show-result-undifferentiated">
            <div id="criteria-not-fulfilled" class="not-fulfilled">
                <div style="font-size:16px;font-weight:400;">${undifferentiated}</div>
                <br>
                <div style="font-size:12px;font-weight:400; margin-bottom: 2rem;">
                    50% of presented uveitis cases are undifferentiated. 
                    <br>
                    Also, check "Possible Uveitides" and see whether further evidence can be fulfilled. 
                    For example, 'retinitis' or 'vitreous cells' is required to satisfy some criteria. 
                </div>
            </div>
        </div>`
    );
}
else{
    for(let i = 0; i < dxList.length; i++){
        for(let j = 0; j < antUveitisList.length; j++){
            if(dxList[i]==antUveitisList[j].nameShort){
                dxText.push(createBtn(antUveitisList[j],"c-comp1"));
            }
        }
    }
}

for(let i = 0; i < possList.length; i++){
    for(let j = 0; j < antUveitisList.length; j++){
        if(possList[i]==antUveitisList[j].nameShort){
            possText.push(createBtn(antUveitisList[j],"p-comp1"));
        }
    }
}

for(let i = 0; i < exList.length; i++){
    for(let j = 0; j < antUveitisList.length; j++){
        if(exList[i]==antUveitisList[j].nameShort){
            exText.push(createBtn(antUveitisList[j],"e-comp1"));
        }
    }
}


function showModal(el){
    let add = el.id;
    el.classList.toggle('active')
    let content = el.classList.value;
    console.log(content)
    if(content == 'content active'){
        document.getElementById(`show-result-${add}`).style.display = 'flex';
        document.getElementById(`comp3-${add}`).style.transform = 'rotate(180deg)';
    }
    else{
        document.getElementById(`show-result-${add}`).style.display = 'none';
        document.getElementById(`comp3-${add}`).style.transform = 'rotate(0deg)';
    }
}




