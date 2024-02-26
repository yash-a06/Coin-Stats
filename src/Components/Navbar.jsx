import { useDispatch, useSelector } from "react-redux";

import { changeCurrency } from "../Redux/CurrencySlice";

function Navbar() {

    const {appCurrency} = useSelector((state) => state.currency);
    const dispatch = useDispatch();
    return (
        <div id="navbar" className="navbar bg-base-100 w-[80%] mx-auto">
            <div id="yellow" className="flex-1">
                <a id="Cryptrack" className="btn btn-ghost text-xl text-yellow-500 font-semibold">Cryptrack</a>
            </div>
            <div  className="flex-none">
                <ul id="list1" className="menu menu-horizontal px-1">
                <li>
                    <details>
                    <summary>
                        {appCurrency}
                    </summary>
                    <ul id="list2" className="p-2 bg-base-100 z-10">
                        <li onClick={() => dispatch(changeCurrency('INR'))}><a>INR</a></li>
                        <li onClick={() => dispatch(changeCurrency('USD'))}><a>USD</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;