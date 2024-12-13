const func = () => {
    let sum = (a, b) => a + b;
    var x = 10;
    var y = 20;

    console.log(sum(x, y)); // 30
    debugger;
    x = 20;

    y = 30;

    console.log(sum(x, y)); // 50
};

func();
