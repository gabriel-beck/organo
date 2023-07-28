import './Links.css';

const Links = (props) => {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img className="link"
          src={props.img}
          alt={props.alt}
          width="auto"
          height="30px"
        />
      </a>
    );
  };

export default Links;