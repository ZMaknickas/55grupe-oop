//laikas po vidurnakcio milisekundemis  laikas rodo valandas minutes sekundes.
//hoirs   minutes  seconds

function past(h, m, s){
    let tms=(h*3600+m*60+s)*1000;
      return tms;
    }

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);