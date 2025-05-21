export function generateVariants(options) {
  const validOptions = options.filter(
    (opt) =>
      Boolean(opt?.title?.trim()) &&
      Array.isArray(opt.values) &&
      opt.values.length > 0
  );

  if (validOptions.length === 0) return [];

  const optionTitles = options.map((opt) => opt.title);

  const optionValues = options.map((option) =>
    option.values.map((value) => ({
      [option.title]: value,
    }))
  );

  const cartesian = (arr) =>
    arr.reduce((a, b) => a.flatMap((x) => b.map((y) => ({ ...x, ...y }))));

  const baseVariants = cartesian(optionValues);

  const variants = baseVariants.map((variant) => {
    const combinations = optionTitles.map((title) => variant[title]);

    return {
      combinations,
      title: combinations.join(' / '),
    };
  });

  return variants;
}
