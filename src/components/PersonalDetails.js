import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



/* <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
<FontAwesomeIcon icon="fa-brands fa-github" />
<FontAwesomeIcon icon="fa-solid fa-phone" /> */


function PersonalDetails() {
  return (
    <div className='personalDetails'>
       <h1>Victor Akobundu</h1>
       <p>
          <FontAwesomeIcon icon={faLocationDot}/> Nigeria</p>
        <p><FontAwesomeIcon icon={faEnvelope}/> obiomaakobundu@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone}/> +2348022724648</p>
        <p><FontAwesomeIcon icon={faLinkedinIn}/> www.linkedin.com/in/victor-akobundu</p>
        <p><FontAwesomeIcon icon={faGithub}/> www.github.com/vikovic18</p>
    </div>
  )
}

export default PersonalDetails