function solution(phone_number) {
  const hidden = '*'.repeat(phone_number.length - 4);
  const visible = phone_number.slice(-4);
  return hidden + visible;
}
