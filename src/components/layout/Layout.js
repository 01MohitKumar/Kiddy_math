import MainNavigation from "./navigation/MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
