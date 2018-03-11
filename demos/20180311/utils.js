let a = 100;
console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}

exports.name = 'Tom'; //这里辛苦劳作帮 module.exports 的内容给改成 {name: 'Tom'}

exports = 'other'; //这里把exports的指向指走
