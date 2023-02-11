# Performance test of JavaScript iterations

We have few techniques to iterate over the arrays, objects and strings. 

Tested the each technique with 1 Million iterations and executed the `test.js` file for `5` times using the `for i in {1..5}; node test.js;` command. 

## Results 
* `While` loop - 1.4ms
* `Do while` loop - 0.8ms
* `For` loop - 0.8ms
* `For Of` loop - 9.5ms
* `For In` loop - 137ms
* `Map` method - 8.5ms
* `Filter` method - 7.2ms
* `Reduce` method - 6.4ms
* `Sort` method - 11.7ms
* `Every` method - 7.2ms
* `Some` method - 6.8ms
* `Chaining methods` - 16.3ms