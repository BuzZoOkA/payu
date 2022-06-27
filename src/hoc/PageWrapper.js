const PageWrapper = (wrappedComponent) => {
  return (
    <>
      <header>HEADER</header>
      <main>{wrappedComponent.children}</main>
      <footer>FOOTER</footer>
    </>
  );
};

export default PageWrapper;
