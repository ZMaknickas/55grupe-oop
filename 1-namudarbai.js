function zai(zenkl) {
let x = Math.floor(Math.random()*3) + 1;
switch (x) {
    case 1: gen='akmuo';
    break;
    case 2: gen='popierius';
    break;
    case 3: gen='sulinys';
    break;    
}
if (zenkl==='akmuo' && gen==='sulinys')
    return 'pralaimejai';
if (zenkl==='akmuo' && gen==='popierius') 
    return 'lygiosios';
if (zenkl==='akmuo' && gen==='akmuo')
    return 'lygiosios';
if (zenkl==='popierius' && gen==='sulinys')
    return 'laimejai';
if (zenkl==='popierius' && gen==='popierius') 
    return 'lygiosios';
if (zenkl==='popierius' && gen==='akmuo')
    return 'lygiosios';
if (zenkl==='sulinys' && gen==='sulinys')
    return 'lygiosios';
if (zenkl==='sulinys' && gen==='popierius') 
    return 'pralaimejai';
if (zenkl==='popierius' && gen==='akmuo')
    return 'laimejai';
}

console.log(zai('popierius'));