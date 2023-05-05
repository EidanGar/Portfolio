import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { IconType } from "react-icons";

export interface ContactInfo {
  Icon: IconType;
  name: string;
  link: string;
}

export const contacts = [
  { Icon: IoIosPaper, name: "Resume", link: "" },
  {
    Icon: BsEnvelopeFill,
    name: "Email",
    link: "mailto:eidangarcia787i@gmail.com"
  },
  { Icon: BsLinkedin, name: "LinkedIn", link: "http://inkedin.com/in/egar03/" },
  { Icon: BsGithub, name: "Github", link: "http://https://github.com/EidanGar" }
];
