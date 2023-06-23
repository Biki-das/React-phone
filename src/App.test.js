import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('formatPhoneNumber formats input correctly', () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText('Mobile Number');

  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('(123)');

  fireEvent.change(input, { target: { value: '123456' } });
  expect(input.value).toBe('(123) 456');

  fireEvent.change(input, { target: { value: '1234567890' } });
  expect(input.value).toBe('(123) 456-7890');
});

test('handleBackspace removes the last character from the formatted number', () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText('Mobile Number');

  fireEvent.change(input, { target: { value: '1234567890' } });
  fireEvent.keyDown(input, { key: 'Backspace' });

  expect(input.value).toBe('(123) 456-789');
});
