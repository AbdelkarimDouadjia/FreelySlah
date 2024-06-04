import React, { useEffect, useRef } from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="flex flex-col-reverse px-4 flex-1 overflow-auto">
      {/* Repeated messages for demonstration */}
      <Message />
    </div>
  );
};

export default Messages;
