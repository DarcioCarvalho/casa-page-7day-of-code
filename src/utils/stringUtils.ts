export function getValidFloatValue(value: string): string {
  //const validValuer = value.match("/[0-9]*\,[0-9]*/g")?.[0]; 
  //const validValue = value.replace(/(?!,)\D/, "");
  if (!value)
    return value;

  // The third is cause was typed a second comma before the currenty.
  // Thus, the numbers after the second comma will be preserved.
  const [first, second, third] = value.replace(/[^,\d]/, "").split(",");
  const validValue = `${first}${second != undefined ? `,${second}` : ""}${third != undefined ? third : ""}`;

  return validValue;
}

export function isValidFloatValue(value: string): boolean {
  //    /[0-9]*\,[0-9]*/gm
  return !!value.match("^[0-9]+([,]|[,][0-9]+)?$")?.[0];
}