const day = 4;
let dayName ='';

if (day === 1) {
    dayName ='pirmadienis';
} else if (day===2) {
    dayname ='antradienis';
} else {
    dayName ='tokios dienos savaiteje nera.';
}

console.log(dayName);

const d=3;
let weekdayName='***';

switch (d) {
    case 1:
        weekdayName ='pirmadienis';
        break;
    case 2:
        weekdayName ='antadienis';
        break;
    case 3:
        weekdayName ='treciadienis';
        break;
}

console.log(weekdayName);

const day3 =1;
let day3Name='';

switch (day3) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day3Name='Darbo diena';
        break;
    case 6:
    case 7:
        day3Name ='savaitgalis';
        break;
    }
console.log(day3Name);

// isoka i artimiausia case ir vykdo, kol sutinka breaka;

console.clear()

const stop = 'Rudens';
switch (stop) {
    case 'Parko': console.log('Parko');
    case 'Geniu': console.log('Geniu');
    case 'Tremtiniu': console.log('Tremtiniu');
    case 'Mindaugo': console.log('Mindaugo');
    case 'Zaliasis tiltas': console.log('Zaliasis tiltas');
    break;
    case 'Rudens': console.log('Rudens');
    case 'Lvovo':console.log('Lvovo');
    case 'Vasaros': console.log('Vasaros');
    case 'Parko2': console.log('Parko2');
    break;
}
console.log(stop);