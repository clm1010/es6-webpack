// ES5中作用域

var callbacks = []

// 这里的var i = 0 会有变量提升 ，是全局变量
//  function() { 这里的函数体会保留原情况，是一个表达式，而不是值
//    return i * 2 闭包
//  }
for (var i = 0; i <= 2; i++) {
  callbacks[i] = function() {
    return i * 2
  }
}

console.table([
  callbacks[0](), // 6 当执行时i已经是3了
  callbacks[1](), // 6 当执行时i已经是3了
  callbacks[2]() // 6 当执行时i已经是3了
])

// ES6中作用域
const callbacks2 = []
// 用let声明的变量，它会有一个块级作用域的概念
//  function() { 这时候的闭包，它会取决于块级作用域
//    return i * 2
//  }
// 没循环一次它就生成一个新的作用域
for (let j = 0; j <= 2; j++) {
  callbacks2[j] = function() {
    return j * 2
  }
}

console.table([
  callbacks2[0](), // 0
  callbacks2[1](), // 2
  callbacks2[2]() // 4
])


// 块作用域

// ES5中块级作用域
// 立即执行函数
;(function(){
  var foo = function(){
    return 1
  }
  console.log('foo===1',foo() === 1)

  ;(function(){
    var foo = function(){
      return 2
    }
    console.log('foo===2',foo() === 2)
  })()

})()


// ES6中块级作用域
{
  function foo(){
    return 1
  }
  console.log('ES6中 foo===1',foo() === 1)
  {
    function foo(){
      return 2
    }
    console.log('ES6中 foo===2',foo() === 2)
  }
  console.log('ES6中 foo===1',foo() === 1)
}
