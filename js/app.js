// nav buttn hover effect by Javascript

const nav2btn = document.querySelector(".nav2btn");
const nav2before = document.querySelector(".nav2before");

nav2btn.addEventListener("mouseenter", function() {
    nav2before.style.width = "100%";
    nav2before.style.left = "0%";
    nav2before.style.right = "auto";
})
nav2btn.addEventListener("mouseleave", function() {
    nav2before.style.width = "0%";
    nav2before.style.right = "0%";
    nav2before.style.left = "auto";
})

//nav2 button hover effect

const btn = document.querySelector(".btnX");
const before = document.querySelector(".before");

btn.addEventListener("mouseenter", function() {
    before.style.width = "100%";
    before.style.left = "0%";
    before.style.right = "auto";
})
btn.addEventListener("mouseleave", function() {
    before.style.width = "0%";
    before.style.right = "0%";
    before.style.left = "auto";
})



// carousel event 

const myCarousel = document.getElementById('carouselExampleFade');
const captions = document.querySelectorAll(".caption");
const imgs = document.querySelectorAll(".containerX img[alt]")

myCarousel.addEventListener('slide.bs.carousel', function() {
    for (const caption of captions) {
        caption.classList.add("fadeUp");
    }
    for (const img of imgs) {
        img.classList.add("imgAni")
    }

})

// JOIN div's button hover effect 

const joinBtn = document.querySelector(".joinBtn");
const joinBefore = document.querySelector(".joinBefore");

joinBtn.addEventListener("mouseenter", function() {
    joinBefore.style.width = "100%";
    joinBefore.style.left = "0%";
    joinBefore.style.right = "auto";
    joinBtn.style.color = "white";
})
joinBtn.addEventListener("mouseleave", function() {
    joinBefore.style.width = "0%";
    joinBefore.style.right = "0%";
    joinBefore.style.left = "auto";
    joinBtn.style.color = "black";
})

// about section's button hover effect

const aboutBtn = document.querySelector(".aboutBtn");
const aboutBefore = document.querySelector(".aboutBefore");

aboutBtn.addEventListener("mouseenter", function() {
    aboutBefore.style.width = "100%";
    aboutBefore.style.left = "0%";
    aboutBefore.style.right = "auto";
})
aboutBtn.addEventListener("mouseleave", function() {
    aboutBefore.style.width = "0%";
    aboutBefore.style.right = "0%";
    aboutBefore.style.left = "auto";
})

//SERVCIE section ser2 button's hover effect

const serBtn = document.querySelector(".btn1");
const serBefore = document.querySelector(".btn1 .serBefore");

serBtn.addEventListener("mouseenter", function() {
    serBefore.style.width = "100%";
    serBefore.style.left = "0%";
    serBefore.style.right = "auto";
    serBtn.style.color = "white";
    serBtn.style.border = "1px solid #CD0001";
})
serBtn.addEventListener("mouseleave", function() {
    serBefore.style.width = "0%";
    serBefore.style.left = "auto";
    serBefore.style.right = "0%";
    serBtn.style.color = "#1A191D";
    serBtn.style.border = "1px solid rgb(211, 211, 211)";

})

// number2 

const serBtn2 = document.querySelector(".btn2");
const serBefore2 = document.querySelector(".btn2 .serBefore");

serBtn2.addEventListener("mouseenter", function() {
    serBefore2.style.width = "100%";
    serBefore2.style.left = "0%";
    serBefore2.style.right = "auto";
    serBtn2.style.color = "white";
    serBtn2.style.border = "1px solid #CD0001";
})
serBtn2.addEventListener("mouseleave", function() {
    serBefore2.style.width = "0%";
    serBefore2.style.left = "auto";
    serBefore2.style.right = "0%";
    serBtn2.style.color = "#1A191D";
    serBtn2.style.border = "1px solid rgb(211, 211, 211)";
})

// number3 

const serBtn3 = document.querySelector(".btn3");
const serBefore3 = document.querySelector(".btn3 .serBefore");

serBtn3.addEventListener("mouseenter", function() {
    serBefore3.style.width = "100%";
    serBefore3.style.left = "0%";
    serBefore3.style.right = "auto";
    serBtn3.style.color = "white";
    serBtn3.style.border = "1px solid #CD0001";
})
serBtn3.addEventListener("mouseleave", function() {
    serBefore3.style.width = "0%";
    serBefore3.style.left = "auto";
    serBefore3.style.right = "0%";
    serBtn3.style.color = "#1A191D";
    serBtn3.style.border = "1px solid rgb(211, 211, 211)";
})

//number 4

const serBtn4 = document.querySelector(".btn4");
const serBefore4 = document.querySelector(".btn4 .serBefore");

serBtn4.addEventListener("mouseenter", function() {
    serBefore4.style.width = "100%";
    serBefore4.style.left = "0%";
    serBefore4.style.right = "auto";
    serBtn4.style.color = "white";
    serBtn4.style.border = "1px solid #CD0001";
})
serBtn4.addEventListener("mouseleave", function() {
    serBefore4.style.width = "0%";
    serBefore4.style.left = "auto";
    serBefore4.style.right = "0%";
    serBtn4.style.color = "#1A191D";
    serBtn4.style.border = "1px solid rgb(211, 211, 211)";
})

//number 5

const serBtn5 = document.querySelector(".btn5");
const serBefore5 = document.querySelector(".btn5 .serBefore");

serBtn5.addEventListener("mouseenter", function() {
    serBefore5.style.width = "100%";
    serBefore5.style.left = "0%";
    serBefore5.style.right = "auto";
    serBtn5.style.color = "white";
    serBtn5.style.border = "1px solid #CD0001";
})
serBtn5.addEventListener("mouseleave", function() {
    serBefore5.style.width = "0%";
    serBefore5.style.left = "auto";
    serBefore5.style.right = "0%";
    serBtn5.style.color = "#1A191D";
    serBtn5.style.border = "1px solid rgb(211, 211, 211)";
})

// GOAL section button effect 

const goalBtn = document.querySelector(".goalBtn");
const goalBefore = document.querySelector(".goalBefore");

goalBtn.addEventListener("mouseenter", function() {
    goalBefore.style.width = "100%";
    goalBefore.style.left = "0%";
    goalBefore.style.right = "auto";
    console.log("mouse enter")
})
goalBtn.addEventListener("mouseleave", function() {
    goalBefore.style.width = "0%";
    goalBefore.style.left = "auto";
    goalBefore.style.right = "0%";
})

// safe section's slider

const safeBtn1 = document.querySelector(".cont button:first-child");
const safeBtn2 = document.querySelector(".cont button:last-child");
const safeChild1 = document.querySelectorAll(".safeChild")[0];
const safeChild2 = document.querySelectorAll(".safeChild")[1];
const safeImg1 = document.querySelectorAll(".safe2 img")[0];
const safeImg2 = document.querySelectorAll(".safe2 img")[1];
const safeImg = document.querySelector(".safeImg");
const safeSlider = document.querySelector(".safeSlider");
let count = 0;


safeBtn1.addEventListener("click", function() {
    count--;
    if (count < 0) {
        count = 0;
    }
    safeSlider.style.transform = `translateX(${count*50}%)`;
    safeImg.style.transform = `translateX(${count*100}%)`;
    console.log(count)
    safeBtn1.classList.remove("noHave");
    safeChild1.classList.add("safeActive");
    safeChild2.classList.remove("safeActive");
    safeImg1.classList.add("safeActive");
    safeImg2.classList.remove("safeActive");
    noHave();
})
safeBtn2.addEventListener("click", function() {
    count++;
    if (count > 1) {
        count = 1;
    }
    safeSlider.style.transform = `translateX(-${count*50}%)`;
    safeImg.style.transform = `translateX(-${count*100}%)`;
    console.log(count)
    safeChild2.classList.add("safeActive");
    safeChild1.classList.remove("safeActive");
    safeImg2.classList.add("safeActive");
    safeImg1.classList.remove("safeActive");
    noHave()
})

function noHave() {
    if (count === 0) {
        safeBtn1.classList.add("noHave");
        safeBtn2.classList.remove("noHave");
        console.log(count)
    } else if (count === 1) {
        safeBtn1.classList.remove("noHave");
        safeBtn2.classList.add("noHave");
        console.log(count)
    }
}
noHave();

// Whole section's button hover effect with javaScript

const wholeBtn = document.querySelector(".wholeBtn");
const wholeBefore = document.querySelector(".wholeBefore");

wholeBtn.addEventListener("mouseenter", function() {
    wholeBefore.style.width = "100%";
    wholeBefore.style.left = "0%";
    wholeBefore.style.right = "auto";
    wholeBtn.style.color = "#1A191D";
})
wholeBtn.addEventListener("mouseleave", function() {
    wholeBefore.style.width = "0%";
    wholeBefore.style.right = "0%";
    wholeBefore.style.left = "auto";
    wholeBtn.style.color = "white";
})

// Building section button's hover effect 

const buildBtn = document.querySelector(".buildBtn");
const buildBefore = document.querySelector(".buildBefore");

buildBtn.addEventListener("mouseenter", function() {
    buildBefore.style.width = "100%";
    buildBefore.style.left = "0%";
    buildBefore.style.right = "auto";
})
buildBtn.addEventListener("mouseleave", function() {
    buildBefore.style.width = "0%";
    buildBefore.style.right = "0%";
    buildBefore.style.left = "auto";
})

// FAQ section form's button hover effect

const faqBtn = document.querySelector("#faq button");
const faqBefore = document.querySelector(".faqBefore");

faqBtn.addEventListener("mouseenter", function() {
    faqBefore.style.width = "100%";
    faqBefore.style.left = "0%";
    faqBefore.style.right = "auto";
})
faqBtn.addEventListener("mouseleave", function() {
    faqBefore.style.width = "0%";
    faqBefore.style.right = "0%";
    faqBefore.style.left = "auto";
})

//FAQ section form custom select option logic

const select = document.querySelector(".placeholder");
const option = document.querySelector(".option");
const body = document.querySelector("body");
let cross = false;

select.addEventListener("click", function() {
    if (!option.classList.contains("selected")) {
        option.classList.add("selected");
        cross = true;
    } else {
        option.classList.remove("selected");
    }
})


// further

const op1 = option.children[0];
const op2 = option.children[1];
const op3 = option.children[2];
const op4 = option.children[3];

const placeSpan = document.querySelector(".placeholder span")

op1.addEventListener("click", function() {
    placeSpan.innerHTML = "YOUR INQUIRY ABOUT";
    option.classList.remove("selected");
    op1.classList.add("selectedOp");
    op2.classList.remove("selectedOp");
    op3.classList.remove("selectedOp");
    op4.classList.remove("selectedOp");
})
op2.addEventListener("click", function() {
    placeSpan.innerHTML = "Inquiry 1";
    option.classList.remove("selected");
    op2.classList.add("selectedOp");
    op1.classList.remove("selectedOp");
    op3.classList.remove("selectedOp");
    op4.classList.remove("selectedOp");
})
op3.addEventListener("click", function() {
    placeSpan.innerHTML = "Inquiry 2";
    option.classList.remove("selected");
    op3.classList.add("selectedOp");
    op1.classList.remove("selectedOp");
    op2.classList.remove("selectedOp");
    op4.classList.remove("selectedOp");
})
op4.addEventListener("click", function() {
    placeSpan.innerHTML = "Inquiry 3";
    option.classList.remove("selected");
    op4.classList.add("selectedOp");
    op1.classList.remove("selectedOp");
    op3.classList.remove("selectedOp");
    op2.classList.remove("selectedOp");
})

// FAQ section custom collapse

const lis = document.querySelectorAll("#faq .list-group-item");

lis.forEach(function(value) {
    let liCol = value.nextElementSibling;
    let i = value.children[0].children[1];

    value.addEventListener("click", function(e) {
        if (!liCol.classList.contains("afterLiCol")) {
            liCol.classList.add("afterLiCol")
            value.classList.add("bg");
            i.classList.replace("fa-plus", "fa-minus");
        } else {
            liCol.classList.remove("afterLiCol")
            value.classList.remove("bg");
            i.classList.replace("fa-minus", "fa-plus");
        }
    })
})

// responsive nav2 menubar toggle

const navBottom = document.querySelector(".navBottom");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function() {
    navBottom.classList.toggle("sideNav");
    if (!navBottom.classList.contains("sideNav")) {
        menu.classList.add("afterMenu")
    } else {
        menu.classList.remove("afterMenu")
    }
})

//Video div video play effect

const playBtn = document.querySelector('.video .videoBtn');
const video = document.querySelector(".iframe");
const iframe = document.querySelector("iframe");
const bodySudo = document.querySelector(".bodySudo");
const height = body.getBoundingClientRect().height;
const closeVideo = document.getElementById("close");

playBtn.addEventListener("click", function() {
    video.classList.remove("d-none");
    video.appendChild(iframe)
    bodySudo.classList.add("darkBody");
    bodySudo.style.height = `${height}px`;
    console.log(closeVideo)
})
closeVideo.addEventListener("click", function() {
    video.classList.add("d-none");
    video.removeChild(iframe)
    bodySudo.style.height = "0px";
    bodySudo.classList.remove("darkBody");
})
bodySudo.addEventListener("click", function() {
    video.removeChild(iframe)
    video.classList.add("d-none");
    bodySudo.style.height = "0px";
    bodySudo.classList.remove("darkBody");
})

// goTop div logic

const goTop = document.querySelector(".goTop i");

goTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
})
window.addEventListener("scroll", function() {
    let x = scrollY;
    if (x >= 300) {
        goTop.classList.add("present");
    } else {
        goTop.classList.remove("present");
    }
})