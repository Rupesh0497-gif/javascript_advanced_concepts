// map, filter and reduce

// polyfill for map()

Array.prototype.myMap = function (cb){
    let temp = [];
    // this we are using because as we use map 
    // we will do ourArray.map right. so here this means ourArray
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }

    return temp
}

let a = [1,2,3,4,5]


console.log(a.myMap((item) => item)) // [ 1, 2, 3, 4, 5 ]

// polyfill for filter()

Array.prototype.myFilter = function (cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i , this)){
        temp.push(this[i])        
        }
    }
    return temp
}

console.log(a.myFilter((item) => item > 1)) // [ 2, 3, 4, 5 ]

// polyfill for reduce


Array.prototype.myReduce = function (cb, initialVal){
    var accumulator = initialVal
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i , this): this[i];
    }
    return accumulator
}

console.log(a.myReduce((acc, item)=>{
    return acc+item
}, 0)) // 15

// polyfill for forEach

Array.prototype.myForEach = function (cb){
    const O = Object(this);
    const len = O.length >>> 0;
    
    for (let i = 0; i < len; i++) {
       if(i in O){
        cb.call(this, O[i], i, O);
       }
    }
}

a.myForEach((item) => {console.log(item)})

/** prints in console
1
2
3
4
5
 */