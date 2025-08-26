// The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

// The idea behind the OCP is that it promotes greater flexibility in your code. 
// When you need to add new behavior or features, instead of modifying existing code (and thus possibly introducing new bugs), you write new code that extends the old code.

// Example-1

interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}
