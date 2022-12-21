import React from "react";
import { Link } from "react-router-dom";
import styles from "./notfound.module.css"
const NotFound = () => {
  return (
    <div class={`d-flex justify-content-center align-items-center ${styles.main}`} >
    <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
    <div class="inline-block align-middle">
    	<h2 class="font-weight-normal lead pl-3" id="desc">The page you requested was not found. Back to <Link to="/">Home</Link></h2>
    </div>
    
</div>
  );
};

export default NotFound;
