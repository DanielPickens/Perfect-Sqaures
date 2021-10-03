const numSquares = function(n) {
 const dp = [n + 1];
        dp[0] = 0;
        
        for (let i = 1; i <= n; ++i) {
            let v = n;
            for (let j = 1; j * j<= i; ++j) {
                v = Math.min(v, dp[i - j * j] + 1);
            }
            dp[i] = v;
        }
        
        return dp[n];
    }



/*Success
Details 
Runtime: 140 ms, faster than 83.61% of JavaScript online submissions for Perfect Squares.
Memory Usage: 44.5 MB, less than 52.93% of JavaScript online submissions for Perfect Squares.
/*
