export function fibonacci(n = 10){
    const fib = [0,1]
    for(let i=2; fib.length<n; i++){
        fib.push(fib[i-2]+fib[i-1])
    }
    return fib.splice(0, n)
}