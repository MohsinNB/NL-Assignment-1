{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLocaleLowerCase();
    }
  }
  formatString("Mohsin");
}

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

  console.log(filterByRating(books));
}

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

{
  class vehicle {
    constructor(private make: string, public year: number) {}
    getInfo() {
      return `"Make: ${this.make}, Year: ${this.year}"`;
    }
  }

  class car extends vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }
    getModel() {
      return `"Model: ${this.model}"`;
    }
  }

  const myCar = new car("Toyota", 2020, "corolla");
  console.log(myCar.getInfo());
  console.log(myCar.getModel());
}

{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  console.log(processValue("Tech jaint"));
  console.log(processValue(58));
}
{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    const prices: number[] = products.map((product) => product.price);

    const sortedPrice = prices.sort((a, b) => a - b);
    const maxPrice = sortedPrice[sortedPrice.length - 1];
    console.log(maxPrice);

    const result: Product | undefined = products.find(
      (product) => product.price == maxPrice
    );
    if (result) {
      return result;
    } else {
      return null;
    }
  }

  console.log(getMostExpensiveProduct([]));
}
{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if ((day === Day.Sunday, Day.Saturday)) {
      return "weekend";
    } else {
      return "weekday";
    }
  }

  console.log(getDayType(Day.Friday));
  console.log(getDayType(Day.Sunday));
}
{
  async function squareAsync(n: number): Promise<number> {
    const myPromise: Promise<number> = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n >= 0) {
          return resolve(n * n);
        } else {
          return reject(new Error("Negative number not allowed"));
        }
      }, 1000);
    });

    return await myPromise;
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
