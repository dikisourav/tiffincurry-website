export default function Feature({ title, text, img, reverse }) {

return (

<section className="feature reveal">

<div className={`container feature-inner ${reverse ? "reverse" : ""}`}>

<div className="feature-text">

<h2>{title}</h2>

<p>{text}</p>

</div>

<div className="feature-image">

<img src={img} alt={title} />

</div>

</div>

</section>

);

}