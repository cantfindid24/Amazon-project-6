import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductScreen(props) {
  const params = useParams();
  console.log(params);
  const { _id } = params;

  return (
    <div>
      <Link to="/">Back to result</Link>
      <h1>{_id}</h1>
    </div>
  );
}
