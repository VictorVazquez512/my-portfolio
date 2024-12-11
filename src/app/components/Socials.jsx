import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialsList = [
  { icon: FaGithub, path: "" },
  { icon: FaLinkedin, path: "" },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socialsList.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            <social.icon />
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
