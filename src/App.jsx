import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
    
  const [amount, setamount] = useState(0)
  const [currency, setcurrency] = useState("")
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertAmount, setconvertAmount] = useState(0)
  const currencyInfo= useCurrencyinfo(from)
  console.log("c", currencyInfo)
  const options= Object.keys(currencyInfo);
  console.log("o",options);
  const swap=()=>{
    setfrom(to);
    setto(from);
    setamount(convertAmount);
    setconvertAmount(amount);
  }
  const convert=()=>{
    setconvertAmount(amount*currencyInfo[to]) 
  }
  return (
    <>
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-600"
            style={{
                backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/70/93/27/1000_F_170932733_VOHGeaH5AjrVCXBVryEwVgwhArv2wNNH.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setfrom(currency)
                                }}
                                onAmountChange={(amount)=>{
                                  setamount(amount);
                                }}
                                selectCurrency={from  }
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setto(currency)
                                }}
                                selectCurrency={to}
                                onAmountChange={(convertAmount)=>{
                                  setconvertAmount(convertAmount);
                                }}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert 
                          
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default App
