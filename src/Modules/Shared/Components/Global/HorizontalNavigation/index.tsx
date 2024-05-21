import { Link } from "@tanstack/react-router";
import { Logo } from "./Components/Logo.component.tsx";

const HorizontalNavigation = () => {
  return (
    <nav>
      <div className="flex flex-wrap">
        <div className="w-1/5" />
        <div className="flex w-3/5 pt-3 pb-3 justify-between">
          <div>
            <Logo path="/" logo={"https://placehold.it/48x48"} />
          </div>
          <div className="flex inline-flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <div className="w-1/5" />
      </div>
    </nav>
  );
};

export { HorizontalNavigation };
