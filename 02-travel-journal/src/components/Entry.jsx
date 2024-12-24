/* eslint-disable react/prop-types */
import pinMarker from "../assets/PinMarker.svg";

export default function Entry(props) {
  const { img, country, googleMapsLink, title, dates, description } =
    props.entry;

  return (
    <article id={props.id} className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={img.src} alt={img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={pinMarker} alt="map marker icon" />
        <span className="country">{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{description}</p>
      </div>
    </article>
  );
}
