import React from 'react'

const test = () => {
    const clickHandler = async() => {
        console.log("clicked..");
        // const response = await fetch("/api/myput",{
        //     method:"PUT",
        //     body:JSON.stringify({
        //         id:"662641f98ab783ecbe2c2131",
        //         title:"ttttttttttt",

        //     }),
        //     headers:{
        //         'Content-type':"application/json"
        //     }
        // });
        const response = await fetch("/api/myput");
        const data = await response.json();
        console.log(data);
    }
  return (
    <button onClick={ clickHandler}>Click</button>
  )
}

export default test