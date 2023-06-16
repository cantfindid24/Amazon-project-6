import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductScreen(props) {
  const params = useParams();
  console.log(params);
  const { _id } = params;

  return (
    <div>
      <h1>{_id}</h1>
    </div>
  );
}
