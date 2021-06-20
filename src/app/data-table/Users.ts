export class Users {
  Driver: string;
  Company: string;
  Distance: string;
  Score: number;

  constructor(Driver, Company, Distance, Score) {
    this.Driver = Driver;
    this.Company = Company;
    this.Distance = Distance;
    this.Score = Score;
  }
}
