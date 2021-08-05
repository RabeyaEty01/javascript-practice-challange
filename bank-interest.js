function getbankInterest(principle, rateOfInterest, termOfLoan) {

    let interest = (principle * rateOfInterest * termOfLoan) / 100;
    return interest;
}

let firstInterest=getbankInterest(50000,8,1);
console.log(firstInterest);

let secondInterest=getbankInterest(800000,6.85,5);
console.log(secondInterest);

