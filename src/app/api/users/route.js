import { NextResponse } from "next/server";

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

export function POST(){

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