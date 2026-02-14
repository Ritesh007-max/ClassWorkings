#include <iostream>
#include <deque>
#include <algorithm>
using namespace std;

int main()
{

    int n = 3;

    deque<string> dq;

    for (int i = 0; i < n; i++)
    {
        if (i == 0)
        {
            cout << "Enter the 1st element";
            string str;
            cin >> str;
            dq.push_front(str);
        }
        if (i == 1)
        {
            cout << "Enter the 2nd element";
            string str;
            cin >> str;
            dq.insert(dq.begin() + 1, str);
            
        }
        if (i == 2)
        {
            cout << "Enter the 3rd element";
            string str;
            cin >> str;
            dq.push_back(str);
        }
    }

    for(string i: dq) cout << " " << i;
}