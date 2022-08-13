import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from "../views/Dashboard";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import { storeMocked as store } from "../utils/mockStore";

const dashboardComponent = () => {
  return render(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
  );
}

describe('Dashboard', () => {
  it('will display unanswered questions by default', () => {
   
  });

  it('toggle button changes text when clicked',() => {
   
  })

  it('displays answered questions when button is toggled', () => {
  
  })
});