import firebase from "firebase" 

export default class Fire{

    constructor(){
        this.init()
        this.checkuth()
    }

    init = ()=>{
        if(!firebase.app.length){
            firebase.initializeApp({
                apiKey: "AIzaSyCiMEoYwXqDgWuJFQ9E25L31xVDGfuWBe0",
                authDomain: "interview-f327e.firebaseapp.com",
                projectId: "interview-f327e",
                storageBucket: "interview-f327e.appspot.com",
                messagingSenderId: "601840133910",
                appId: "1:601840133910:web:839db4eba85ff3fd295237",
                measurementId: "G-6M37D9LZEH"
            })
           
        }
    }

    send = (mesage)=>{
        mesage.foreach(item=>{
            const message ={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }

            this.db.push(mesage)
        })
    }

    parse = message =>{
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    }


    get = collback =>{
        this.db.on("child_added", snapshot=>collback(this.parse(snapshot)))
    }

    off(){
        this.db.off()
    }

    get db (){
        return firebase.database().ref("messages")
    }


}