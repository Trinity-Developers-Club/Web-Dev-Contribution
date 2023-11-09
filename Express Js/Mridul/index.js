"use strict"

// const App=require("app.js");
// import App from "./app.js"
let sel=document.getElementById('options');
let type=document.getElementById('type');
let btn=document.getElementById("options-button");
btn.addEventListener('click',function(){
    if(sel.value==0){
        if(type.value==1){
            getJEEMRegister();
        }else if(type.value==2){
            getJEEMResult();
        }else if(type.value==3){
            getJEEMN();
        }else{
            getJEEM();
        }
    }else if(sel.value==1){
        if(type.value==1){
            getJEEARegister();
        }else if(type.value==2){
            getJEEAResult();
        }else{
            getJEEA();
            
        }
    }else if(sel.value==2){
        if(type.value==1){
            getNEETRegister();
        }else if(type.value==2){
            getNEETResult();
        }else{
            getNEET();
        }
    }
});
function getJEEM(){
    fetch("./JEEM.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('.list-show').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                let hr=document.createElement('hr');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.content;
                li.appendChild(a);
                ul.appendChild(li);
                ul.appendChild(hr);
                        
            })
        });
}
function getJEEMN(){
    fetch("./JEEMnews.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                let hr=document.createElement('hr');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.content;
                li.appendChild(a);
                ul.appendChild(li);
                ul.appendChild(hr);
                        
            })
        });
}
function getJEEMRegister(){
    fetch("./JEE_register.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML=`<li><a href="https://examinationservices.nic.in/jeemain22/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFVj34FesvYg1WX45sPjGXBr4k3BRYopUWpW/JMEseWKI">JEE Main Registration</a></li><hr/>`;
        }
    });
}
function getJEEMResult(){
    fetch("./JEEMnews.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML=`<li><a href="https://ntaresults.nic.in/resultservices/JEEMAINauth22s2p1">JEE Mains Result</a></li><hr/>`;
            }
        });
}
function getJEEA(){
    fetch("./JEEA.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                let hr=document.createElement('hr');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.contt;
                li.appendChild(a);
                ul.appendChild(li);
                ul.appendChild(hr);
                        
            })
        });
}
function getJEEARegister(){
    fetch("./NEET.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                data.forEach(object=>{
                document.querySelector('ul').innerHTML=`<li><a href="https://jeeadv.nic.in/jeeadvapp/root/loginpage.aspx">JEE Adv Registration</a></li><hr/>`;
            })}
        });
}
function getJEEAResult(){
    fetch("./JEEMnews.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML=`<li><a href="https://result.jeeadv.ac.in/">JEE Advanced Result</a></li><hr/>`;
            }
        });
}
function getNEET(){
    fetch("./NEET.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                let hr=document.createElement('hr');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.content;
                li.appendChild(a);
                ul.appendChild(li);
                ul.appendChild(hr);
                        
            })
        });
}
function getNEETResult(){
    fetch("./JEEMnews.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML=`<li><a href="https://ntaresults.nic.in/resultservices/NEET-2022-auth">NEET Result</a></li><hr/>`;
            }
        });
}
function getNEETRegister(){
    fetch("./NEET.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                data.forEach(object=>{
                document.querySelector('ul').innerHTML=`<li><a href="https://examinationservices.nic.in/neet2022/root/Home.aspx?enc=WPJ5WSCVWOMNiXoyyomJgATm16WDSuAdfwpi7ZXy4cM3hblcyDpJgf1oyFFZyuBY">NEET Registration</a></li><hr/>`;
            })}
        });
}