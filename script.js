let body = document.querySelector('body');
let coinsCounter = 0;
let cps = 0;
let clicksCounter = 0;
let miner = {
  name: 'Miner',
  cps: 1,
  cost: 50,
  count: 0,
};
let computer = {
  name: 'Computer',
  cps: 10,
  cost: 500,
  count: 0,
};
let dataCenter = {
  name: 'Data Center',
  cps: 100,
  cost: 2000,
  count: 0,
};
let superComputer = {
  name: 'Super Computer',
  cps: 1000,
  cost: 50000,
  count: 0,
};
let quantumComputer = {
  name: 'Quantum Computer',
  cps: 10000,
  cost: 200000,
  count: 0,
};
let ai = {
  name: 'AI',
  cps: 100000,
  cost: 5000000,
  count: 0,
};
let matrioshkaBrain = {
  name: 'Matrioshka Brain',
  cps: 1000000,
  cost: 20000000,
  count: 0,
};
let simulation = {
  cps: 0,
  cost: 1000000000,
  count: 0,
};
const counter = document.getElementById('counter');
const coin = document.getElementById('coin');
const left = document.getElementById('left');
const right = document.getElementById('right');
const minerButton = document.getElementById('minerButton');
const minerCounter = document.getElementById('minerCounter');
const computerButton = document.getElementById('computerButton');
const computerCounter = document.getElementById('computerCounter');
function updateCoinsCounter() {
  if (coinsCounter === 0) {
    counter.innerText = coinsCounter + '\ncoin';
  } else if (coinsCounter === 1) {
    counter.innerText = coinsCounter + '\ncoin';
  } else if (coinsCounter > 1) {
    counter.innerText = coinsCounter + '\ncoins';
  } else if (coinsCounter > 999999) {
    counter.innerText = coinsCounter / 1000000 + ' million\ncoins';
  } else if (coinsCounter > 1999999) {
    counter.innerText = coinsCounter / 1000000 + ' millions\ncoins';
  } else if (coinsCounter > 999999999) {
    counter.innerText = coinsCounter / 1000000000 + ' billion\ncoins';
  } else if (coinsCounter > 1999999999) {
    counter.innerText = coinsCounter / 1000000000 + ' billions\ncoins';
  }
}
coin.addEventListener('click', () => {
  clicksCounter++;
  if (cps === 0) {
    coinsCounter++;
  } else {
    coinsCounter += cps;
  }
  updateCoinsCounter();
  if (coinsCounter > miner.cost / 2) {
    minerButton.style.opacity = '0.5';
  }
  if (coinsCounter >= miner.cost) {
    minerButton.style.opacity = '1';
  }
  if (coinsCounter > computer.cost / 2) {
    computerButton.style.opacity = '0.5';
  }
  if (coinsCounter >= computer.cost) {
    computerButton.style.opacity = '1';
  }
});
minerButton.addEventListener('click', () => {
  if (coinsCounter >= miner.cost) {
    cps += miner.cps;
    miner.count++;
    coinsCounter -= miner.cost;
    minerCounter.innerText = miner.count;
  }
});
computerButton.addEventListener('click', () => {
  if (coinsCounter >= computer.cost) {
    cps += computer.cps;
    computer.count++;
    coinsCounter -= computer.cost;
    computerCounter.innerText = computer.count;
  }
});
setInterval(() => {
  coinsCounter += cps;
}, 1000);
setInterval(() => {
  updateCoinsCounter();
}, 10);
