import React from "react";
import Link from "next/link";

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link href = "/" prefetch ={false}>Home</Link>
                </li>
                <li>
                    <Link href = "/about"  prefetch ={false}>About</Link>
                </li>
                <li>
                    <Link href = "/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;