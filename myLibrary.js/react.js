// react build-in functions (my version)

// useState
function useState(value) {
    
    let val = value;
    if(typeof value === "function") {
        val = value();
    };

    function setValue( callback ) {
        if(typeof callback === "function") {
            val = callback(val)
        } else {
            val = callback
        }
    };

    function getValue() {
        return val
    }

    return [getValue, setValue]
}


export { useState }