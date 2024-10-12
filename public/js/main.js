//inheritance
// class Human {
//   protected firstName: string | null = "";
//   protected lastName: string | null = "";
//   public constructor(first: string | null, last: string | null) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   public data() {
//     console.log(`My full name is ${this.firstName} ${this.lastName}.`);
//   }
// }
// class Salary extends Human {
//   private hour: number = 0;
//   private degree: string | null = "";
//   public constructor(
//     firstName: string | null,
//     lastName: string | null,
//     hour: number,
//     degree: string | null
//   ) {
//     super(firstName, lastName);
//     this.hour = hour;
//     this.degree = degree;
//   }
//   public process() {
//     switch (this.degree) {
//       case "phd": {
//         return this.calculate(this.hour, 400000);
//       }
//       case "master": {
//         return this.calculate(this.hour, 300000);
//       }
//       case "bachelor": {
//         return this.calculate(this.hour, 200000);
//       }
//       case "diploma": {
//         return this.calculate(this.hour, 100000);
//       }
//       default: {
//         return 0;
//       }
//     }
//   }
//   public calculate(hour: number, hourly: number) {
//     let tax: number = 0.1;
//     let pureSalary: number = hour * hourly;
//     let salary: number = pureSalary - pureSalary * tax;
//     return `Full name: ${this.firstName} ${this.lastName} Pure salary: ${pureSalary} Salary with tax: ${salary}`;
//   }
// }
// let person = new Salary(
//   prompt("Enter your first name"),
//   prompt("Enter your last name"),
//   Number(prompt("How many hours have you worked?")),
//   prompt("Enter your degree")
// );
// person.data();
// console.log(person.process());
//******************************************************************************** */
//assign and print array
// let data: (string | null | boolean | number)[] = [
//   "Fumi",
//   20,
//   true,
//   null,
//   "Alvandi",
// ];
// for (let i: number = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
// document.write(`<ul>`);
// data.forEach((item, index) => {
//   document.write(`<li>${index} ${item}</li>`);
// });
// document.write(`</ul>`);
//push
// data.push(30);
// data.push("Nimra");
// console.log(data);
// console.log("*".repeat(50));
//reverse+pop
// data.reverse();
// data.pop();
// console.log(data);
// console.log("*".repeat(50));
//shift+unshift
// data.shift();
// console.log(data);
// data.unshift("Fumi");
// console.log(data);
// console.log("*".repeat(50));
//average
// let count: number = Number(prompt("Enter the number of subjects"));
// let grades = [];
// let credits = [];
// let sumGrade: number = 0;
// let sumCredit: number = 0;
// for (let i: number = 1; i <= count; i++) {
//   let grade: number = Number(prompt(`Subject ${i} grade:`));
//   grades.push(grade);
//   let credit: number = Number(prompt(`Subject ${i} credit:`));
//   credits.push(credit);
//   sumGrade += grade * credit;
//   sumCredit += credit;
// }
// let average: number = sumGrade / sumCredit;
// console.log(`${grades} ${credits}, average: ${average}`);
// console.log("*".repeat(50));
//at
// let numbers:number[] = [20, 30, 10, 40];
// console.log(numbers.at(0), numbers.at(2));
//map
// let numbers: number[] = [10, 20, 30, 40, 50];
// let result = numbers.map((item) => {
//   return item + 100;
// });
// console.log(result);
// console.log("*".repeat(50));
//filter
// let filter = numbers.filter((item) => {
//   return item > 10 && item < 50;
// });
// console.log(filter);
//find+findIndex+includes
// let find = numbers.find((item) => {
//   return item == 10;
// });
// console.log(find);
// let index = numbers.findIndex((item) => {
//   return item == 10;
// });
// console.log(index);
// console.log(data.includes(50));
//flat+flatMap
// let mix: any[] = [true, 20, undefined, [10, 50, 640, 23, 34]];
// console.log(mix.flat());
// let flat = mix.flatMap((item) => item);
// console.log(flat);
// console.log("*".repeat(50));
// let concat = mix.concat(["Ali", "Mohammadi", 20]);
// console.log(concat);
//toString+join
// let info: any[] = ["Fumi", "Lava", 20, true, "test@gmail.com"];
// let flatInfo = info.toString();
// console.log(info.join("    "));
//slice+splice
// let slice=info.slice(0,3)
// console.log(slice)
// info.splice(0,2)
// console.log(info)
//reduce
// let sum:number=0
// for (let i:number=0;i<numbers.length;i++){
//   sum+=numbers[i]
// }
// console.log(sum);
// let reduce=numbers.reduce((x,y)=>{
//   return x*y
// })
// console.log(reduce);
//some+every
// let some = numbers.some((item) => {
//   return item % 7 == 0;
// });
// console.log(some);
// let every = numbers.every((item) => {
//   return item % 2 == 0;
// });
// console.log(every);
