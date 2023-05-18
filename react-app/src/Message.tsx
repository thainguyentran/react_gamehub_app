//.tsx file for react components

//PascalCasing convention
function Message() {
    // JSX: javascript 
    const name = 'Nguyen';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;