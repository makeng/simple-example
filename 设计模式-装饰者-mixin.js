/*----------------------------------------------------------------------------------
* about:设计模式：装饰者模式
* author:马兆铿
* date:2019-5-31
* ----------------------------------------------------------------------------------*/

var Car = function (settings) {
  this.model = settings.model || "no model provided"
  this.color = settings.color || "no color provided"
}

var Mixin = function () {
}

Mixin.prototype = {
  driveForward: function () {
    console.log("drive forward")
  },
  driveBackward: function () {
    console.log("drive backward")
  },
  driveSideways: function () {
    console.log("drive sideways")
  }
}

//混入模式的实现
function Merge(recClass, giveClass) {
  if (arguments.length > 2) {
    for (var i = 2, lenth = arguments.length; i < lenth; ++i) {
      var methodName = arguments[i]
      recClass.prototype[methodName] = giveClass.prototype[methodName]
    }
  } else {
    for (var methodName in giveClass.prototype) {
      if (!recClass.prototype[methodName]) {
        recClass.prototype[methodName] = giveClass.prototype[methodName]
      }
    }
  }
}

Merge(Car, Mixin, "driveForward", "driveBackward")

var myCar = new Car({
  model: "BMW",
  color: "blue"
})

myCar.driveForward()    //drive forward
myCar.driveBackward()   //drive backward

//不指定特定方法名的时候，将后者所有的方法都添加到前者里
Merge(Car, Mixin)
console.log("原型链", myCar instanceof Car);
console.log("原型链", myCar instanceof Mixin);

var mySportsCar = new Car({
  model: "Porsche",
  color: "red"
})

mySportsCar.driveForward()  //drive forward