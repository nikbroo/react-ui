import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-6">
      <div className="grid md:grid-cols-2 pb-6 border-b px-12 w-full gap-2">
        <div className="flex items-center space-x-3 pl-5">
          <TfiEmail color="white" size={28} />
          <h3 className="text-[24px] font-medium">Sign Up To Shop Now</h3>
        </div>
        <div className="flex items-center border-4 border-white rounded-lg bg-white">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 text-black focus:outline-none text-[15px] w-full"
          />
          <button className="bg-[#FA5C98] text-[15px] text-white py-2 px-4 rounded-lg font-medium">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="container pt-12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-medium text-[20px] pb-2">Contact Us</h4>
          <ul className="space-y-2 text-[12px]">
            <li>Demo Store</li>
            <li>No. 1258 Utawala, Nairobi, 01010</li>
            <li>Kenya</li>
            <li>+25470101010</li>
            <li>example@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[20px] pb-2">Information</h4>
          <ul className="space-y-2 text-[12px]">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[20px] pb-2">Account</h4>
          <ul className="space-y-2 text-[12px]">
            <li>Search</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[20px] pb-2">Quick Links</h4>
          <ul className="space-y-2 text-[12px]">
            <li>Incense Sticks</li>
            <li>Shankh</li>
            <li>Kalash</li>
            <li>Incense Holders</li>
            <li>Cone Dhoop</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[20px] pb-2">Social Media.</h4>
          <p className="text-[12px]">Follow us on social media and stay updated.</p>
          <div className="flex justify-center md:justify-start space-x-5 mt-4">
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334v-.424A6.68 6.68 0 0 0 16 3.542a6.57 6.57 0 0 1-1.889.518 3.293 3.293 0 0 0 1.447-1.817 6.573 6.573 0 0 1-2.084.797 3.286 3.286 0 0 0-5.596 2.994A9.325 9.325 0 0 1 1.114 2.132a3.286 3.286 0 0 0 1.018 4.382 3.27 3.27 0 0 1-1.487-.41v.042a3.288 3.288 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.615-.059 3.288 3.288 0 0 0 3.067 2.28A6.588 6.588 0 0 1 0 13.292a9.29 9.29 0 0 0 5.026 1.474" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.582 0 0 3.582 0 8c0 4.186 3.285 7.627 7.457 7.98v-5.646H5.707V8h1.75V6.273c0-1.733 1.037-2.687 2.617-2.687.744 0 1.383.055 1.57.08v1.823h-.882c-.693 0-.907.437-.907.884V8h1.633l-.261 1.334H9.855v5.646C14.015 15.6 16 12.32 16 8c0-4.418-3.582-8-8-8z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.1A4.9 4.9 0 0 0 3.1 8a4.9 4.9 0 0 0 4.9 4.9A4.9 4.9 0 0 0 12.9 8a4.9 4.9 0 0 0-4.9-4.9zM8 12.1a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm5.2-8.3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 2.7a3.43 3.43 0 0 1 0 6.9h-8.4a3.43 3.43 0 0 1 0-6.9h8.4zm0-1H3.8A4.43 4.43 0 0 0 0 8a4.43 4.43 0 0 0 4.4 4.4h8.4A4.43 4.43 0 0 0 16 8a4.43 4.43 0 0 0-4.4-4.4z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h-.101C6.049 1.998 1.99 2.004 1.26 2.299c-.799.311-1.291 1.136-1.291 2.228v6.947c0 1.092.492 1.916 1.291 2.228.74.283 2.347.305 4.89.305 2.544 0 4.15-.022 4.89-.305.799-.311 1.291-1.136 1.291-2.228V4.527c0-1.092-.492-1.917-1.291-2.228-.741-.283-2.347-.305-4.89-.305zM6.5 6.813l3.767 2.187L6.5 11.187V6.813z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
