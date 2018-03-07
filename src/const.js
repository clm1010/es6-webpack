// ES5中常量的写法
Object.defineProperty(window,"PI2",{
  value:3.1415926,
  writable:false //writable为false，说明当前值 不可写入 不可赋值，这样就相当于常量
})

console.log(window.PI2)
