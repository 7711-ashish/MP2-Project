import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("<App/>", () => {
    it('renders without crashing', () => {
        const editor = shallow(<App/>);
        expect(editor.find('Route').length).toBe(22); 
    });
    it("render without crashing2", () => {
      const editor = shallow(<App/>);
      expect(editor.find('div').length).toBe(1);
    })
});