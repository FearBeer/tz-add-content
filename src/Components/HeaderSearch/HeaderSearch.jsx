import './HeaderSearch.css';

function HeaderSearch(props) {
  return (
    <div className='HeaderSearch'>
        {props.children}
    </div>
  );
}

export default HeaderSearch;