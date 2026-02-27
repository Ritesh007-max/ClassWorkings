#include <iostream>
#include <string>
using namespace std;

class Laptop
{
public:
};

// Derived class
class Lenvo : public Laptop
{
public:
    string Ram = "Ram Available";
    string Storage = "Storge Available";
    string Mother_Board = "MotherBoard is Available";

    // // Common Function members ....

    void display()
    {
        cout << "Parent fucntion got called and the common data members are; " << endl;
        cout << "Ram: " << this->Ram << endl;
        cout << "Storage " << this->Storage << endl;
        cout << "Mother_Board: " << this->Mother_Board << endl;
    }
};

int main()
{

    Lenvo myLaptop;
    myLaptop.display();

    return 0;
}