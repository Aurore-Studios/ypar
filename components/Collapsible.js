import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Collapsible({ text, content }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`w-full transition border-b group hover:cursor-pointer pb-4 ${open ? 'shadow-b border-b-cyan-600' : 'border-slate-300'} my-3 py-2`} onClick={() => setOpen(!open)}>
          <div className='flex items-center'>
            <p className={`text-zinc-600 ${open && 'text-cyan-600'}`}>{text}</p>
            <FontAwesomeIcon icon={open ? faMinus : faPlus } className={`${open && 'text-cyan-600'} ml-auto text-zinc-400`} />
          </div>
          {open && <hr className='mt-4 border-cyan-600 h-[1px]' />}
          {open && <div className='mt-4'>{content}</div>}
        </div>
      );
}