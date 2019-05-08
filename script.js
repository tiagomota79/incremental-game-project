let body = document.querySelector('body');
let coinsCounter = 0;
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
  cost: 500000,
  count: 0,
};
let quantumComputer = {
  name: 'Quantum Computer',
  cps: 10000,
  cost: 1000000,
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
coin.addEventListener('click', () => {
  coinsCounter++;
  if (coinsCounter === 1) {
    counter.innerText = coinsCounter + '\ncoin';
  } else if (coinsCounter > 1) {
    counter.innerText = coinsCounter + '\ncoins';
  }
});
