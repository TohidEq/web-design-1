import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

type Props = {};

export default function Welcome({}: Props) {
  return (
    <div className="welcome">
      <div className="welcome-container">
        <div className="welcome-content">
          <h1 className="title">Night Trips</h1>
          <span>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</span>
          <p>
          Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
          </p>
        </div>
      </div>



      <div className="welcome-footer">
        <div className="welcome-footer-container">
          <div className="scroll">scroll</div>
            <div className="welcome-links">
              <ul>
                <li>
                  <Link href=""><FiTwitter /></Link>
                </li>
                <li>
                  <Link href=""><FaInstagram /></Link>
                </li>
                <li>
                  <Link href=""><FaFacebookF /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>

  );
}
