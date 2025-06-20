"use strict";
{
    function formatString(input, toUpper) {
        if (toUpper === true || toUpper === undefined) {
            return input.toUpperCase();
        }
        else {
            return input.toLocaleLowerCase();
        }
    }
    console.log(formatString("abc"));
    console.log(formatString("def", true));
    console.log(formatString("gdh", false));
}
{
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
    ];
    function filterByRating(items) {
        const upRating = items.filter((item) => item.rating >= 4);
        return upRating;
    }
    console.log(filterByRating(books));
}
