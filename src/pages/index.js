//import React package to our component
import React from 'react';
//alternative to using 'a' tags, they are faster and store past memory
import { Link } from 'gatsby';

//arrow function
const HomePage = () => {
    function onButtonClick() {
        console.log('Hi');
    }

    //react only allows you to return one html element
    //to display more than one, always wrap them in a React.Fragment
    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <p>Hello</p>
            <button onClick={onButtonClick}>Click me!</button><br/>
            <a href='/about'>Link to about page</a><br/>
            <Link to='/about'>New link to about page</Link>
        </React.Fragment>
    );
};

export default HomePage;

//to start the server type 'npm start' in the terminal