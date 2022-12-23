module.exports = function toReadable (number) {
    let beggin ="";
    let num =number.toString();
    let str ="";
    if(number<=90){
        switch(number){
            case 0: return 'zero'
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
            default: break;
        }
    }
    if(number < 100){
        beggin= toReadable(number-number%10);
        str=toReadable(number%10);
        return beggin +" "+str;
    }
    if(100<=number<1000){
        beggin= toReadable(parseInt(num[0])) + ' hundred';
    if(number%100==0){
       str= toReadable(number%100);
       return beggin;
    }
    else if(number%100){
        str= toReadable(number%100);
        return beggin +" "+str;
    }
    return beggin +" "+str;
    }
}
