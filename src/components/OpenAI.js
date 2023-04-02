import React from 'react'
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';


export default function OpenAI() {
    
  const [txt, setTxt]=useState("");
  const [url, setUrl]=useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI,
  });

  const openai=new OpenAIApi(configuration);

  const genres= async()=>{
    console.log("requesting response");
    
      const res = await openai.createImage({
        prompt: txt,
        n: 1,
        size: "512x512",
      });
  
      setUrl(res.data.data[0].url);
    };

    // const savef=()=>{
    // saveAs(txt,"AI generated")

    // }

    return (
      <>
      <div className='aimain'>
    
      <h1 className='title'>Hello! I'm your AI image generator</h1>
      <input type="textarea" className='text1' placeholder='Describe the image you want to generate' onChange={(e)=>{setTxt(e.target.value)}} />
      <input type="Submit" className="button" placeholder='submit' onClick={genres}   />
      
      {url.length>0?<div className='imgres'><img className="response"  src={url} /><a href={url} download="AI generated"  className='download'>Download image</a>
      </div>:
<h2 className='prompt'>Click Submit to get image</h2>
      }
      
      </div>
      </>
    );
  
}
