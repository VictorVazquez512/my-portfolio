import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialsList = [
  { icon: FaGithub, path: "https://github.com/VictorVazquez512" },
  { icon: FaLinkedin, path: "http://www.linkedin.com/in/victorvar" },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socialsList.map((social, index) => {
        return (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={social.path}
            key={index}
            className={iconStyles}
          >
            <social.icon />
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
