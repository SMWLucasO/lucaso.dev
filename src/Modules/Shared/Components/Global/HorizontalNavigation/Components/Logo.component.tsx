import { Link } from "@tanstack/react-router";

interface LogoProps {
  logo: string;
  path: string;
}

const Logo = ({ path, logo }: LogoProps) => {
  return (
    <Link href={path} className="flex inline-flex items-center">
      <img src={logo} />
      <p className="ml-3 tracking-wider">Lucaso.dev</p>
    </Link>
  );
};

export { Logo };
