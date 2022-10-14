---
layout: post
author: skohan
tags: competitive-coding cses-fi
---
<!-- more -->

Problem link: [https://cses.fi/problemset/task/1074/](https://cses.fi/problemset/task/1074/)

### explaination
 We apply ternary search between minimum height and maximum height to find optimum solution

```cpp


#include <bits/stdc++.h>
	
using namespace std;
	
typedef unsigned long long ull;
typedef long long ll;
	
#define nl "\n"
	
const int N = 3 * 1e5 + 2;
const int mod = 1e9 + 7;
	
int smalla = 97;
int biga = 65;
	
	
void solve()
{
	int n;
	cin >> n;
	
	vector<int> v(n);
	for(int& x:v)
		cin >> x;
	
	int mx = *max_element(v.begin(), v.end());
	int mn = *min_element(v.begin(), v.end());
	
	int l = mn, h = mx;
	
	auto calc = [&](int c){
		ll cost = 0;
		for(auto x:v)
			cost += abs(c-x);
		return cost;
	};
	
	while(h - l > 2)
	{
		int lh = l + (h-l)/3;
		int hl = h - (h-l)/3;
	
		if(calc(lh) >= calc(hl))
			l = lh;
		else
			h = hl;
	} 
	
	cout << calc(l + (h-l)/2) << nl;
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

```


references: [https://www.geeksforgeeks.org/ternary-search/](https://www.geeksforgeeks.org/ternary-search/)