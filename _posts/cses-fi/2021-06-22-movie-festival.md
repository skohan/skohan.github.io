---
layout: post
author: skohan
category: cses-fi sorting-and-searching
tags: cses-fi sorting-and-searching
link: "https://cses.fi/problemset/task/1629/"
---

problem link: [{{page.link}}]({{page.link}})

refernces: 


### Explanation
Simple greedy algorithm. First sort the movies in descreasing order of ending time and then count the movies which are not overlapping with next one. If they are, skip the movie.

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

class Movie{
public:
	int s,e;
};

void solve()
{
	int n;
	cin >> n;
	vector<Movie> v(n);
	for(auto& x:v)
		cin >> x.s >> x.e;

	sort(v.begin(), v.end(), [](Movie a, Movie b){
		if (a.e == b.e)
			return a.s < b.s;
		return a.e < b.e;
	});

	// for (auto x:v)
	// 	cout << x.s << " " << x.e << nl;

	int curr = 0;
	int ans = 1;

	for (int i = 1; i < n; i++)
	{
		if (v[curr].e <= v[i].s)
		{
			ans++;
			curr = i;
		}
	}

	cout << ans << nl;
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


