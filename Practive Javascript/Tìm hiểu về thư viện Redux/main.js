// import { createStore } from 'https://cdn.skypack.dev/redux';

////////// MY REDUX
function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribers = []

    console.log(state); // 0
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber())
        },
        subscribe(subscriber) {
            subscribers.push(subscriber)
        }
    }
}



////////// MY APP
const initState = 0
// Reducer
function bankReducer(state = initState, action) { // Giá trị khởi tạo state là 0 đô
    switch (action.type) { // Hành động của nó
        case 'DEPOSIT':
            return state + action.payload // Số tiền hiện tại + Số tiền muốn nạp vào 
        case 'WITHDRAW':
            return state - action.payload // Số tiền hiện tại - Số tiền muốn rút ra
        default:
            return state; // Số tiền hiện tại
    }
}

// Store
const store = window.store = createStore(bankReducer)

console.log(store.getState()) // Lấy ra số tiền hiện tại

// Actions
function actionDeposit(payload) { // Hàm nhận số tiền
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) { // Hàm rút tiền
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

// Event handler - Xử lý xử kiện
deposit.onclick = function() {
    store.dispatch(actionDeposit(10));
}

withdraw.onclick = function() {
    store.dispatch(actionWithdraw(10));
}

// Listener
store.subscribe(() => {
    console.log('State vừa update xong!')
    render();
})

// Render
function render() { // Hiện thị trên trình duyệt
    const output = document.querySelector('#output');
    output.innerText = store.getState(); // Lấy ra số tiền hiện tại
}

render()
