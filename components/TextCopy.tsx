import Link from 'next/link';
import React, { useState } from 'react';

const TextCopyDiv = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = "https://stato-shere/public.form/"+text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setIsCopied(true);
  };

  return (
    <div  className='w-full text-black  mt-3 flex h-full bg-white '>
      <Link  className="text-div text-[11px] border p-2 mr-1 text-blue-800" href={`/public.form/${text}`}>https://stato-shere/public.form/{text}</Link>
      <button onClick={copyTextToClipboard}>Copier</button>
      {isCopied && <p className='ml-2 text-green-400' onClick={()=>{setIsCopied(false)}}> Text copied to clipboard!</p>}
    </div>
  );
};

export default TextCopyDiv;
