export function formatDate(date) {
  const locale = "en-US";
  const yearOption = { year: "numeric" };
  const monthOption = { month: "2-digit" };
  const dayOption = { day: "2-digit" };
  const sep = "/";

  const year = new Intl.DateTimeFormat(locale, yearOption).format(date);
  const month = new Intl.DateTimeFormat(locale, monthOption).format(date);
  const day = new Intl.DateTimeFormat(locale, dayOption).format(date);

  return [year, month, day].join(sep);
}
