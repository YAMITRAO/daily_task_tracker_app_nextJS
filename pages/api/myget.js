// import { NextResponse } from "next/server";

// export default async function GET(){
//     return NextResponse.json({result:"true"})
// }

const myget = async (res, req) =>{

    res.json({message:"Data inserted successfully"});
}

export default myget;