export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Prev State: ', prevState)
        console.log('Action Arguments: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('Nexr State: ', nextState)

        console.groupEnd()

        return nextState
    }
}