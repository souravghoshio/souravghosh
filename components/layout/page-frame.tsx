import React from "react";

const PageFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-3xl min-h-screen pt-10 mx-auto border-x border-border relative">
      {children}
    </div>
  );
};

export default PageFrame;
