import { connectdb } from "@/helper/db";
import { NextResponse } from "next/server";

connectdb();
export function GET(){
    const users=[{
        name:'Sahil',
        phone:'9817579511',
        course:'B-tech cse'
    },{
        name:'Harry',
        phone:'1111111111',
        course:'MBA'
    }];
    //sending data in form of JSON
    return NextResponse.json(users);
}

export async function POST(request){

    const body=request.body;
    console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams);

    //requesting json data from user
    const jsonData=await request.json()

    //request data in form of text
    // const textData=await request.text();
    // console.log(textData);

    console.log(jsonData);
    return NextResponse.json({
        "message": "posting user data",
    })
}

export function PUT(){

}

export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message:'deleted',
        status:'true'
    },{status:201, statusText:'hey'})

}