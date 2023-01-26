import React from 'react'
import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>The count is : {count} </h1>
			<button onClick={() => setCount(count + 1)}>increase</button>
			<button onClick={() => setCount(count - 1)}>decrease</button>
		</div>
	)
}

export default Counter