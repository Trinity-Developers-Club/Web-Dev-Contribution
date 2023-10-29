import fetch from 'node-fetch';
import fs from 'fs';
import * as cheerio from 'cheerio';


export default async function getJEEMinfo(){

    try{
        const response=await fetch("https://jeemain.nta.nic.in/");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.gen-list > ul >li').map((index,ele)=>{
            // console.log(ele);
            const content=$(ele).find('a').text().trim();
            const link=$(ele).find('a').attr('href');
            console.log(content,link);

            items.push({
                content,
                link
            })
        });

        fs.writeFile('JEEM.json',JSON.stringify(items),function(err){
            if(err) return console.log(err);
            console.log('JEE main notices were saved as : JEEM.json');
        });

    }catch(error){
        console.log(error);
    }
}
export async function getJEEMRegister(){

    try{
        const response=await fetch("https://jeemain.nta.nic.in/");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.menu-item>ul').map((index,ele)=>{
            // console.log(ele);
            const contt=$(ele).find('a').text().trim();
            const content=$(ele).find('li').find('a').text().trim();
            const link=$(ele).find('li>a').attr('href');
            console.log(contt,content,link);
            // if(contt!="e-service"){
            //     items.push({
            //         content,
            //         link
            //     })
            // }
            
        });

        fs.writeFile('JEE_register.json',JSON.stringify(items),function(err){
            if(err) return console.log(err);
            console.log('JEE main notices were saved as : JEE_register.json');
        });
    
        }catch(error){
            console.log(error);
        }
}
export async function getJEEMnews(){

    try{
        const response=await fetch("https://jeemain.nta.nic.in/");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.slides >li').map((index,ele)=>{
            // console.log(ele);
            const content=$(ele).find('a').text().trim();
            const link=$(ele).find('a').attr('href');
            // console.log(content,link);
            if(content!=""){
                items.push({
                    content,
                    link
                })
            }
            
        });

        fs.writeFile('JEEMnews.json',JSON.stringify(items),function(err){
            if(err) return console.log(err);
            console.log('JEE main notices were saved as : JEEMnews.json');
        });

    }catch(error){
        console.log(error);
    }
}
export async function getJEEAinfo(){

    try{
        const response=await fetch("https://jeeadv.ac.in/");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.div-block-2 >.text-block-3').map((index,ele)=>{
            const contt=$(ele).text();
            const content=$(ele).find('a').text().trim();
            const link=$(ele).find('a').attr('href');
            // console.log(contt,content,link);

            items.push({
                contt,
                content,
                link
            })
        });

        fs.writeFile('JEEA.json',JSON.stringify(items),function(err){
            if(err) return console.log(err);
            console.log('JEE main notices were saved as : JEEA.json');
        });

    }catch(error){
        console.log(error);
    }
}
export async function getNEETinfo(){

    try{
        const response=await fetch("https://neet.nta.nic.in//");
            const body=await response.text();
            const $ =cheerio.load(body);
    
            // const wrapper=$('.gen-list');
            // console.log(wrapper.length);
    
            const items=[];
            $('.gen-list > ul >li').map((index,ele)=>{
                // console.log(ele);
                const content=$(ele).find('a').text().trim();
                const link=$(ele).find('a').attr('href');
                // console.log(content,link);
    
                items.push({
                    content,
                    link
                })
            });
    
            fs.writeFile('NEET.json',JSON.stringify(items),function(err){
                if(err) return console.log(err);
                console.log('JEE main notices were saved as : NEET.json');
            });
    
        }catch(error){
            console.log(error);
        }
}
export async function getNEETRegister(){

    try{
        const response=await fetch("https://neet.nta.nic.in//");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.menu-item').map((index,ele)=>{
            // console.log(ele);
            const content=$(ele).find('ul>li>a').text().trim();
            const link=$(ele).find('ul>li>a').attr('href');
            // console.log(content,link);
            if(content!="e-service"){
                items.push({
                    content,
                    link
                })
            }
            
        });

        fs.writeFile('JEE_register.json',JSON.stringify(items),function(err){
            if(err) return console.log(err);
            console.log('JEE main notices were saved as : JEE_register.json');
        });
    
        }catch(error){
            console.log(error);
        }
}
getJEEMRegister();
getJEEMinfo();
getJEEMnews();
getNEETinfo();
getNEETRegister();
getNEETinfo();
getJEEAinfo();