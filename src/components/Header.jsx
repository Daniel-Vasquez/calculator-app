import { LogoCalc } from "./LogoCalc";
export default function Header({ theme, setTheme }) {
  const themes = ['one', 'two', 'three'];

  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
        ? 'text-two-text-primary'
        : 'text-three-text-primary';

  const inputsDisplay = themes.map((t, i) => (
    <label
      key={t}
      htmlFor={t}
      className={`w-3 ${text} cursor-pointer text-center text-sm hover:opacity-70`}
    >

      <input
        checked={theme === t}
        type="radio"
        id={t}
        value={t}
        name={t}
        onChange={(e) => setTheme(e.target.value)}
        className="appearance-none"
      />
      <span
        className={`absolute top-[17px] left-0 h-[1.1rem] w-[1.1rem] -translate-y-1/2 rounded-full ${theme === 'one'
          ? 'translate-x-[5px] bg-one-key-secondary/50'
          : theme === 'two'
            ? 'translate-x-[38px] bg-two-key-secondary/50'
            : 'translate-x-[72px] bg-three-key-secondary/50'
          }`}
      ></span>
      {i + 1}
    </label>
  ));

  return (
    <header className="flex items-center justify-between">
      <LogoCalc theme={theme} className="w-12" />

      <div className="flex items-center gap-4">
        <div className="w-24">
          <form
            action="#"
            className={`p-2 ${theme === 'one'
              ? 'bg-one-bg-secondary'
              : theme === 'two'
                ? 'bg-two-bg-secondary'
                : 'bg-three-bg-secondary'
              } relative flex items-center justify-between rounded-lg`}
          >
            {inputsDisplay}
          </form>
        </div>
      </div>
    </header>
  );
}
