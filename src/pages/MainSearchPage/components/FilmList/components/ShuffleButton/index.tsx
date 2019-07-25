import React from 'react';
import './index.css';

export default function ShuffleButton({ onClick }: any) {
  return (
    <a href="javascript:void(0)" className="shuffle_btn" onClick={onClick}>
      <img alt="-" src="https://img.icons8.com/color/48/000000/shuffle.png" />
      <div>SHUFFLE</div>
    </a>
  );
}
