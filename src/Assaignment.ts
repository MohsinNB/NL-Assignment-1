//PROBLEM 1
{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLocaleLowerCase();
    }
  }

  // console.log(formatString("abc"));
  // console.log(formatString("def", true));
  // console.log(formatString("gdh", false));
}
//PROBLEM 2
{
  const books: { title: string; rating: number }[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const upRating: { title: string; rating: number }[] = items.filter(
      (item) => item.rating >= 4
    );
    return upRating;
  }

  // console.log(filterByRating(books));
}
//PROBLEM 3 Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
      const res1: T[] = arrays[i];
      result.push(...res1);
    }
    return result;
  }
}
//PROBLEM 4
{
}
//PROBLEM 5
{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  // console.log(processValue("Tech jaint"));
  // console.log(processValue(58));
}
// PROBLEM 6
{
}
// PROBLEM 7
{
}
