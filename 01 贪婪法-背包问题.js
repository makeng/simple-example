/* ---------------------------------------------------------------------------------------
* about:0-1背包问题
* author:马兆铿
* date:2018-11-06
* ---------------------------------------------------------------------------------------- */

// 物品类
function Item(weight, price) {
  return {
    weight,
    price,
    status: 0, // 0：未选中 1：选中 2：已经不可选
  }
}

// 背包
const knapsack = {
  list: [], // 可选物品
  totalC: 150 // 总承重量
};

// 一批物品的重量和价值
const wi = [35, 30, 60, 50, 40, 10, 25];
const pi = [10, 40, 30, 50, 35, 40, 30];

for (let i = 0; i < 7; i++) {
  knapsack.list.push(new Item(wi, pi));
}
console.log("背包🎒", knapsack);