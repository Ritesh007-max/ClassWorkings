#include <iostream>

using namespace std;

class CountObject
{

    // Data members...

public:
    static int count;

    CountObject()
    {
        ++count;
    }

    ~CountObject()
    {
        --count;
    }

    void displayCount()
    {
        cout << "The total object created is:->" << count << endl;
    }
};

int CountObject::count = 0;

void createObj()
{
    CountObject c4, c5, c6, c7;

    c7.displayCount();
}

int main()
{

    CountObject c1, c2, c3;

    c3.displayCount();

    createObj();

    c2.displayCount();

    return 0;
}