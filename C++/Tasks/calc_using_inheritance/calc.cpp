#include <iostream>
#include <string>
#include <map>
#include <stdexcept>
using namespace std;

class AddOperation
{
public:
    int add(int a, int b)
    {
        return a + b;
    }
};

class SubtractOperation
{
public:
    int subtract(int a, int b)
    {
        return a - b;
    }
};

class MultiplyOperation
{
public:
    int multiply(int a, int b)
    {
        return a * b;
    }
};

class DivideOperation
{
public:
    double divide(int a, int b)
    {
        if (b == 0)
        {
            throw invalid_argument("Division by zero is not allowed.");
        }
        return static_cast<double>(a) / b;
    }
};

class Calculator : public AddOperation, public SubtractOperation, public MultiplyOperation, public DivideOperation
{
    void displayMenu()
    {
        cout << "Calc has been initiated:" << endl;
    }
};

int main()
{
    map<string, int> operationCount;
    operationCount["add"] = 0;
    operationCount["subtract"] = 0;
    operationCount["multiply"] = 0;
    operationCount["divide"] = 0;

    Calculator calc;

    int num1, num2;
    cout << "Enter two numbers: ";
    if (!(cin >> num1 >> num2))
    {
        cout << "Invalid number input." << endl;
        return 1;
    }

    string operation;
    cout << "Enter operation (add, subtract, multiply, divide): ";
    if (!(cin >> operation))
    {
        cout << "Invalid operation input." << endl;
        return 1;
    }

    if (operation != "add" && operation != "subtract" && operation != "multiply" && operation != "divide")
    {
        cout << "Invalid operation." << endl;
        return 1;
    }
    else
    {
        if (operation == "add")
        {
            cout << "Result: " << calc.add(num1, num2) << endl;
            operationCount["add"]++;
        }
        else if (operation == "subtract")
        {
            cout << "Result: " << calc.subtract(num1, num2) << endl;
            operationCount["subtract"]++;
        }
        else if (operation == "multiply")
        {
            cout << "Result: " << calc.multiply(num1, num2) << endl;
            operationCount["multiply"]++;
        }
        else if (operation == "divide")
        {
            cout << "Result: " << calc.divide(num1, num2) << endl;
            operationCount["divide"]++;
        }
        else
        {
            cout << "Invalid operation." << endl;
            return 1;
        }
    }

    cout << "Operation count:" << endl;
    cout << "add: " << operationCount["add"] << endl;
    cout << "subtract: " << operationCount["subtract"] << endl;
    cout << "multiply: " << operationCount["multiply"] << endl;
    cout << "divide: " << operationCount["divide"] << endl;

    return 0;
}
