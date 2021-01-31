function wait(ms: number = 500): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function slugify(str: string): string {
  return str.toLowerCase().replace(/\s/g, "-");
}

export { wait, slugify };
