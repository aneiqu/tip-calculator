import { useState } from "react";
import "./App.css";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";
import logo from "./assets/images/logo.svg";
import TipPercentage from "./Components/tipPercentage/TipPercentage";

function App() {
  const [percentage, setPercentage] = useState<number>(0);
  const [billAmount, setBillAmount] = useState<number>(0);
  const [personAmount, setPersonAmount] = useState<number>(1);

  return (
    <div className='w-screen h-screen flex-col flex items-center justify-center bg-lightGrayishCyan gap-[88px]'>
      <img src={logo} alt='logo' className='select-none' />
      <form className='w-[920px] h-[480px] bg-white rounded-[25px] p-[32px] flex gap-[48px]'>
        <div className='p-[16px] w-1/2 space-y-[40px]'>
          <div className='flex flex-col gap-[6px]'>
            <label htmlFor='billInput' className='text-darkGrayishCyan text-[16px] font-bold'>
              Bill
            </label>
            <div className='relative'>
              <img
                className='absolute top-[50%] translate-y-[-50%] pl-[20px]'
                src={dollarIcon}
              ></img>
              <input
                id='billInput'
                type='number'
                min={1}
                onChange={(e) => setBillAmount(+e.target.value)}
                className={`bg-[#F3F9FA] rounded-[5px] text-right text-veryDarkCyan font-bold pr-[17px] pl-[35px] py-[6px] focus-visible:outline-none text-[24px]
              `}
                placeholder='0'
              ></input>
            </div>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <label className='text-darkGrayishCyan text-[16px] font-bold'>Select Tip %</label>
            <div className='grid grid-cols-3 grid-rows-2 flex-wrap gap-[14px]'>
              <TipPercentage percentage={5} setPercentage={setPercentage} />
              <TipPercentage percentage={10} setPercentage={setPercentage} />
              <TipPercentage percentage={15} setPercentage={setPercentage} />
              <TipPercentage percentage={20} setPercentage={setPercentage} />
              <TipPercentage percentage={25} setPercentage={setPercentage} />
              <div className='flex py-[6px] bg-[#F3F9FA] rounded-[5px] justify-center focus-within:outline outline-2 focus-within:outline-strongCyan'>
                <input
                  type=''
                  className='w-[90px] text-[24px] font-bold text-right text-veryDarkCyan focus-visible:outline-none bg-transparent'
                  placeholder='Custom'
                  onChange={(e) => setPercentage(+e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[6px]'>
            <label htmlFor='peopleAmount' className='text-darkGrayishCyan text-[16px] font-bold'>
              Number of People
            </label>
            <div className='relative'>
              <img
                className='absolute top-[50%] translate-y-[-50%] pl-[20px]'
                src={personIcon}
              ></img>
              <input
                id='peopleAmount'
                type='number'
                min={1}
                className={`bg-[#F3F9FA] py-[6px] rounded-[5px] text-right text-veryDarkCyan font-bold pr-[17px] pl-[35px] focus-visible:outline-none text-[24px]
              `}
                placeholder='1'
                onChange={(e) => setPersonAmount(+e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-veryDarkCyan rounded-[15px] h-full flex flex-col justify-between p-[40px]'>
          <div className='flex flex-col gap-[25px]'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col'>
                <p className='text-white text-[16px] font-bold'>Tip Amount</p>
                <p className='text-[#7F9D9F] text-[13px] font-bold'>/ person</p>
              </div>
              <p className='text-[48px] font-bold text-strongCyan'>
                ${((billAmount * (percentage / 100)) / personAmount).toFixed(2)}
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col'>
                <p className='text-white text-[16px] font-bold'>Total</p>
                <p className='text-[#7F9D9F] text-[13px] font-bold'>/ person</p>
              </div>
              <p className='text-[48px] font-bold text-strongCyan'>
                $
                {(
                  billAmount / personAmount +
                  (billAmount * (percentage / 100)) / personAmount
                ).toFixed(2)}
              </p>
            </div>
          </div>
          <button
            type='submit'
            className='bg-strongCyan text-veryDarkCyan text-[20px] font-bold py-[8px] rounded-[5px]'
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}
export default App;
