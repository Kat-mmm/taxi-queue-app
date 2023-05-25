// write your DOM code here.
const passengerQueueCountEl = document.querySelector('.passenger_queue_count');
const passengerJoinQueueBtn = document.querySelector('.join_queue');
const passengerLeaveQueueBtn = document.querySelector('.leave_queue');
const taxiQueueCountEl = document.querySelector('.taxi_queue_count');
const taxiJoinQueueBtn = document.querySelector('.join_taxi_queue');
const departBtn = document.querySelector('.depart');

const taxiQueue = new TaxiQueue();

let passengerCount = localStorage.getItem('peopleCount') || taxiQueue.queueLength();
let taxiCount = localStorage.getItem('taxiCount') || taxiQueue.taxiQueueLength();

passengerQueueCountEl.innerHTML = passengerCount;
taxiQueueCountEl.innerHTML = taxiCount;

function addPassenger(){
    passengerCount ++;
    passengerQueueCountEl.innerHTML = passengerCount;
    localStorage.setItem('peopleCount', passengerCount);
}


function removePassenger(){
    if(passengerCount > 0){
        passengerCount -= 1;
        passengerQueueCountEl.innerHTML = passengerCount;
        localStorage.setItem('peopleCount', passengerCount);
    }
}

function addTaxi(){
    taxiCount ++;
    taxiQueueCountEl.innerHTML = taxiCount;
    localStorage.setItem('taxiCount', taxiCount)
}

function depart(){
    if(passengerCount >= 12 && taxiCount > 0){
        taxiCount --;
        passengerCount -= 12;
        localStorage.setItem('taxiCount', taxiCount)
        localStorage.setItem('peopleCount', passengerCount);
    }
    passengerQueueCountEl.innerHTML = passengerCount;
    taxiQueueCountEl.innerHTML = taxiCount;    
}

// DOM element references

// create Factory Function instance


// DOM events
passengerJoinQueueBtn.addEventListener("click", addPassenger);
passengerLeaveQueueBtn.addEventListener("click", removePassenger);
taxiJoinQueueBtn.addEventListener("click", addTaxi);
departBtn.addEventListener("click", depart);


