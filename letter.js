// 💌 LETTER CONTENT (WITH FORMATTING)
const letterContent = `প্রিয় Disha ❤️,
প্রথমেই প্রার্থনা করবো , এই চিঠিটা এর কোনো শব্দ তোকে আঘাত না করে।😄
প্রায় এগারো বছর আগে তোকে প্রথম দেখেছিলাম। সেদিন কিছু বলিনি,
কিন্তু সেদিন থেকেই তুই আমার মনের ভেতরে রয়ে গেছিস। প্রেমের শুরুতে অনেকেই বলে—
“আমি তোর সাথে সারা জীবন থাকবো”,😤
কিন্তু তারপরেও কষ্ট দিয়ে যায়।😔
আমি অন্যদের কথা জানি না,
শুধু নিজের মনটাকে চিনি।🙂

যাকে না পেয়েও, যার সাথে কথা না বলেও, আমার মন তাকে ছাড়া আর কাউকে জায়গা দেয়নি। এই মনটা আজও তোকে ছাড়া অন্য কাউকে মানে না। 💕
আমি নিশ্চিত ভাবে বলতে পারি , " আমাকে তোর করে নিলে, এই মনটা  মৃত্যুর আগে পর্যন্তও অন্য কাওকে জায়গা দিবে না।🫂🥹

একবার আমি তোকে আমার মনের কথা বলেছিলাম। তুই কোনো উত্তর দিসনি। 😅
আমি সেটাকে কখনো কষ্ট হিসেবে নিইনি।
কারণ,  সব প্রশ্নের উত্তর সঙ্গে সঙ্গে দেওয়া যায় না আমি সেটা বুঝি।🙂
আমি দূর থেকেই তোকে দেখেছি, দূর থেকেই সব মেনে নিয়েছি। 
স্নেহা রে , তোর প্রতি আমার কোনো অভিযোগ নেই আর হয়তো থাকবেও না। 🥰
আজ খুব শান্তভাবে তোকে আবার একটা কথা বলতে চাই একটিবার আমাকে বিশ্বাস করিস। একটিবার তোর হাতটা আমার হাতে দিতে দিস।💝
আমি কোনো প্রতিশ্রুতির বোঝা দিতে চাই না। শুধু এটুকু জানি যদি তোর হাতটা আমার হাতে আসে, আমি সারাজীবন সেই হাতটা যত্নে রাখবো।🥺🥺
ভেবেচিন্তে উত্তর দিস। কোনো চাপ নেই 🙂👍🏼 

ইতি , তোর ক্ষেপা Rohan 😅
`;

// ELEMENTS
const btnLetter = document.getElementById("btn__letter");
const boxLetter = document.querySelector(".box__letter");
const letterBorder = document.querySelector(".letter__border");
const textLetter = document.querySelector(".text__letter p");
const titleLetter = document.querySelector(".title__letter");
const closeBtn = document.querySelector(".close");

let index = 0;
let typingInterval;

// 🖋️ TYPEWRITER FUNCTION
function startTyping() {
    textLetter.innerHTML = "";
    index = 0;

    typingInterval = setInterval(() => {
        if (index < letterContent.length) {
            const char = letterContent[index];

            if (char === "\n") {
                textLetter.innerHTML += "<br>";
            } else {
                textLetter.innerHTML += char;
            }

            // ✅ auto scroll to bottom while typing
            const textBox = document.querySelector(".text__letter");
            textBox.scrollTop = textBox.scrollHeight;

            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 80);
}

// 💌 OPEN LETTER
let letterOpen = false;
let gifsAnimated = false;
btnLetter.addEventListener("click", () => {
    if (letterOpen) return; // Prevent double opening
    letterOpen = true;
    gifsAnimated = false; // Reset for new opening
    
    boxLetter.style.display = "block";

    setTimeout(() => {
        letterBorder.style.display = "block";
    }, 600);

    // TITLE TYPE
    titleLetter.innerHTML = "To You Pechi💌";
    let tIndex = 0;

    // HEART + GIF ANIMATIONS (only once)
    setTimeout(() => {
        if (!gifsAnimated) {
            gifsAnimated = true;
            document.getElementById("heart__letter")?.classList.add("animationOp");
            document.querySelectorAll(".left-gif")?.forEach(img => 
                img.classList.add("animationOp")
            );
        }
    }, 1200);

    // START TYPING
    setTimeout(startTyping, 2500);
});

// ❌ CLOSE LETTER
closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);

    textLetter.innerHTML = "";
    titleLetter.innerHTML = "";

    document.getElementById("heart__letter")?.classList.remove("animationOp");
    document.querySelectorAll(".left-gif")?.forEach(img => 
        img.classList.remove("animationOp")
    );

    letterBorder.style.display = "none";
    boxLetter.style.display = "none";
    
    letterOpen = false; // Allow opening again
});
