import React from 'react';
import ReactLoading from 'react-loading';
import './Spinner.scss';
const Spinner = () => (
  <div className="spinner">
    <ReactLoading type={'bars'} color={'#222'} height={'20%'} width={'20%'} />
    <h2>Coming soon...</h2>
  </div>
);

export default Spinner;
