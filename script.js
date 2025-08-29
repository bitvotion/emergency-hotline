// Counts
let loveCount = 0;
let coinBalance = document.getElementById("coin-balance").innerText;
let copyCount = 0;
const callHistoryData = [];

// Get Elements
const loveCountEl = document.getElementById("love-count");
const coinBalanceEl = document.getElementById("coin-balance");
const copyCountEl = document.getElementById("copy-count");
const callHistoryEl = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history")
const cards = document.querySelectorAll(".card")


for (let card of cards){
    const number = card.querySelector(".number").innerText;
    const loveBtn = card.querySelector(".love-btn");
    const copyBtn = card.querySelector(".copy-btn");
    const callBtn = card.querySelector(".call-btn");
    const name = card.querySelector(".name").innerText;
    
    // Love Button function
    loveBtn.addEventListener("click", function() {
        loveCount++;
        loveCountEl.innerText = loveCount;
    });

    // Copy Button function
    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(number).then(() =>{
        copyCount++;
        copyCountEl.innerText = copyCount;
        alert("Copied: " + number);
        });
    });

    // Call Button Function
    callBtn.addEventListener("click", function() {
        callHistoryEl.innerText = "";
        if (coinBalance === 0 || coinBalance < 20) {
            alert("Invalid Balance");
            return;
        }
        
        if (coinBalance >= 20){
            coinBalance -= 20;
            coinBalanceEl.innerText = coinBalance;

            alert("Calling - " + name + " " + number);

            // Add to History
            const data = {
                name: name,
                number: number,
                date: new Date().toLocaleTimeString()
            }
            callHistoryData.push(data);
            console.log(data);
        }

        for (const data of callHistoryData){
            const div = document.createElement("div");
            div.innerHTML = `
            <div class=" my-2">
            <div class="history-cards bg-[#FAFAFA] rounded-lg flex justify-between items-center p-4 w-full h-auto">
                        <div>
                            <h2 class="font-semibold text-[18px] text-[#111111]">${data.name}</h2>
                            <p class="text-[18px] text-[#5C5C5C]">${data.number}</p>
                        </div>
                    <div><p class="text-[18px]">${data.date}</p></div>
                </div>
            </div>
                 `
                callHistoryEl.appendChild(div);
        }
    })
}

clearHistoryBtn.addEventListener("click", function(){
    callHistoryEl.innerHTML = "";
})