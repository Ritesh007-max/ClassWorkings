#include<iostream>
#include<string>
using namespace std;

class Parent1{
    // Function members...
    public:
      void display(){
          cout << "The display fucntion defined inside -> Parent1 class" << endl; 
      }
};

class Parent2{
    // Function members...
    public:
      void display3(){
          cout << "The display3 fucntion defined inside -> Parent2 class" << endl; 
      }

};

class Child1 : public Parent1{
    // Function members...
    public:
      void display1(){
          cout << "The display1 fucntion defined inside -> Child1 class" << endl; 
      }

    
};

class Child2 : public Parent1, public Parent2{
    // Function members...
    public:
      void display2(){
          cout << "The display2 fucntion defined inside -> Child2 class" << endl; 
      }

    
};

int main(){
    
    Child2 c1;
    cout << "The parent1 fucntion is called through Child2 class " << endl;
    c1.display();
    cout << "The parent2 fucntion is called through Child2 class " << endl;
    c1.display3();
    cout << "The Child2 fucntion is called through Child2 class " << endl;
    c1.display2();
    
    Child1 c2;
    cout << "The parent1 fucntion is called through Child1 class " << endl;
    c2.display();
    // cout << "The parent2 fucntion is called through Child2 class " << endl;
    // c2.display3();
    cout << "The Child1 fucntion is called through Child1 class " << endl;
    c2.display1();



    
    return 0;
}