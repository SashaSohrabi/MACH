export async function fetchCommentsFromJsonPlaceholder(uid) {
  let data = null;
  const url = 'https://jsonplaceholder.typicode.com/comments?postId=';

  async function doFetch(postId) {
    try {
      const response = await fetch(url + postId);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  function createPostId(uid) {
    const onlyNumber = uid.replace(/\D/g, '');
    const arrOfNumber = onlyNumber.split('');
    const postId = arrOfNumber.reduce((sum, current) => sum + +current, 0); // +current converts string into number

    return postId;
  }

  // return if there is no uid
  if (!uid) {
    return;
  }

  const createdPostId = createPostId(uid);

  // otherwise, just fetch once
  data = await doFetch(createdPostId);

  return data;
}
