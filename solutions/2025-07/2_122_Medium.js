// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
var maxProfit = function(prices) {
    let buy = Infinity
    let profit = 0;
    prices.forEach((price)=>{
        if(price < buy) buy = price
        if(price > buy) {
            profit += price - buy
            buy = price 
        }
    })

    return profit 
};