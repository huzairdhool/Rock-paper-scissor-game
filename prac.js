let yourscore= 0;
let cmscore= 0;

const Choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msgid");
const yscore= document.querySelector("#yourscore");
const cscore= document.querySelector("#cmscore");



const compchoice= ()=>{
    const options= ["rock", "paper", "scissors"]
    const idx= Math.floor(Math.random()*3);
    return options[idx];
}

const draw= ()=> {
    console.log("game was draw");
    msg.innerText= "game is draw! play again";

}

const winner= (userwin)=>{
    if(userwin){
        yourscore++;
        yscore.innerText= yourscore;
        msg.innerText= "you win";
    }else{
        cmscore++;
        cscore.innerText= cmscore
        msg.innerText= "you lose";

    }
}

const playgame= (choiceid)=> {
    console.log(choiceid);
    const cmpchoice= compchoice();
    console.log(cmpchoice);

    if(choiceid === cmpchoice){
        draw();
    }else{
        let userwin = true;
        if(choiceid=== "rock"){
           userwin= cmpchoice=== "paper"? false : true;
        }else if(choiceid === "paper"){
            userwin= cmpchoice=== "scissors"? false: true;
        }else{
            userwin= cmpchoice==="scissors"? false: true;
        }
        winner(userwin);
    }
}

Choices.forEach(choice => {
    choice.addEventListener("click", ()=>{
        const choiceid= choice.getAttribute("id");
        console.log("choice was clicked", choiceid);
        playgame(choiceid);
    });
});
