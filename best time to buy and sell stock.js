// 121. Best Time to Buy and Sell Stock

// const prices = [7, 6, 4, 3, 1];

// const prices = [2,4,1];


const prices = [7,1,5,3,6,4];

var maxProfit = function (prices) {
  let buy = prices[0]
  let maxProfit = 0;


  for(let i= 1; i < prices.length; i++){
      
      profit = prices[i] - buy

      if(profit > maxProfit){
        maxProfit = profit
      }

      if(buy > prices[i]){
          buy = prices[i]
      }

  }

  return maxProfit;

};

console.log(maxProfit(prices));
