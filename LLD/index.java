public class index {
    public static void main(String[] args) {

   }
}

class Marker {
    String name;
    String color;
    int year;
    int price;

    public Marker(String name, String color, int year, int price) {
        this.name = name;
        this.color = color;
        this.year = year;
        this.price = price; 
    }
}

// This class doesn't follow Single responsibility principle
class Invoice {

    private Marker marker;
    private int quantity;

    public Invoice(Marker marker, int quantity) {
        this.marker = marker;
        this.quantity = quantity;
    }

    // 1st reason to change
    public int calculateTotal() {
        int price = ((marker.price) * this.quantity);
        return price;
    }

    // 2nd reason to change
    public void printInvoice() {
        // print the Invoice
    }

    // 3rd reason to change
    public void saveToDB() {
        // Save the data into DB
    }
}