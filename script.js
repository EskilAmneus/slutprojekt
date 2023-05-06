
// Get the URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the image source and troop name from the URL parameters
const imageSrc = urlParams.get('src');
const Number = urlParams.get('number');


troop = ["Barbarian","Archer","Giant","Goblin","Wall breaker","Balloon","Wizard","Healer","Dragon","P.E.E.K.A","Baby dragon","Miner","Electro dragon","Yeti","Dragon rider","Electro titan","Minion","Hog rider","Valkyrie","Golem","Witch","Lava hound","Bowler","Ice golem","Headhunter","Super barbarian","Super archer","Sneaky goblin","Super wall breaker","Super giant","Rocket balloon","Super wizard","Super dragon","Inferno dragon","Super minion","Super valkyrie","Super witch","Ice hound","Super bowler","Super miner","Lightning spell","Healing spell","Rage spell","Jump spell","Freeze spell","Clone spell","Invisibility spell","Recall spell","Poison spell","Earthquake spell","Haste spell","Skeleton spell","Bat spell"];
troopName = troop[Number]










// Update the image source and troop name on the page
const imgElement = document.querySelector('.img2');
imgElement.src = imageSrc;

const h1Element = document.querySelector('#troop-text h1');
h1Element.textContent = troopName;
    
//const pElement = document.querySelector('#troop-info');
//troopInfo = troop;
//pElement.textContent = troopInfo;
