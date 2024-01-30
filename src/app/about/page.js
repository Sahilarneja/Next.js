import React from 'react'
async function takeTime(){
  
  await new Promise((resolve)=>{
    throw new Error("this is manual error")
    setTimeout(resolve,3000);
  });
}
async function  page(){
  await takeTime();
  return (
    <div>
      This is about page
    </div>
  )
}

export default page
