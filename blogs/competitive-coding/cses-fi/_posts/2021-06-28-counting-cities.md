---
layout: post
author: skohan
tags: competitive-coding cses-fi
---
<!-- more -->

Problem link: [https://cses.fi/problemset/task/1666](https://cses.fi/problemset/task/1666)

### explaination
 Simple BFS can solve the problem, but here I have implemented `disjoint union set` (union find and union)
 This method checks how many different groups of cities are connected. And then connects ( prints ) any one of the city from a group and connects it to next group till all groups are conncected.


```cpp

#include<bits/stdc++.h>
 
using namespace std;
 
#define ull unsigned long long
#define ll long long
#define nl "\n"
#define googleoutput cout << "Case #"
 
const int mod = 1000000007;
 
class DSU{
    int n, size;
    vector<int> id, sz;
 
public:
    DSU(int n)
    {
        this->n = n;
        this->size = n;
        id = vector<int>(n);
        sz = vector<int>(n,1);
        for(int i = 0; i<n; i++)
            id[i] = i;
    }
 
    int root(int p)
    {
        while(id[p] != p)
        {
            id[p] = id[id[p]];
            p = id[p];
        }
 
        return p;
    }
 
    void dsuUnion(int p, int q)
    {
        int i = root(p);
        int j = root(q);
 
        if (i == j)
            return;
        size--;
 
        if(sz[i] > sz[j])   { id[j] = id[i]; sz[i] += sz[j]; }
        else                { id[i] = id[j]; sz[j] += sz[i]; }
    }
 
    int getSize()
    {
        return this->size;
    }
 
    vector<int> groupsRoots()
    {
        vector<int> v;
        unordered_map<int,int> um;
 
        // int i = 0;
        for(int x:id)
        {
            // cout << i << " "; i++;
            int  r = root(x);
            // cout << r << nl;
            if(!um[r])
            {
                um[r] = 1;
                v.push_back(r);
            }
 
        }
 
        return v;
    }
 
 
};
 
void solve()
{
    int n, r;
    cin >> n >> r;
    DSU dsu(n);
 
    while(r--)
    {
        int a, b;
        cin >> a >> b;
        dsu.dsuUnion(a-1,b-1);
    }
 
    cout << dsu.getSize()-1 << nl;
    auto v = dsu.groupsRoots();
 
    for(unsigned i = 0; i < v.size()-1; i++)
        cout << v[i]+1 << " " << v[i+1]+1 << nl;
 
}
 
int main(){
 
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
 
    int t = 1;
    // cin >> t; 
    // int test_case = 1;
    while(t--)
    {
        // googleoutput << test_case++;
        solve();
    }
    return 0;
}


```




