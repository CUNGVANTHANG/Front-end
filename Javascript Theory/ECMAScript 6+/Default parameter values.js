// VD1:
// Viết bình thường
function logger(log) {
    if(typeof log === 'undefined') {
        log = 'Gia tri mac dinh!';
    }
    console.log(log);
}

logger();
// Gia tri mac dinh!

// Nên viết thành
function logger1(log = 'Gia tri mac dinh') {
    console.log(log);
}

logger1();
// Gia tri mac dinh!

// VD2:
// Viết bình thường
function logger3(log, isAlert) {
    if(isAlert) return alert(log);
    console.log(log);
}

logger3('Message...', true);

// Nên viết thành
function logger3(log, isAlert = false) {
    if(isAlert) return alert(log);
    console.log(log);
}

logger3('Message...', true);