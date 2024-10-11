Here's an updated `README.md` with the additional points for design and submission:

---

# OTP Verification Component in React

This project implements a 4-digit OTP (One-Time Password) input system using React. It is designed with a focus on user-friendly input handling and includes features such as digit auto-focus, backspace handling, and a countdown timer to prevent multiple verification attempts in quick succession.

## Features

- **4-Digit OTP Input**: 
  - Each digit is entered into its own input box.
  - The inputs are visually organized to guide user input.
  - Users can easily type or delete digits as needed, with seamless focus transition between boxes.
- **Auto-Focus**: When a digit is entered, the focus automatically moves to the next input box.
- **Backspace Handling**: If the user presses backspace on an empty input, the focus automatically moves to the previous box.
- **Form Submission**:
  - A "Verify" button is provided, which remains disabled until all four digits are entered.
  - After entering all digits, users can submit the OTP for verification.
- **Input Reset on Failure**: If the OTP is incorrect, the input fields will shake and reset, allowing the user to re-enter the digits.
- **Countdown Timer**: If the OTP verification fails, a countdown timer starts, preventing further verification attempts until the timer expires.
- **Disable Button During Timer**: The "Verify" button is disabled during the countdown period to prevent multiple submissions.

## Demo

![Demo](demo.gif)

## How to Use

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-otp-verification.git
   cd react-otp-verification
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will start the application at `http://localhost:3000/`.

### Usage

The component `Output` is designed to handle OTP verification with a timer and input field focus management.

To use it in your project:

1. Import the `Output` component:

   ```javascript
   import Output from './Output';
   ```

2. Use the component in your JSX:

   ```jsx
   <div>
     <Output />
   </div>
   ```

### Customization

- **Change OTP Length**: You can modify the length of the OTP by adjusting the size of the array in the `useState` hook:

  ```js
  const [otp, setOtp] = useState(Array(4).fill(""));
  ```

  For example, change the `4` to `6` if you need a 6-digit OTP.

- **Modify OTP Validation**: Currently, the OTP is hardcoded as `"1234"` for demonstration purposes. You can modify this in the `processOtp` function:

  ```js
  if (enteredOtp === "1234") {
    alert("OTP Verified");
  }
  ```

  Replace `"1234"` with your desired validation logic or backend integration.

- **Styling**: The component uses an external CSS file `Output.css` for styling. You can modify this file to change the appearance of the OTP input fields, buttons, and other elements.

### File Structure

```
├── public
│   └── index.html
├── src
│   ├── Output.css
│   ├── Output.js
│   └── index.js
├── package.json
└── README.md
```

### Design Details

1. **Input Organization**:
   - Each of the four OTP digits is entered in a separate input box, visually separated by a dot (`.`) to guide the user's input.
   - Users can easily navigate between input boxes by typing or using the backspace key to delete a digit.

2. **Verify/Submit Button**:
   - A "Verify" button is provided below the OTP input fields. This button remains **disabled** until the user has entered all four digits.
   - Once the user enters all four digits, the button becomes active and allows submission of the OTP.

### Dependencies

This project uses React, and there are no additional dependencies for OTP handling.

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Heroicons](https://heroicons.com/)
- Inspired by various OTP input implementations found online.

---

This version includes the requested design and submission details while keeping the structure easy to follow.
