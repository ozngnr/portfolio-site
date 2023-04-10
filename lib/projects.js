import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectsData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const content = marked.parse(matterResult.content);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content,
    };
  });
  // Sort posts by project number
  return allProjectsData.sort(({ projectNumber: a }, { projectNumber: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
}
