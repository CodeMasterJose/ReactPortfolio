import imgSrc from "../Assets/photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFontAwesome,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Leftbar = () => {
  return (
    <div>
      <div className="p-6 pt-10">
        <img src={imgSrc} className="rounded-full p-6" alt="Profile" />
      </div>
      <div className="flex pl-10 text-white text-4xl">
        <h1>Jose Sanabria</h1>
      </div>
      <a
        href="https://github.com/CodeMasterJose"
        target="_blank"
        rel="noopener noreferrer"
        className="flex pl-10 pt-0.5 text-slate-500 text-xl underline hover:no-underline"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        CodeMasterJose
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex pl-10 pt-0.5 text-slate-500 text-xl underline hover:no-underline"
      >
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
        LinkedIn
      </a>
      <a
        href="mailto:jose117sanabri@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex pl-10 pt-0.5 text-slate-500 text-xl underline hover:no-underline"
      >
        Mail
      </a>
    </div>
  );
};

export default Leftbar;
