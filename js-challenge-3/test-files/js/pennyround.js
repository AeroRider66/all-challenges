

const a = 2.0

function precision(a) { 
    if (!isFinite(a)) return 0;
    var e = 1, p = 0;
    while (Math.round(a * e) / e !== a) { 
      e *= 10; p++; 
    }
    return p;
  }
  if (precision(yourNumber) >= 3) {
    yourNumber = (Math.trunc(yourNumber * 100)/100) * 1 + 0.01;
    console.log(yourNumber);
  }