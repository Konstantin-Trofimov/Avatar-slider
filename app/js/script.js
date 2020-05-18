
const images = {

    0: 'big-hair-black-female-512',
    1: 'big-beard-white-male-512',
    2: 'aging-child-white-female-512',
    3: 'bandit-white-male-cowboy-512',
    4: 'aslaskan-fisherman-asian-man-512',
    5: 'average-people-2-white-female-512',
    6: 'police-officer-2-white-male-512',
    7: 'emo-black-female-512',
    8: 'bald-mustache-glasses-disheveled-512',
    9: 'average-people-black-male-512',
    10: 'bellhop-white-female-512',
    11: 'asian-vneck-woman-avatar-512',
    12: 'tattooed-person-white-male-512',
    13: 'flower-girl-2-512',
    14: 'average-people-white-male-512',
    15: 'footballer-soccer-garreth-bale-wales-madrid-512',
    16: 'blond-woman-cleavage-sweater-512',
    17: 'buddhist-monk-beard-asian-512',
    18: 'burglar-black-male-512',
    19: 'catholic-clergy-asian-female-512',
    20: 'aging-adult-black-female-512',
    21: 'blond-sweater-man-avatar-young-512',
    22: 'egypt-king-tutankamen-pharoah-512',
    23: 'emo-asian-female-512',
    24: 'black-dreadlock-male-hawaiin-512',
    25: 'black-woman-green-hat-hoop-earrings-512',
    26: 'superhero-batman-dark-knight-asian-512',
    27: 'fatcat-mob-boss-cigar-fat-obese-512',
    28: 'younger-self-white-female-512',
    29: 'day-of-the-dead-woman-512',
    30: 'young-woman-red-ginger-braids-caucasian-512',
    31: 'asian-beatnik-glasses-goatee-manbun-512',
    32: 'jazz-musician-asian-male-512',
    33: 'muslim-attire-arab-female-512',
    34: 'ems-worker-white-male-512',
    35: 'ninja-assassin-japanese-sword-woman-512',
    36: 'traditional-attire-native-male-512',
    37: 'celebrity-charlie-chaplan-actor-entertainer-512',
    38: 'sweater-man-white-512',
    39: 'hipsters-asian-male-512',
    40: 'superhero-catwoman-asian-purple-costume-512',
    41: 'farmers-black-male-512',
    42: 'younger-self-asian-younger-512',
    43: 'muslim-attire-arab-male-512',

}


// ============================================================================================================
// ============================================================================================================


let count = 0;

function imageChange() {
    let img = `<img class="main-img" src="images/ people/${images[count]}.png " alt=""></img>`
    document.querySelector('.container').innerHTML = img;
}

document.querySelector('.arrow-right').onclick = () => {
    count++;
    if (count == 44) count = 0;
    imageChange();
}

document.querySelector('.arrow-left').onclick = () => {
    count--;
    if (count == -1) count = 43;
    imageChange();
}

imageChange();


// ============================================================================================================
// ============================================================================================================


function arrowAnimation(event, dir, active) {
    event.target.src = `images/${dir}-arrow${active}.png`;
}

document.querySelector('.arrow-right').onmousedown = (event) => {
    arrowAnimation(event, 'right', '-active');
}

document.querySelector('.arrow-left').onmousedown = (event) => {
    arrowAnimation(event, 'left', '-active');
}

document.querySelector('.arrow-right').onmouseup = (event) => {
    arrowAnimation(event, 'right', '');
}

document.querySelector('.arrow-left').onmouseup = (event) => {
    arrowAnimation(event, 'left', '');
}


// ============================================================================================================
// ============================================================================================================

document.querySelector('.display').oncontextmenu = () => {
    return false;
}





