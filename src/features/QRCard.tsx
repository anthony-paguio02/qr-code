// import React from "react";
import qrCode from "../assets/image-qr-code.png";

const QRCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="h-auto w-full max-w-xs p-2 pb-6 bg-white rounded-2xl shadow-md">
        <img className="rounded-lg" src={qrCode} alt="QR Code" />
        <div className="mt-4 space-y-2 px-2">
          <h4 className="text-center font-bold text-lg leading-tight">
            Improve your front-end skills by building projects
          </h4>
          <p className="text-center text-sm text-gray-500 leading-relaxed">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCard;
