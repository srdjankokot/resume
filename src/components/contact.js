import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactComponent({contact, icon, callback}) {
    return (
        <div className='content' style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={callback}>
            <div className="icon-container">
                <FontAwesomeIcon icon={icon} style={{  width: '50%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
           </div>
           <span id="ti_1" class="t s1_1" style={{marginLeft:'10px', flex:1}}>{contact}</span>
        </div>
    )
}
export default ContactComponent;
