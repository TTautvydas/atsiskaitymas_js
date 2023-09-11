/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title,director,budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return this.budget > 100000000 ? true : false;
    }
}

const firstMovie = new Movie('Scarface', 'Brian De Palma', 25000000);
const secondMovie = new Movie('Titanic', 'James Cameron', 200000000);


console.log(firstMovie.wasExpensive());
console.log(secondMovie.wasExpensive());