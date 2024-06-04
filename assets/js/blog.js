function displayBlogPosts() {
    const postsContainer = document.getElementById('postsContainer');
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    blogPosts.forEach(post => {
      const postElement = document.createElement('section');
      postElement.classList.add('post');

      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      postElement.appendChild(titleElement);

      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      postElement.appendChild(contentElement);
      
      const authorElement = document.createElement('p');
      authorElement.textContent = `by ${post.username}`;
      postElement.appendChild(authorElement);     

      postsContainer.appendChild(postElement);
    });
}

if (window.location.pathname.endsWith('blog.html')) {
    displayBlogPosts();
  }