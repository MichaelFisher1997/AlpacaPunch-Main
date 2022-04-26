import React from 'react';
import Navbar from './Navbar'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
  test('should render', () => {
    const { getByText } = render(<Router><Navbar /></Router>)
    expect(getByText('About')).toBeTruthy();
  })

  test('should push on link click', () => {
    const { getByText } = render(<Router><Navbar /></Router>)
    const link = getByText('About');
    expect(link.href).toEqual('http://localhost/about');
  })
})



//this is Jest, read about it!!!
