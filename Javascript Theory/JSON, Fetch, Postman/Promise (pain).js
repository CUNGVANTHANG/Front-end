// Callback hell
setTimeout(function() {
    console.log(1); // Việc 1
    setTimeout(function() {
        console.log(2); // Việc 2
        setTimeout(function() {
            console.log(3); // Việc 3
            setTimeout(function() {
                console.log(4); // Việc 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);