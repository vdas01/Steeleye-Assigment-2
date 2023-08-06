import { render, screen } from '@testing-library/react';
import App from './App';


describe('App test', () => {
  it('tests david text', () => {
    render(<App />);
    const linkElement = screen.getByText("hi daviddheadline",{exact:false});
    expect(linkElement).toBeInTheDocument();
  });

  test("testing custom function",()=>{
    render(<App/>);
      const cust = screen.getByText((content)=> content.startsWith('Hi David'))
      expect(cust).toBeInTheDocument()
  })
  

  test('tests img tag',()=>{
    render(<App/>);
    const imgElement = screen.getAllByRole('img');
    expect(imgElement).toHaveLength(imgElement.length);
  })

  test("Alt text",()=>{
    render(<App/>);
    const altText = screen.getAllByAltText('Rick Astley');
    expect(altText).toHaveLength(altText.length);
  })

  test("Link testing",()=>{
    render(<App/>);
    const link = screen.getAllByRole('link');
    expect(link).toHaveLength(link.length)
  })

  test("not in document",()=>{
    render(<App/>);
    const func = screen.queryByRole('button',{
      name:"vishal"
    });
    expect(func).not.toBeInTheDocument();
  })
});





