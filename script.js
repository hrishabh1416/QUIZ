let option1=document.getElementById("option1")
let option2=document.getElementById("option2")
let option3=document.getElementById("option3")
let option4=document.getElementById("option4")
let question=document.getElementById("question")
let header=document.getElementById("header");
let next=document.getElementById("next")
let questions=[
    "1.Which is the largest animal in the world",
    "2.Which is the largest continent in the world",
    "3.Which is the smallest country in the world",
    "4.Which is the largest desert of the world",
    "5.Who is the Prime Minsiter of India",
    "6.Which is the largest country of the world",
    "Quiz Completed"
]
let options1=[
    "Horse",
    "Antartica",
    "Vatican City",
    "Thar",
    "Rahul Gandhi",
    "America"
]
let options2=[
    "Blue Whale",
    "North America",
    "Canada",
    "Sahara",
    "Mamta Banerjee",
    "Russia"
]
let options3=[
    "Elephant",
    "Asia",
    "Japan",
    "Victoria",
    "Priyanka Gandhi",
    "India"
]
let options4=[
    "Giraffe",
    "Africa",
    "Germany",
    "Syerian",
    "Narendra Modi",
    "Pakistan"
]
let options=document.querySelectorAll(".option");
let correctoptions=[1,2,0,1,3,1];
let clickcount=0;
let currentindex=0;
let count=0;
let answered=false;
options.forEach((option, index) => {
    option.onclick = function () {
        if(!answered) {
        if (index === correctoptions[clickcount]) {
            option.style.backgroundColor = "rgb(121, 252, 121)";
            count++;
        } else {
            option.style.backgroundColor = "rgb(255, 96, 96)"; 
            options[correctoptions[clickcount]].style.backgroundColor="rgb(121, 252, 121)";
        }
    
        answered=true;
        clickcount++;
    }
    };
});
next.onclick=function() {
    option1.style.visibility="visible"
    option2.style.visibility="visible"
    option3.style.visibility="visible"
    option4.style.visibility="visible"
    if(currentindex<questions.length) {
    question.innerText=questions[currentindex];
    option1.innerText=options1[currentindex]
    option2.innerText=options2[currentindex]
    option3.innerText=options3[currentindex]
    option4.innerText=options4[currentindex]
    options.forEach(option => (option.style.backgroundColor = ""));
    answered=false;
    currentindex=currentindex+1;
    }
    if(currentindex===1) {
        next.innerText="Next";
    }
    if(currentindex===(questions.length)-1) {
        next.innerText="Submit";
    }
    if(currentindex===(questions.length)) {
        option1.style.visibility="hidden"
        option2.style.visibility="hidden"
        option3.style.visibility="hidden"
        option4.style.visibility="hidden"
        next.style.visibility="hidden"
        header.innerText=`Your score is ${count}`
    }
    
}

