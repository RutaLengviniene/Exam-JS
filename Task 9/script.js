/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    };
    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
};
const newMovie1 = new Movie("The Lord Of The Rings", "Peter Jackson,", 281000000);
const newMovie2 = new Movie("Rocky", "John G. Avildsen", 1000000);
console.log(newMovie1.wasExpensive());
console.log(newMovie2.wasExpensive());