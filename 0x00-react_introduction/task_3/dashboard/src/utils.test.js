
import { getFooterCopy, getLatestNotification, GetFullYear } from './utils';

test('Returns correct string if isIndex is true', () => {
  const result = getFooterCopy(true);
  expect(result).toBe("Holberton School");
});

test('Returns correct string if isIndex is false', () => {
  const result = getFooterCopy(false);
  expect(result).toBe("Holberton School main dashboard");
});

test('Returns the current year', () => {
  const result = GetFullYear()
  const currentYear = new Date().getFullYear()
  expect(result).toBe(currentYear)
});

test('Returns a string', () =>{
  const result = getLatestNotification()
  expect(result).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})