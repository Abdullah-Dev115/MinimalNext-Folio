const { defineQuery } = require('next-sanity')

// Projects Cards Query
export const PROJECTS_CARDS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(publishedAt desc) {
    title, 
    description, 
    "slug": slug.current, 
    publishedAt, 
    cover
  }`)

// Posts Cards Query
export const POSTS_CARDS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    title, 
    "slug": slug.current, 
    publishedAt, 
    cover, 
    tag, 
    views
  }`)

// Post Page Query
export const POST_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
  title, 
  publishedAt, 
  views, 
  body[]{
    ...,
    // Expand references to components
    _type == "reference" => {
      ...,
      "component": @->
    }
  }, 
  tag
}`)

// Project Page Query
export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    description,
    publishedAt,
    body[]{
      ...,
      _type == "reference" => {
        ...,
        "component": @->
      }
    },
    tag,
    views
  }
`)

// Post Page Views Query
export const POST_VIEWS_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
  _id,
  views,
  slug {
    current
  }
}`)

// Project Page Views Query
export const PROJECT_VIEWS_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0] {
  _id,
  views,
  slug {
    current
  }
}`)
