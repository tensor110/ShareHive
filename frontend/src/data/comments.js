export const getCommentsData = async () =>{
    return [
        {
            _id:"10",
            user:{
                _id:"a",
                name:"Venkat",
            },
            desc: "its a nice project ",
            post: "1",
            parent:null,
            replyOnUser: null,
            createdAt: "2024-06-26T17:22:05.092+0000",
        },
        {
            _id:"11",
            user:{
                _id:"b",
                name:"Maheswar",
            },
            desc: "Bekar project ",
            post: "1",
            parent:"10",
            replyOnUser: "a",
            createdAt: "2024-06-26T18:30:05.092+0000",
        },
        {
            _id:"12",
            user:{
                _id:"b",

                

                name:"Maheswar",
            },
            desc: "Bekar project ",
            post: "1",
            parent:null,
            replyOnUser: null,
            createdAt: "2024-06-26T17:22:05.092+0000",
        },
        {
            _id:"13",
            user:{
                _id:"b",
                name:"Saswat",

            },
            desc: "its a nice project ",
            post: "1",
            parent:null,
            replyOnUser: null,
            createdAt: "2024-06-26T17:22:05.092+0000",
        },
    ]
}