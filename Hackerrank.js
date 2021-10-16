let puppeteer = require('puppeteer');
const {answers}=require('./ans');
// creates headless browser
let browserStartPromise = puppeteer.launch({
    
    // visible browser window
    headless: false,
    // type spped 1 sec to prove it is done manually 
   //slowMo : 200,
    //to open the browser full screen
    // setViewport:{ width: 1920, height: 1040 },
    defaultViewport: null,
    args:[ '--window-size=1920,1040',"--disable-notifications"]
});


let arr=[];

browserStartPromise.then(function (browserObj){
    console.log("browser opened");
    //nextTab1=browserObj;
    let browserTabOpenPromise =  browserObj.newPage();
   return  browserTabOpenPromise;

}).then(function (newtab){
   
     page=newtab
     console.log("new tab opened");
     let gpageopen=page.goto("https://www.google.com/");
     return gpageopen;
}).then(function (){
    console.log("GooglePagrOpen");
    
     let pepcodingSite=page.type("input[title ='Search']","HackerRank");
     return pepcodingSite;
 
 }).then(function (){
     console.log("wait for element to be visibale");
     
      let enterwillbedone=page.keyboard.press("Enter",{delay:100});
      return enterwillbedone;
 }).then(function (){
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
     return waitForElement;
}).then(function (){
    
    console.log("click");
     let elemClick=page.click(".LC20lb.DKV0Md");
     return elemClick;

}).then(function (){
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("#menu-item-2887",{visible:true});
    
     return waitForElement;

}).then(function (){
    
    console.log("click");
     let elemClick=page.click("#menu-item-2887");
     return elemClick;

}).then(function (){
    arr=
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("div.fl-button-wrap.fl-button-width-auto.fl-button-left>a",{visible:true});
    
     return waitForElement;

}).then(function (){
    
    console.log("click");
     let elemClick=page.click("div.fl-button-wrap.fl-button-width-auto.fl-button-left>a");
     return elemClick;
}).then(function (){
    arr=
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("input#input-1.input",{visible:true});
    
     return waitForElement;
}).then(function (){
    console.log("Enter Your Email");
    
     let pepcodingSite=page.type("input#input-1.input","xotomoc779@macauvpn.com");
     return pepcodingSite;
}).then(function (){
    console.log("Enter Your Passward");
    
     let pepcodingSite=page.type("input#input-2.input","Yuvraj",{delay:100});
     return pepcodingSite;
})
.then(function (){
    
    console.log("click");
     let elemClick=page.click("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
     return elemClick;

     
}).then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("li>a.nav-link.contests",{visible:true});
    
     return waitForElement;
}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("li>a.nav-link.contests");
     return elemClick;

}).then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("a.text-link.filter-item",{visible:true});
    
     return waitForElement;

    
}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("a.text-link.filter-item");
     return elemClick;
})
.then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("p.mmT",{visible:true});
    
     return waitForElement;

    
}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("p.mmT");
     return elemClick;
}).then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("#content > div > section > header > div > div.tabs-cta-wrapper > ul > li:nth-child(4)",{visible:true});
    
     return waitForElement;

    
}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("#content > div > section > header > div > div.tabs-cta-wrapper > ul > li:nth-child(4)");
     return elemClick;
}).then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("button#confirmBtn.btn.btn-primary",{visible:true});
    
     return waitForElement;

    
}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("button#confirmBtn.btn.btn-primary");
     return elemClick;

}).then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("#moderator",{visible:true});
    
     return waitForElement;

    
}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("#moderator");
     return elemClick;
}).then(function (){
    console.log("type");
    
     let pepcodingSite=page.type("#moderator","sumit_malik353",{delay:100});
     return pepcodingSite;
}).then(function (){
    
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("button.btn.moderator-save",{visible:true});
    
     return waitForElement;

}).then(function (){
    
    console.log("click");
     
    let elemClick=page.click("button.btn.moderator-save");
     return elemClick;
})
