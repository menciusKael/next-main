const COM = ({
  children,
  manage,
  info,
}: {
  children: React.ReactNode;
  manage: React.ReactNode;
  info: React.ReactNode;
}) => {
  return (
    <section>
      <header>Report Common Header</header>
      {children}
      {manage}
      {info}
    </section>
  );
};

export default COM;
