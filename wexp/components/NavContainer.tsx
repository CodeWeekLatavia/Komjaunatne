export default function NavContainer(props) {
  return (
    <nav style={{ position: "fixed", zIndex: 3, top: 0 }} className="w-100 bg-white">
      <div className="container d-flex align-items-center flex-column flex-md-row justify-content-between">
        {props.children}
      </div>
      <hr style={{ margin: "0 30px" }} />
    </nav>
  );
}