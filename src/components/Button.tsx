import { useState } from 'react'

interface ButtonProperties {
    color: string,
    children: string
}

export function Button(props: ButtonProperties) {
    const [counter, setCounter] = useState(0)

    function increments() {
        setCounter(counter + 1)
    }

    return(
        <button
            style={{ backgroundColor: props.color, height: '3rem' }}
            onClick={increments}
        >
            {props.children} <strong>{counter}</strong>
        </button>
    )
}
