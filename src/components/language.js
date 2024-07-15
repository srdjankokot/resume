import '../App.css'
function LanguageComponent({title, proficiency}) {

    const progressBarStyle = {
        background: `linear-gradient(90deg, #eee ${proficiency}%, #797C7D ${proficiency}%)`
      };

    return (
        <div className="content" style={{marginRight:'10px'}}>
           <span id="ti_1" class="t s1_1">{title} </span>
           <div  className="progress-bar" style={progressBarStyle}/>
        </div>
    )
}
export default LanguageComponent;