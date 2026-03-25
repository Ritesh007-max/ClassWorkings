#include <iostream>
#include <string>
using namespace std;

class Student{
    private: 
        string name;
        int grade;

    public:

        string getName() {return name;}
        int getGrade() {return grade;}

        void setName(string n) {
            name = n;
        }

        void setGrade(int g) {
            if(g > 0 && g <=  100) {
                grade = g;
            }
            else {
                cout << "Input of grade is invalid";
            }
        }
};

int main() {
    Student s;

    s.setName("Ritesh");
    s.setGrade(100);

    cout << "Name: " << s.getName() << ", Age: " << s.getGrade() << endl;
    return 0;
}