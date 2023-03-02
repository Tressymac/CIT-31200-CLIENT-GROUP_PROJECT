function showPoemOne() {
    document.querySelector(".poemBox").style.display="block";
    document.querySelector(".poemBox3").style.display="none";
    document.querySelector(".poemBox4").style.display="none";
    document.querySelector(".poemBox2").style.display="none";
    // console.log("hello")
};

function showPoemTwo() {
    document.querySelector(".poemBox").style.display="none";
    document.querySelector(".poemBox3").style.display="none";
    document.querySelector(".poemBox4").style.display="none";
    document.querySelector(".poemBox2").style.display="block";
};

function showPoemThree() {
    document.querySelector(".poemBox").style.display="none";
    document.querySelector(".poemBox2").style.display="none";
    document.querySelector(".poemBox4").style.display="none";
    document.querySelector(".poemBox3").style.display="block";
};

function showPoemFour(){
    document.querySelector(".poemBox").style.display="none";
    document.querySelector(".poemBox2").style.display="none";
    document.querySelector(".poemBox3").style.display="none";
    document.querySelector(".poemBox4").style.display="block";
};

function showVideoOne() {
    document.querySelector(".videoBox1").style.display="block";
    document.querySelector(".videoBox2").style.display="none";
};

function showVideoTwo() {
    document.querySelector(".videoBox2").style.display="block";
    document.querySelector(".videoBox1").style.display="none";
};

document.querySelector("#showPoemOne").click = showPoemOne;
document.querySelector("#showPoemTwo").click = showPoemTwo;
document.querySelector("#showPoemTwo").click = showPoemTwo;
document.querySelector("#showPoemTwo").click = showPoemTwo;


