#include <iostream>
#include <string>
using namespace std;

class Book
{
public:

    string id;
    string name;
    int pages;
    double price;

    Book(string id, string name, int pages, double price)
    {
        this->id = id;
        this->name = name;
        this->pages = pages;
        this->price = price;
    }

    void displayDetails()
    {
        cout << "id: " << id << endl;
        cout << "name: " << name << endl;
        cout << "Pages: " << pages << endl;
        cout << "Price: " << price << endl;
    }
};

int main()
{
    Book book1("B001", "James Clear", 320, 499.0);
    Book book2("B001", "James Clear", 320, 499.0);
    Book book3("B001", "James Clear", 320, 499.0);
    book1.displayDetails();
    book1.displayDetails();
    book1.displayDetails();
    return 0;
}
