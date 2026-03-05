#include<iostream>
#include<string>
using namespace std;

class Parent
{
    public:
    void displayP()
    {
        cout<<"This is a display function of Parent class"<<endl;
    }
};

class Child1 : public Parent
{
    public:
    void display()
    {
        cout<<"This is a display function of Child1 class of parent"<<endl;
    }
};

class Child2 : public Parent
{
    public:
    void display()
    {
        cout<<"This is a display function of Child2 class of parent"<<endl;
    }
};

class Diamond_problem : public Child1, public Child2
{
    public:
    void display()
    {
        cout<<"This is a display function of diamond_problem class of parent"<<endl;
    }
};

int main()
{
    Diamond_problem d;
    d.Child1::displayP();
    // d.Child2::Parent::displayP(); gives an error because of ambiguity as both Child1 and Child2 have the same Parent class and the displayP() function is defined in both the classes. To resolve this ambiguity we can use virtual inheritance.

    // Solution to the diamond problem using virtual inheritance:
    // where we can declare the Parent class as virtual in both Child1 and Child2 classes. This way, only one instance of the Parent class will be created and shared between Child1 and Child2, thus resolving the ambiguity.
    // class Child1 : virtual public Parent --> syntex
    return 0;
}