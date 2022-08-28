import Logo from "./logo.svg";
import Twitter from "./twitter.svg";
import Instagram from "./instagram.svg";
import Menu from "./menu.svg";
type IconsProps = {
  className?: string;
};

export function LogoIcon({ className }: IconsProps) {
  return <Logo className={className} />;
}

export function TwitterIcon({ className }: IconsProps) {
  return <Twitter className={className} />;
}

export function InstagramIcon({ className }: IconsProps) {
  return <Instagram className={className} />;
}
export function MenuIcon({ className }: IconsProps) {
  return <Menu className={className} />;
}
