---
layout: cses-fi
excerpt_separator: \\
author: skohan
link: https://cses.fi/problemset/task/2216/
excerpt: problem link <a href="https://cses.fi/problemset/task/2216/">https://cses.fi/problemset/task/2216/</a>
category: cses-fi sorting-and-searching
tags: cses-fi sorting-and-searching
explaination: First we sort the all the `n` elements.<br><br>
    We declare a varible `sum` which represents, from 0 to `sum` we can create the sum of coins. 
    Initially, `sum` is 0, ie we don't take any element from array.<br><br>
    Now we iterate through the **sorted** array. For each element x in the array, since `sum` represents maximum summation we can get from previously taken array elements, we can get summation upto ``sum + x`` **iff** `x <= sum`. Otherwise, there would not be any combination which could sum up to from `sum` to `0 + x`, and smallest one among those will obiviously be `sum`.
    
references:
---



{% highlight c++ %}


#include <bits/stdc++.h>
 
using namespace std;
 
typedef unsigned long long ull;
typedef long long ll;

#define nl "\n"

const int mod = 1e9 + 7;

int smalla = 97;
int biga = 65;


void solve()
{
	int n;
	cin >> n;
	vector<int> v(n);
	for(int& x:v) cin >> x;

	vector<int> sv(n+1);
	for(int i = 0; i < n; i++) sv[v[i]] = i;

	int idx = sv[1]; // starting index

	int rounds = 1;
	
	for(int i = 2; i <= n; i++)
	{
		if(sv[i] < idx)
			rounds++;

		idx = sv[i];

	}

	cout << rounds << nl;
}
   
   
int main(){
 
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t = 1;
    // cin>>t;

    int c = 1;

    while(t--)
    {
        // cout << "Case #" << c <<": " ;

        solve();
        c++;
    }
}


{% endhighlight %}




