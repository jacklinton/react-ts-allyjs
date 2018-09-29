import * as React from 'react';

import './styles.css';

interface IProps {
  type: string;
  msg: string;
  clickHandler?: () => void;
  classlist?: string;
  title?: string;
}

const Button: React.SFC<IProps> = (props) => {
  const clickHandler = props.clickHandler ? props.clickHandler : () => {return null; };

  return (
    <button
      className={`btn ${props.type} ${props.classlist || ''}`}
      tabIndex={0}
      title={props.title}
      onClick={() => clickHandler()}
    >
      {props.msg}
    </button>
  );
};

export default Button;
