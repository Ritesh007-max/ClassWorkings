#include <iostream>  
using namespace std; 
#include <cstdio>
#include <string>

struct Employee {
    int id;
    string name;
    int salary;
};


int main() {

    Employee Emp[5];

    int size = sizeof(Emp)/sizeof(Emp[0]);

    for(int i = 0; i < size; i++) {
        cout << "Enter Id:" << endl;
        cin >> Emp[i].id;
        cout << "Enter name:" << endl;
        cin >> Emp[i].name;
        cout << "Enter salary:" << endl;
        cin >> Emp[i].salary; 
    }

    for(int i = 0; i < size; i++) {
        cout << "Given Employees are: " << Emp[i].id << "     "<< Emp[i].name << "      "<< Emp[i].salary << endl;
    }

    return 0; 
}