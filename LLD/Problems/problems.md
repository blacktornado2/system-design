# 🎯 Low-Level Design (LLD) Interview Questions

Here are 20 LLD questions that are frequently asked in interviews, ordered from beginner to advanced.

For each question, you should aim to:
* Clarify requirements and identify use cases.
* Identify the core classes and their attributes/methods.
* Define the relationships between classes (e.g., association, inheritance, composition).
* Create a **UML class diagram** to visually represent your design.
* Discuss the design patterns you've used and why.

---
### 🌱 Beginner Level: Core Object Modeling
*These questions test your ability to model real-world objects and their basic interactions.*

1.  **Design a Deck of Cards:** How would you represent a standard 52-card deck? Your design should handle suits, ranks, shuffling, and dealing cards.
2.  **Design a Library Management System:** Model the core entities like `Book`, `Member`, and `Library`. The system should handle borrowing and returning books.
3.  **Design a Vending Machine:** Design a machine that dispenses items. It should handle inventory, item selection, payment (accepting coins/notes), and dispensing items and change.
4.  **Design a Coffee Machine:** Model a machine that can make different types of coffee (e.g., Espresso, Latte). Consider the ingredients (`CoffeeBean`, `Milk`, `Water`) and the recipes.
5.  **Design a Digital Photo Frame:** Design the software for a digital photo frame that can store and display a slideshow of photos.

---
### 🛠️ Intermediate Level: Applying Common Design Patterns
*These questions expect you to solve problems using specific design patterns.*

6.  **Design a Notification System:** Design a system that can send notifications via different channels like **Email, SMS, and Push Notifications**. (Hint: Think **Factory** or **Strategy** Pattern).
7.  **Design a Text Editor with Undo/Redo:** How would you implement an undo/redo functionality in a simple text editor? (Hint: Think **Command** Pattern).
8.  **Design a Stock Alert System:** When a stock's price changes, multiple displays (e.g., a mobile app, a web dashboard) need to be updated. How would you design this? (Hint: Think **Observer** Pattern).
9.  **Design a Pizza Ordering System:** Design a system where you can create a base pizza and then add various toppings (like cheese, pepperoni, etc.). The price should update with each new topping. (Hint: Think **Decorator** Pattern).
10. **Design a Logging Framework:** The framework should support logging to different destinations (e.g., file, console, database) and have different log levels (e.g., INFO, DEBUG, ERROR). (Hint: Think **Chain of Responsibility** and **Factory** Pattern).
11. **Design a Hotel Booking System:** Model the core logic for booking a room. Consider different room types, users, and booking details.
12. **Design an ATM:** Model the classes required for an ATM to function. It should handle user authentication, cash withdrawal, deposits, and balance inquiries.

---
### 🚀 Advanced Level: Complex Systems & Multiple Patterns
*These questions require you to design larger systems, often involving multiple interacting components and design patterns.*

13. **Design a Parking Lot:** Design a system to manage a parking lot. It should handle different types of vehicles (cars, bikes, trucks), different parking spot sizes, ticketing, and a payment system.
14. **Design a Ride-Sharing App (like Uber/Ola):** Model the core flow of booking a ride, from a rider requesting a trip to a driver being assigned and completing the trip.
15. **Design an Elevator Management System:** Design the logic for a system of elevators in a multi-story building. The system should handle user requests from different floors and efficiently dispatch elevators.
16. **Design a Movie Ticket Booking System (like BookMyShow):** Model the system for booking movie tickets. Consider entities like `Cinema`, `Screen`, `Show`, `Seat`, and `Booking`.
17. **Design a Splitwise/Expense-Sharing Application:** Design an application where users can create groups, add expenses, and split the amount in different ways (e.g., equally, by exact amounts, by percentage).
18. **Design a Chess Game:** Model the board, different pieces, and the rules for movement. How would you handle game state and player turns?
19. **Design an Online Auction System:** Design the backend for an auction site. It should handle creating auctions for items, allowing users to place bids, and determining the winner when the auction ends.
20. **Design a Food Delivery App (like Swiggy/Zomato):** Model the core functionality, including restaurants, menu items, user orders, delivery partners, and order tracking.