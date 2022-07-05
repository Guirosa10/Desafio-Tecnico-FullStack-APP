import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Todos() {
  const { id } = useParams();

  useEffect(() => {
    // get from api
  }, []);
  return (
    <div>{id}</div>
  );
}
