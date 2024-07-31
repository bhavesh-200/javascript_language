// Understanding Scope :

function outer() {
    let outerVar = 10;
    function inner() {
      let innerVar = 20;
      console.log(outerVar + innerVar);
    }
    inner();
}
outer();