import { PostType } from './postTypes';

async function getAllPosts(
  limit?: number,
  offset?: number,
): Promise<PostType[]> {
  const response = await fetch(
    `https://dev.codeleap.co.uk/careers/?limit=${limit ?? 5}&offset=${
      offset ?? 5
    }`,
  );

  const data = await response.json();
  return data.results;
}

export default getAllPosts;
