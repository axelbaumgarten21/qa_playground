import { getParsedCommandLineOfConfigFile } from "typescript";

const employee1 = {
    name: "Reba",
    phone: "432-254-3937",
    email: "reba@aol.com",
    id: 569876
};

class employee {
    name: string
    phone: string
    email: string
    id: number
    constructor(name, phone, email, id) {
        this.name = name,
        this.phone = phone
        this.email = email
        this.id = id

    }
// a method is added simply by adding the name of the method, then standard
  // function formatting.
  toString(): string {
    // here toString takes no parameters, and returns a string
    let output =
      `Employee Record: \n` +
      `\tName: ${this.name}\n` +
      `\tID: ${this.id}\n ` + 

      `Contact information: \n` +
      `\tPhone: ${this.phone}\n` +
      `\tEmail: ${this.email}\n` 
            
      ;
    return output;
  }
    
}

let Ricky = new employee("Ricky", "971-274-9898", "ricky@gmail.com", 678456);
console.log(Ricky.toString());


