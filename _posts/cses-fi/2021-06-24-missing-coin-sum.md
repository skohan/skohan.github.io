---
layout: post
author: skohan
link: https://cses.fi/problemset/task/2183
category: cses-fi sorting-and-searching
tags: cses-fi sorting-and-searching
---

problem link: [{{page.link}}]({{page.link}})

refernces: 


### Explanation

First we sort the all the `n` elements.

We declare a varible `sum` which represents, from 0 to `sum` we can create the sum of coins. 
Initially, `sum` is 0, ie we don't take any element from array.

Now we iterate through the **sorted** array. For each element x in the array, since `sum` represents maximum summation we can get from previously taken array elements, we can get summation upto sum + x **iff** `x <= sum`. Otherwise, there would not be any combination which could sum up to from `sum` to `0 + x`, and smallest one among those will obiviously be `sum`.



### Code


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
	int n; cin >> n;

	vector<int> v(n);
	for(int& x:v) cin >> x;

	sort(v.begin(), v.end());


	ull sum = 1; // we start from searching sum 1

	for(int x:v)
	{
		if(x <= sum)
		{
			sum += x;
		}
		else
		{
			cout << sum << nl;
			return;
		}
	}

	cout << sum << nl;

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