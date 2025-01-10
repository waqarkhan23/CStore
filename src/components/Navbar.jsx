/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Contact", path: "/contact" },
  ];

  const NavButton = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <NavLink to={to}>
        <Button
          variant={isActive ? "default" : "ghost"}
          className={isActive ? "bg-primary text-primary-foreground" : ""}
        >
          {children}
        </Button>
      </NavLink>
    );
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center">
            <Home className="h-8 w-8 mr-2 text-primary" />
            <span className="font-bold text-2xl text-primary">C Store</span>
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavButton key={item.name} to={item.path}>
                {item.name}
              </NavButton>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <NavButton key={item.name} to={item.path}>
                      {item.name}
                    </NavButton>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
