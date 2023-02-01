import { Fragment, useState } from "react";
function Sub () {
const [ num1, setNum1 ] = useState(0);
const [ num2, setNum2 ] = useState(0);
const [ result, setResult ] = useState(0);
function sub() {
setResult(num1 - num2);
}
return (<Fragment>
<h1>Subtraction of two numbers</h1>
<input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>

<input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
<button onClick={sub}>Subtraction</button>
<div>{result}</div>
</Fragment>);
}
export default Sub;