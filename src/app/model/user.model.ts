export class User {
  public token! : string;
  
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public isAdmin: boolean
  ) {}
}