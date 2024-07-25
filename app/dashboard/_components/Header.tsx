import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="5 shadow-sm border-b-2">
      <div className="flex gap-2 max-2-md items-center p-2 rounded-md">
        <Search/>
       < input type='text' placeholder ='Search...' className="outline-none"  />

      </div>
    </div>
  );
}

export default Header;
