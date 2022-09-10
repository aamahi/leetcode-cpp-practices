var maxProfit = function(k, prices) {
    const profit = Array.from(Array(prices.length), () => new Array(2*k+1));
    const dp = (i, tno, p) => {
        if(i == p.length || tno == 0){  
            return 0; 
        }
        if(profit[i][tno] != undefined){ 
            return profit[ i][tno];
        }
        if(tno%2 == 0){
            return profit[i][tno] = Math.max(-p[i]+dp(i+1, tno-1, p), dp(i+1, tno, p));
        }
        return profit[i][tno] = Math.max(p[i]+dp(i+1, tno-1, p), dp(i+1, tno, p));
    }

    return dp(0, 2*k, prices);
};
