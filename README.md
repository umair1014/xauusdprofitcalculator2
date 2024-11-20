# Blog Management Guide

## Adding New Blog Posts

1. Create a new HTML file in the `src/blogs` directory
2. Name the file using the slug format: `your-blog-post-slug.html`
3. Use the following template structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Blog Title</title>
  <meta name="description" content="Your blog description">
</head>
<body>
  <!-- Blog Content Start -->
  <article>
    <h1>Your Blog Title</h1>
    
    <p>Your introduction paragraph</p>

    <h2>Main Section</h2>
    <p>Section content</p>

    <h3>Sub Section</h3>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  </article>
  <!-- Blog Content End -->
</body>
</html>
```

4. Add the blog metadata to `src/data/blogPosts.ts`:

```typescript
{
  slug: 'your-blog-post-slug',
  title: 'Your Blog Title',
  date: '2024-03-15', // Use current date
  image: 'https://images.unsplash.com/your-image-id',
  excerpt: 'A brief description of your blog post',
  content: readBlogContent('your-blog-post-slug')
}
```

## Styling Guidelines

- Use h1 for main title
- Use h2 for major sections
- Use h3 for subsections
- Use ul/li for bullet points
- Use strong for emphasis
- Keep paragraphs concise and readable