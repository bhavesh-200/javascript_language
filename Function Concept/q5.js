// Arrow Function and arguments Object:

function test() {
    let arrow = () => {
      console.log(arguments[0]);
    };
    arrow(1, 2, 3);
}
test(4, 5, 6);