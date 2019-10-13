import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../components/error/Error';

it('renders with text from props', () => {
    let container: HTMLDivElement = document.createElement('div');
    document.body.appendChild(container);

    let anError = {
        "message": "a message",
        "facility": "a facility",
        "level": "a level",
        "timeStamp": "a timestamp"
    }

    ReactDOM.render(<Error error={anError}/>, container);

    expect(container.querySelector("tr").children[0].firstChild.firstChild.textContent).toBe("a message");
    expect(container.querySelector("tr").children[1].firstChild.firstChild.textContent).toBe("a facility");
    expect(container.querySelector("tr").children[2].firstChild.firstChild.textContent).toBe("a level");
    expect(container.querySelector("tr").children[3].firstChild.firstChild.textContent).toBe("a timestamp");
});