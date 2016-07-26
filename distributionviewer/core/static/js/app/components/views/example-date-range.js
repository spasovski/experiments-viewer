import React from 'react';

export default function(props) {
  return (
    <span className="date-range">
      <time dateTime={props.from}>{props.from}</time> to <time dateTime={props.to}>{props.to}</time>
    </span>
  );
}