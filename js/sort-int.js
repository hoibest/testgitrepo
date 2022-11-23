//Button HTML for results
let dxText = [];
let exText = [];
let possText = [];

const msiu = {
    link: "../classification/intermediate/msiu.html",
    disList: msiuList,
    nameShort : 'MSIU',
    nameLong : 'Multiple Sclerosis-associated Intermediate Uveitis',
    disRules: [msiuRule_1,msiuRule_2],
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

const ppiu = {
    link: "../classification/intermediate/ppiu.html",
    disList : ppiuList,
    nameShort : 'PPIU',
    nameLong : 'Pars Planitis',
    disRules : [ppiuRule_1,ppiuRule_2],
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

const nppiu = {
    link: "../classification/intermediate/nppiu.html",
    disList : nppiuList,
    disRules: [nppiuRule_1,nppiuRule_2],
    nameShort : 'NPPIU',
    nameLong : 'Intermediate Uveitis, Non-Pars Planitis Type',
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



intUveitisList = [msiu,ppiu,nppiu]
for(let i = 0; i < intUveitisList.length; i++){
    intUveitisList[i].ruleIn();
    intUveitisList[i].ruleOut();
    intUveitisList[i].ruleCheck();
}


function ruleIcon(dis){
    let ruleIconHtml = [];
    for(let i = 0; i < dis.disRules.length; i++){
        let rn = dis.disRules[i].ruleName;
        console.log(rn)
        if(dis.disList.inList.includes(rn)){
            ruleIconHtml.push(
            `<div>
                <img class='rule-icon' src='../../img/green-check-icon.png'>
            </div>`)
        }
        else if(dis.disList.outList.includes(rn)){
            ruleIconHtml.push(
            `<div>
                <img class='rule-icon' src='../../img/incorrect-icon.png'>
            </div>`)
        }
        else if(dis.disList.checkList.includes(rn)){
            ruleIconHtml.push(
            `<div>
                <img class='rule-icon' src='../../img/check-icon.png'>
            </div>`)
        }
    }
    ruleIconHtml = ruleIconHtml.join("");
    return ruleIconHtml;
}

function createBtn(dis,type){
    let comp4Html = ruleIcon(dis);
    let btnHtml = 
    `<div class="content" id="${dis.nameShort}" onclick="showModal(this)">
        <div class=${type}></div>
        <div class='comp2'>${dis.nameLong}</div>
        <div class='comp4'>
            ${comp4Html}
        </div>
        <div class='comp3' id="comp3-${dis.nameShort}"><img src='../../img/dropdown-icon.png'></div>
    </div>
    <div class="show-result" id="show-result-${dis.nameShort}">
        <div class="criteria-link" id="hide-criteria-link"><a href="${dis.link}">Check the classification criteria</a></div>
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



for(let i = 0; i < dxList.length; i++){
        for(let j = 0; j < intUveitisList.length; j++){
            if(dxList[i]==intUveitisList[j].nameShort){
                dxText.push(createBtn(intUveitisList[j],"c-comp1"));
        }
    }
}


for(let i = 0; i < possList.length; i++){
    for(let j = 0; j < intUveitisList.length; j++){
        if(possList[i]==intUveitisList[j].nameShort){
            possText.push(createBtn(intUveitisList[j],"p-comp1"));
        }
    }
}

for(let i = 0; i < exList.length; i++){
    for(let j = 0; j < intUveitisList.length; j++){
        if(exList[i]==intUveitisList[j].nameShort){
            exText.push(createBtn(intUveitisList[j],"e-comp1"));
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
        document.getElementById(`${add}`).style.fontWeight = '600';
    }
    else{
        document.getElementById(`show-result-${add}`).style.display = 'none';
        document.getElementById(`comp3-${add}`).style.transform = 'rotate(0deg)';
        document.getElementById(`${add}`).style.fontWeight = '400';
    }
}