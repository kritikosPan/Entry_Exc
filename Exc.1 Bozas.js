
//1.	Μια εταιρία πρόκειται να δώσει αύξηση στους εργαζομένους της με βάση τις μηνιαίες απολαβές τους με βάση τις μηνιαίες απολαβές τους. Έτσι, αν κάποιος εργαζόμενος έχει μηνιαίες απολαβές έως και 1000 ευρώ θα πάρει αύξηση 14%, αν έχει απολαβές μεγαλύτερες από 1000 και έως και 1800 ευρώ θα πάρει αύξηση 11%, και αν έχει μηνιαίες απολαβές μεγαλύτερες των 1800 ευρώ θα πάρει αύξηση 7%. Να γραφτεί πρόγραμμα που θα διαβάζει τον μισθό ενός εργαζομένου και θα εκτυπώνει το ποσό αύξησης και τον τελικό μισθό του.
//
//
var initialSalary = +prompt("Insert the salary:","0");
var rise = 0
var finalSalary = 0

function payRises() {
if (initialSalary<=1000) {
    rise = initialSalary * 0.14
    finalSalary = initialSalary + rise
}
else if (initialSalary>1000 && initialSalary<=1800) {
    rise = initialSalary * 0.11
    finalSalary = initialSalary + rise
}
else if (initialSalary>1800) {
    rise = initialSalary * 0.07
    finalSalary = initialSalary + rise
}
}

payRises(initialSalary)
console.log(rise)   ;
console.log(finalSalary) ;
