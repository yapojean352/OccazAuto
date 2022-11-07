import './spinner.css';

export default function Spinner(props) {
  return (
    <div className="overlayt">
      <div className="spinner">{props.children}</div>
    </div>
  );
}
