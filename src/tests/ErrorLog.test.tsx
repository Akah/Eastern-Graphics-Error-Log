import React from 'react';
import ReactDOM from 'react-dom'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ErrorLog from '../components/errorlog/ErrorLog';


it("renders all combined errors", () => {

    let container: HTMLDivElement;

    container = document.createElement('div');
    document.body.appendChild(container);
 
    ReactDOM.render(<ErrorLog/>, container);

    const tablebody = container.children[0].querySelector("tbody");

    expect(tablebody.children.length).toBe(10);

    ReactDOM.unmountComponentAtNode(container);
    container.remove();

});
