class MdParser {
  constructor(markdownContent) {
    this.markdownContent = markdownContent;
  }

  getFrontmatter() {
    const frontmatterRegex = /^---([\s\S]*?)---/;
    const frontmatterMatch = this.markdownContent.match(frontmatterRegex);
    
    if (frontmatterMatch && frontmatterMatch[1]) {
      const frontMatterString = frontmatterMatch[1].trim();
      const frontMatterLines = frontMatterString.split('\n');
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
    return {};
  }

  getBody() {
    const frontmatterRegex = /^---([\s\S]*?)---/;
    const body = this.markdownContent.replace(frontmatterRegex, '').trim();
    return body;
  }
}


// Get Blog Content
// Get YT Courses Content
// Get Premium Content


// Define the function to fetch file details and load content
// async function fetchFolderContent(folder) {

//   const repositoryOwner = 'Joshua357954';
//   const repositoryName = 'solo-max-2';
//   const folderPath = `content/${folder}`;


//   try {
//     // Fetch file details from the GitHub repository
//     const response = await fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/contents/${folderPath}`);

//     // Parse the response as JSON
//     const data = await response.json();

//     // Use Promise.all to concurrently load content from all files
//     const fileDetails = await Promise.all(data.map(file => loadContent(`../content/posts/${file.name}`)));

//     // Log the details of loaded files
//     console.log('Files Details:', fileDetails);
//     return fileDetails
    
//     } catch (error) {
//       console.error('Error fetching file list:', error);
//     }
//   }

//   // Function to load content from a file and parse its front matter
//   async function loadContent(fileInfo) {
//     try {
//       // Fetch the content of the file
//       const response = await fetch(fileInfo);
//       const markdownContent = await response.text();

//       // Parse the markdown content using the MdParser class
//       const markDParser = new MdParser(markdownContent);

//       // Return the front matter of the md file
//       return markDParser.getFrontmatter();
//     } catch (error) {
//       console.error('Error fetching content:', error);

//       // Return an empty object in case of an error
//       return {};
//   }
// }

// Usage of the merged function

// Call the fetchFolderContent function to initiate the process
// fetchFolderContent();

// Define the async function to fetch file details and load content
async function fetchAndLoadContent(folder) {
  const repositoryOwner = 'Joshua357954';
  const repositoryName = 'solo-max-2';
  const folderPath = `content/${folder}`;

  try {
    // Fetch file details from the GitHub repository
    const response = await fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/contents/${folderPath}`);

    // Parse the response as JSON
    const data = await response.json();

    // Use Promise.all to concurrently load content from all files
    const fileDetails = await Promise.all(data.map(async file => {
      try {
        // Fetch the content of the file
        const contentResponse = await fetch(`../content/posts/${file.name}`);
        const markdownContent = await contentResponse.text();

        // Parse the markdown content using the MdParser class
        const markDParser = new MdParser(markdownContent);

        // Return an object containing both file details and front matter
        return {
          frontMatter: markDParser.getFrontmatter()
        };
      } catch (contentError) {
        console.error('Error fetching content:', contentError);

        // Return an object with error details in case of an error
        return {
          frontMatter: {},
          error: contentError
        };
      }
    }));

    // Log the details of loaded files
    console.log('Files Details:', fileDetails);
    return fileDetails;
  } catch (error) {
    console.error('Error fetching file list:', error);

    // Return an empty array in case of an error
    return [];
  }
}

// Call the fetchAndLoadContent function to initiate the process
fetchAndLoadContent('premiumCourses');

