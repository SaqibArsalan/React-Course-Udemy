import React from 'react';
import Accordion from './Components/Accordion';

const items = [
    {
        title: "What is React?",
        content: 'React is a front end JS Framework!!'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library for many engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating Componenets.'
    }
]


export default () => {

    return ( 
    <div>
        <Accordion items={items}/>
    </div>
    )
};