'use client';
import { useColorTheme } from '../../core/hooks/useColorTheme';
import './themeToggle.css';

const ThemeToggle = () => {
  const { state, dispatch } = useColorTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={state.theme === 'dark' || state.theme === 'true'}
        onChange={() => dispatch({ type: 'CHANGE_THEME' })}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;
