export function sortPostsByDateInDecOrder(posts) {
  const compareDatesToSortInDecOrder = (post1, post2) => {
    const timestamp1 = new Date(post1.frontmatter.date);
    const timestamp2 = new Date(post2.frontmatter.date);

    return timestamp2 - timestamp1;
  };

  const toSort = posts.slice(0); // copy
  toSort.sort(compareDatesToSortInDecOrder);
  return toSort;
}
