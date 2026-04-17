import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import logo from "../assets/logo.svg"


export default function LoginModal({ open, setOpen }) {

useEffect(() => {

if (open) {

document.body.style.overflow = "hidden";
document.body.style.height = "100vh";
document.documentElement.style.overflow = "hidden";

} else {

document.body.style.overflow = "auto";
document.body.style.height = "auto";
document.documentElement.style.overflow = "auto";

}

return () => {

document.body.style.overflow = "auto";
document.body.style.height = "auto";
document.documentElement.style.overflow = "auto";

};

}, [open]);

useEffect(() => {

if (!open) return undefined;

const handleEscape = (event) => {

if (event.key === "Escape") {

setOpen(false);

}

};

window.addEventListener("keydown", handleEscape);

return () => window.removeEventListener("keydown", handleEscape);

}, [open, setOpen]);


if (!open) return null;

return createPortal(

<div
className="login-overlay"
role="presentation"
onMouseDown={() => setOpen(false)}
>

<div
className="login-modal animate-fadeIn"
role="dialog"
aria-modal="true"
aria-labelledby="login-title"
onMouseDown={(event) => event.stopPropagation()}
>

<button
type="button"
className="login-close"
onClick={() => setOpen(false)}
aria-label="Close sign in modal"
>
<X size={20} />
</button>

<h2 className="login-title" id="login-title">
Sign in to TiffinCurry
</h2>

<form className="login-form">

<input
type="text"
placeholder="User ID"
className="login-input"
/>

<input
type="password"
placeholder="Password"
className="login-input"
/>

<div className="login-buttons">

<button
type="submit"
className="login-signin"
>
Sign in
</button>

<button
type="button"
className="login-cancel"
onClick={() => setOpen(false)}
>
Cancel
</button>

</div>

<div className="login-links">

<a href="/signup">Sign up</a>

<a href="/reset-password">Reset password</a>

</div>

</form>

<div className="login-footer">

<img
src={logo}
alt="TiffinCurry logo"
/>

</div>

</div>

</div>

,
document.body
);
}
