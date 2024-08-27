import { Dispatch, SetStateAction } from "react";

interface PropsType {
  percentage: number;
  setPercentage: Dispatch<SetStateAction<number>>;
}

export default function TipPercentage({ percentage, setPercentage }: PropsType) {
  return (
    <div className=' bg-veryDarkCyan text-[24px] px-[14px] py-[6px] flex text-center rounded-[5px]'>
      <label htmlFor={`${percentage}`} className='select-none  text-white w-[90px] rounded-[5px]'>
        {percentage}%
      </label>
      <input
        onChange={(e) => setPercentage(+e.target.value)}
        type='radio'
        id={`${percentage}`}
        name='percentage'
        value={percentage}
        className='hidden'
      ></input>
    </div>
  );
}
