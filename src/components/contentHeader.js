import '../App.css'
function ContentHeader({title, color = 'black'}) {
  return (
    <div>
     <span className="t content-title" style={{color: color}}>{title.toUpperCase()}</span>
      <hr style={{borderTop: '1.5px solid ' + color}}/>
    </div>
  );
}   
export default ContentHeader;   