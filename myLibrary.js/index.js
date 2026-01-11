import { useState } from "./react.js";

const [hello, setHello] = useState(() => {
    const initial = "hello"
    return initial
})

console.log(hello());
setHello({hello: hello()})
console.log(hello());
