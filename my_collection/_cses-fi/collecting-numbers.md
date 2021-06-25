---
layout: cses-fi
excerpt_separator: \\
author: skohan
date: 2021-06-24
link: https://cses.fi/problemset/task/2216/
excerpt: problem link <a href="https://cses.fi/problemset/task/2216/">https://cses.fi/problemset/task/2216/</a>
category: sorting-and-searching
explaination: Given array `arr`, we create a new array whose `i`th element represents index of `i` in `arr`. <br> <br> Now in new array, if value of `i`th element ( that is the index of `i` in `arr` ) is greater than `i+1`, then we have to do another round for collecting that number.

references: []
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




