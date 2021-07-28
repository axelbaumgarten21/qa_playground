import { register } from "ts-node";

class Register {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    
    constructor(
      email: string,
      password: string,
      firstName: string,
      lastName: string,
    
    ) {
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const testData: Array<Register> = [
    new Register(
      "fancypants@gmail.com",
      "tacobell27",
      "Jack",
      "Steinburgesson",
    ),
    new Register("megaboogey@gmail.com", "ilovecoolcats36", "Jane", "Dawson"),
  ];
  
  