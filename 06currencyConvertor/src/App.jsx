import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div 
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto bg-white/30 background-blur-sm p-5 rounded-lg  ">
            <form onSubmit={(e) => e.preventDefault()} className='w-full'>
              <div className="w-full mb-1">
                <InputBox 
                />
              </div>
              <div className="relative w-full h-0.5">
                <button 
                  type="button"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 rounded-lg px-2 py-0.5 text-white"
                >swap</button>
              </div>
              <div className="w-full mb-1">
                <InputBox />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
