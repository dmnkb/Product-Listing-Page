import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../../../theme/theme'
import Card from './Card';
import { getByTestId } from '@testing-library/dom';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container as Element);
  container?.remove();
  container = null;
});

it("renders product card data", async () => {
  
  const fakeProductData = {
    title: "Nike Air Force 1 Low Orange Skeleton",
    retailPrice: 130
  }
    
  const impl: any = () =>
    Promise.resolve({
      json: () => Promise.resolve(fakeProductData)
    } as RequestInfo)

  jest.spyOn(global, "fetch").mockImplementation(impl);
  
  await act(async () => {
    render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Card 
            title="Nike Air Force 1 Low Orange Skeleton"
            image="https://images.stockx.com/images/Nike-Air-Force-1-Low-Orange-Skeleton-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1609438989"
            price="130"
            productID="1d39bca1-9dd7-4d3f-80bd-8a9511fc1543"
          />
        </ThemeProvider>
      </MuiThemeProvider>
    , container)
  });
  
  expect(getByTestId(container, "card-title").textContent).toBe(fakeProductData.title)
  expect(getByTestId(container, "card-price").textContent).toBe(fakeProductData.retailPrice + ",00€")
  
  let globalRef:any = global;
  globalRef.fetch.mockRestore();
});