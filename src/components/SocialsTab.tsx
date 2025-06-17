import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialsTab = () => {
  return (
    <div className="flex gap-8 w-fit h-fit justify-center items-center font-family-covesLight font-bold tracking-wide text-lg">
      <button className="flex text-[#dadada] items-center gap-2 cursor-pointer hover:text-[#c6485f] transition-colors duration-300">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <p className="">Instagram</p>
      </button>
      <button className="flex text-[#dadada] items-center gap-2 cursor-pointer hover:text-[#2480cb] transition-colors duration-300">
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        <p>Linkedin</p>
      </button>
      <button className="flex text-[#dadada] items-center gap-2 cursor-pointer hover:text-[#1DA1F2] transition-colors duration-300">
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
        <p>Twitter</p>
      </button>
      <button className="flex text-[#dadada] items-center gap-2 cursor-pointer hover:text-[#a3a3a3] transition-colors duration-300">
        <FontAwesomeIcon icon={faGithub} size="lg" />
        <p>GitHub</p>
      </button>
    </div>
  );
};

export default SocialsTab;
