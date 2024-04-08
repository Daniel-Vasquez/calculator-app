export default function Footer({ theme }) {
  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-key-secondary';

  const textLink =
    theme === 'one'
      ? 'text-one-key-secondary hover:text-white'
      : theme === 'two'
      ? 'text-two-key-primary hover:text-two-text-primary'
      : 'text-three-text-primary hover:text-three-key-secondary';

  return (
    <footer
      className={`my-5 text-center ${text}`}
    >
      Creado por{' '}
      <a
        href="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
        target="_blank"
        rel="noreferrer"
        className={`font-bold uppercase transition-all duration-300 ${textLink} hover:underline`}
      >
        Daniel Vásquez
      </a>
      .
    </footer>
  );
}
