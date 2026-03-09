#include <iostream>
#include <string>
using namespace std;

class Person {

public:

    string name;
    int age;

    Person(string n, int a) {
        name = n;
        age = a;
    }

};

class Employee : public Person {

public:

    string emp_id;
    int salary;

    Employee(string n, int a, string id, int s) : Person(n, a) {
        emp_id = id;
        salary = s;
    }

};

class Manager : public Employee {

public:

    string department;

    Manager(string department, string n, int a, string id, int s) : Employee(n, a, id, s) {
        this->department = department;
    }

    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Employee ID: " << emp_id << endl;
        cout << "Salary: " << salary << endl;
        cout << "Department: " << department << endl;
    }
};

int main() {

    Manager m("Sales", "Alice", 35, "E123", 75000);
    m.display();

    return 0;
}