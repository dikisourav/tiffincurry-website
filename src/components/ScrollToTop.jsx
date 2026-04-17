import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){

const { pathname, search, hash } = useLocation();

useEffect(()=>{

if (hash) {

const scrollToHash = () => {

const target = document.querySelector(hash);

if (target) {

target.scrollIntoView({
behavior:"instant",
block:"start"
});

}

};

window.setTimeout(scrollToHash, 0);

return;

}

window.scrollTo({
top:0,
left:0,
behavior:"instant"
});

},[pathname, search, hash]);

return null;

}
