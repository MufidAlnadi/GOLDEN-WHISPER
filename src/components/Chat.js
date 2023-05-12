import React from "react";

function Chat() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-sm">
        <iframe
          allow="microphone;"
          className="w-full h-64 sm:h-96"
          width="1515"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/243a1248-56da-4bf4-b935-80bb31456a09"
        ></iframe>
      </div>
    </div>
  );
}

export default Chat;
