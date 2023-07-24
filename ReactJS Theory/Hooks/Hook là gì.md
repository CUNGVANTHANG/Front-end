Hook - Gắn (gắn vào component)

import {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallback,
    useMemo,
    useRender,
    useContext,
    useImperativeHandle,
    useDebugValue,
} from 'react

// Chưa dùng Hooks, chỉ là UI component
function ComponentA() {
    return <h1>Haven't used hooks yet</h1>
}

// Sử dụng Hooks, hỗ trợ thêm nhiều tính năng
function ComponentB() {
    // useState
    const [state, setState] = useState(initState)

    // useEffect
    useEffect(() => {

    }, [deps])

    // useLayoutEffect
    useLayoutEffect(() => {

    }, [deps])

    // useRef
    const ref = useRef()

    // useCallback
    const fn = useCallback(() => {

    }, [deps])

    // useMemo
    const result = useMemo(() => {
        // return results for memo
    }, [deps])

    // useReducer
    const [state, dispatch] = useReducer(reducer, inititalArg, init)

    // useContext
    const value = useContext(MyContext)

    // useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    // useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline');

    return <h1>Hooks</h1>
}

1. Chỉ dùng cho function component
2. Component đơn giản và trở nên dễ hiểu
    - Không bị chia logic ra như methods trong lifecycle của Class Component
    - Không cần sử dụng 'this'
3. Sử dụng Hooks khi nào?
    - Dự án mới => Hooks
    - Dự án cũ
        - Component mới => Function component + Hooks
        - Component cũ => Giữ nguyên, có thời gian tối ưu sau
        - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component
4. Người mới nên bắt đầu với Function hay Class component?
5. Có kết hợp sử dụng Function component & Class component được không?
    - Được