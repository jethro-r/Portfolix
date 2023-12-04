import React from "react";

export const FormInput = ({ props, handleFormState, formData }) => {
  if (props.type === "box") {
    return (
      <div>
        <div className="flex flex-col justify-center">
          <div>{props.title + ": "}</div>
          <input
            onChange={handleFormState}
            value={formData.name}
            placeholder="John Doe"
            required
            className="w-[800px] h-[120px] bg-slate-500 rounded-[10px] border border-black"
          ></input>
        </div>
      </div>
    );
  } else if (props.type === "skill" || props.type === "accomplishment") {
    return (
      <div className="w-[1016px] h-[140px] left-[449px] top-[2581px] absolute">
        <div className="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div className="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div className="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[850px] h-[76px] left-[106px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div className="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
    );
  } else if (props.type === "education") {
    return (
      <div className="w-[1016px] h-[95px] left-[442px] top-[3661px] absolute">
        <div className="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div className="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div className="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
          Place:
        </div>
        <div className="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
          Date:
        </div>
        <div className="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          01/02/2003
        </div>
        <div className="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Degree Title:
        </div>
      </div>
    );
  } else if (props.type === "experience") {
    return (
      <div className="w-[1016px] h-[188px] left-[442px] top-[4732px] absolute">
        <div className="w-[970px] h-[188px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div className="w-[46px] h-[188px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div className="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[850px] h-[76px] left-[106px] top-[96px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div className="w-[42px] h-[33px] left-[64px] top-[96px] absolute text-black text-sm font-normal">
          Body:
        </div>
        <div className="w-[109px] h-[33px] left-[107px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[50px] h-[33px] left-[56px] top-[53px] absolute text-black text-sm font-normal">
          Years:
        </div>
        <div className="w-[50px] h-[33px] left-[903px] top-[53px] absolute text-black text-sm font-normal">
          Current
        </div>
        <div className="w-[109px] h-[33px] left-[107px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          May
        </div>
        <div className="w-[109px] h-[33px] left-[232px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[109px] h-[33px] left-[232px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2003
        </div>
        <div className="w-[109px] h-[33px] left-[439px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[109px] h-[33px] left-[439px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          June
        </div>
        <div className="w-[109px] h-[33px] left-[566px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div className="w-[109px] h-[33px] left-[566px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2004
        </div>
      </div>
    );
  } else if (props.type === "accomplishment") {
    return (
      <div>
        <div className="flex flex-col justify-center">
          <div>{props.title + ": "}</div>
          <input className="w-[800px] h-[120px] bg-slate-500 rounded-[10px] border border-black"></input>
        </div>
      </div>
    );
  }

  return (
    <div className="flex space-x-12 items-center">
      <div>{props.title + ": "}</div>
      <input className="w-[400px] h-[45px] bg-zinc-300 rounded-[10px] border border-black"></input>
    </div>
  );
};
