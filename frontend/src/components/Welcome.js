import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div className="mt-4 p-5 bg-primary text-white rounded">
    <h1>Images Gallery</h1>
    <p>
      This is simple application that retrieves photos using Unspash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </div>
);

export default Welcome;
