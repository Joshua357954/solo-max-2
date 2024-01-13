
class MdParser {
  constructor(markdownContent) {
    this.markdownContent = markdownContent;
  }

  getFrontmatter() {
    const frontmatterRegex = /^---([\s\S]*?)---/;
    const frontmatterMatch = this.markdownContent.match(frontmatterRegex);
    
    function parseFrontMatter() {
      const frontMatterLines = frontmatterMatch.trim().split('\n');
      const frontMatterObject = {};

      for (const line of frontMatterLines) {
        const match = line.match(/^\s*([^:]+):\s*(.*)\s*$/);
        if (match) {
          const key = match[1].trim();
          const value = match[2].trim();
          frontMatterObject[key] = value;
        }
      }

      return frontMatterObject;
    }
  }

  getBody() {
    const frontmatterRegex = /^---([\s\S]*?)---/;
    const body = this.markdownContent.replace(frontmatterRegex, '').trim();
    return body;
  }
}

// Create an object to store your exports
const exportt = {
  mdParser
};

// Example usage:
// const sampleMarkdown = `
// ---
// title: "Sample Title"
// date: "2022-01-15"
// author: "John Doe"
// ---

// # Heading

// This is the body content of the Markdown file.
// `;

// const parser = new MdParser(sampleMarkdown);
// const frontmatter = parser.getFrontmatter();
// const body = parser.getBody();

console.log('Frontmatter:', frontmatter);
console.log('Body:', body);



