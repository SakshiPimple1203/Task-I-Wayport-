import React, { useState, useEffect, useRef } from "react";
import './Output.css'; 

const Output = () => {
    const [otp, setOtp] = useState(Array(4).fill("")); 
    const [isDisabled, setIsDisabled] = useState(true);
    const [countdown, setCountdown] = useState(30);
    const [timerActive, setTimerActive] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
      if (otp.every((digit) => digit !== "")) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }, [otp]);

    const handleChange = (e, index) => {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;

    
      if (e.target.value.length === 1 && index < newOtp.length - 1) {
        inputRefs.current[index + 1].focus();
      }

      setOtp(newOtp);
    };

    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };

    const processOtp = () => {
      const enteredOtp = otp.join("");
      if (enteredOtp === "1234") { 
        alert("OTP Verified");
        resetOtp();
        setTimerActive(false);
      } else {
        shakeInputs();
        startTimer();
      }
    };

    const resetOtp = () => {
      setOtp(Array(4).fill("")); 
      inputRefs.current[0].focus();
    };

    const shakeInputs = () => {
      const inputContainer = document.getElementById("otp-container");
      inputContainer.classList.add("shake");
      setTimeout(() => {
        inputContainer.classList.remove("shake");
        resetOtp();
      }, 1000);
    };

    const startTimer = () => {
      setTimerActive(true);
      setCountdown(30);
    };

    useEffect(() => {
      let timer;
      if (timerActive && countdown > 0) {
        timer = setInterval(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
      } else if (countdown === 0) {
        setTimerActive(false);
      }

      return () => clearInterval(timer);
    }, [countdown, timerActive]);

    return (
      <div className="otp-wrapper">
        <div id="otp-container">
          <div className="lock-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V8a4 4 0 10-8 0v3m8 0v8m0 8V8m0 8v8" />
            </svg>
          </div>
          <h2>Verification Code</h2>
          <p>Please enter the verification code sent to your mobile</p>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  maxLength="1"
                  className="otp-input"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
                
                {index < otp.length - 1 && <span className="dot">.</span>}
              </React.Fragment>
            ))}
          </div>
          <button
            className="verify-button"
            onClick={processOtp}
            disabled={isDisabled || timerActive}
          >
            Verify
          </button>
          {timerActive && <p className="resend-message">Resend OTP in {countdown}s</p>}
        </div>
      </div>
    );
}

export default Output;
