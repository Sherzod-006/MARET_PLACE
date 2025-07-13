import { useState } from "react";

const Notification = ({ message }) => {
  const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => setVisible(false), 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (message) {
    setTimeout(() => setVisible(false), 5000);
  }
  return (
      <div className={`${ message && visible ? 'fixed' : 'hidden'}  top-0 left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-1000 ease-out animate-slideDown bg-blue-100 text-blue-900 px-15 py-2 rounded-xl shadow-md w-max max-w-sm z-50`}>
        {message}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 rotate-45 w-3 h-3 bg-blue-100 border-t border-l border-blue-300" />
      </div>
  );
};

export default Notification;