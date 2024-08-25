#include <iostream>
#include"bits/stdc++.h"
using namespace std ;
int main() {
    // Write C++ code here
    // std::cout << "Welcome to Code 360 Online Compiler!!";
    int t ;
    cin>>t;
    for(int i = 0 ; i < t ; i++){
        int l ;
        int r ; 
        int L ;
        int R ;
        cin>>l>>r;
        cin>>L>>R;
        if((r < L && l < L) || (R < l && L < l)){
            cout<<1<<endl;
        }
        else if(l < L && r > L && R>r){
            int val = (r-L)+2;
            cout<<val<<endl;
        }
        else if(L < l && R > l && r > R){
            int val = R-l+2;
            cout<<val<<endl;
        }
        else{
            int val = min(r-l , R-L)+2;
            if(l==L){
                val-=1 ;
            } 
            if(r==R) val-=1 ;
            cout<<val<<endl;
        }
    }
    
    return 0;
}