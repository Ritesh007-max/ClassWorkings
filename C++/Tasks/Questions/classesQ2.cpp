#include <iostream>
#include <string>
using namespace std;

class Book {
    private:
        int bookId;
        string title;
        string author;

    public:
        Book(int id, string title, string author) {
            bookId = id;
            this->title = title;
            this->author = author;
        }

        void addBook(Book& b1) {
             
        };

        void saveBook() {

        };

        void displayBook() {

        };
};

int main() {

    Book b1(123456, "dgvfvsd", "uiecoj");

}