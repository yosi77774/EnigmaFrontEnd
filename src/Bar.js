
import { Link } from 'react-router-dom'

const Bar =  () =>
{

    return(<div>

<ul class="topnav">
  <li><Link to= "/Encryption">Encryption</Link></li>
  <li><Link to="/Hack">Hack</Link></li>
  <li class="right"><Link to="/">Log Out</Link></li>
</ul>

</div>)
}
export default Bar