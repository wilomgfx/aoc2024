const part1 = (input: string) => {
  const [orderRulesSection, pageUpdatesSection] = input.split("\n\n");
  const orderRules = orderRulesSection
    .split("\n")
    .map((rule) => rule.trim())
    .filter((rule) => rule !== "");
  const pageUpdates = pageUpdatesSection
    .split("\n")
    .map((update) => update.trim())
    .filter((update) => update !== "");

  const pageUpdateSatisfyOrderRule = (
    pageUpdate: string,
    orderRules: string[]
  ) => {
    const pages = pageUpdate.split(",").map((page) => page.trim());

    for (const rule of orderRules) {
      const [before, after] = rule.split("|").map(Number);
      const beforeIndex = pages.indexOf(before.toString());
      const afterIndex = pages.indexOf(after.toString());

      if (beforeIndex === -1 || afterIndex === -1) {
        // If either page is not in the update, skip this rule
        continue;
      }

      if (beforeIndex >= afterIndex) {
        // If the 'before' page comes after the 'after' page, the rule is violated
        return false;
      }
    }

    return true;
  };

  const validPageUpdates = pageUpdates.filter((update) =>
    pageUpdateSatisfyOrderRule(update, orderRules)
  );

  const middlePages = validPageUpdates.map((update) => {
    const pages = update.split(",").map(Number);
    return pages[Math.floor(pages.length / 2)];
  });

  const answer = middlePages.reduce((acc, page) => acc + page, 0);
  return answer;
};

const part2 = (input: string) => {
  const [orderRulesSection, pageUpdatesSection] = input.split("\n\n");
  const orderRules = orderRulesSection
    .split("\n")
    .map((rule) => rule.trim())
    .filter((rule) => rule !== "");
  const pageUpdates = pageUpdatesSection
    .split("\n")
    .map((update) => update.trim())
    .filter((update) => update !== "");

  const pageUpdateNotSatisfyOrderRule = (
    pageUpdate: string,
    orderRules: string[]
  ) => {
    const pages = pageUpdate.split(",").map((page) => page.trim());

    for (const rule of orderRules) {
      const [before, after] = rule.split("|").map(Number);
      const beforeIndex = pages.indexOf(before.toString());
      const afterIndex = pages.indexOf(after.toString());

      if (beforeIndex === -1 || afterIndex === -1) {
        // If either page is not in the update, skip this rule
        continue;
      }

      if (beforeIndex >= afterIndex) {
        // If the 'before' page comes after the 'after' page, the rule is violated
        return true;
      }
    }

    return false;
  };

  const invalidPageUpdates = pageUpdates.filter((update) =>
    pageUpdateNotSatisfyOrderRule(update, orderRules)
  );

  const updatePageUpdateToSatisfyOrderRules = (
    pageUpdate: string,
    orderRules: string[]
  ) => {
    const pages = pageUpdate.split(",").map(Number);
    let changed = true;

    while (changed) {
      changed = false;
      for (const rule of orderRules) {
        const [before, after] = rule.split("|").map(Number);
        const beforeIndex = pages.indexOf(before);
        const afterIndex = pages.indexOf(after);

        if (beforeIndex === -1 || afterIndex === -1) {
          // If either page is not in the update, skip this rule
          continue;
        }

        if (beforeIndex >= afterIndex) {
          // If the 'before' page comes after the 'after' page, the rule is violated
          const beforePage = pages.splice(beforeIndex, 1)[0];
          pages.splice(afterIndex, 0, beforePage);
          changed = true;
        }
      }
    }

    return pages.join(",");
  };

  const updatedPageUpdates = invalidPageUpdates.map((update) =>
    updatePageUpdateToSatisfyOrderRules(update, orderRules)
  );

  const middlePages = updatedPageUpdates.map((update) => {
    const pages = update.split(",").map(Number);
    return pages[Math.floor(pages.length / 2)];
  });

  const answer = middlePages.reduce((acc, page) => acc + page, 0);
  return answer;
};

export { part1, part2 };
