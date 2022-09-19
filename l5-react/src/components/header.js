import {NavBar} from './nav';

export const Header = (props) => {
  return (
    <div className='header'>
      <h1>Welcome</h1>
      <NavBar setContentFunction={props.setContentFunction} />
    </div>
  );
};
