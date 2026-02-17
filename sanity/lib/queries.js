export const navigationQuery = `
  *[_type == "section"] | order(order asc) {
    _id,
    title,
    slug,
    order,
    "projects": *[_type == "project" && references(^._id)] | order(order asc) {
      _id,
      title,
      slug
    }
  }
`

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    images[] {
      ...,
      asset->
    },
    body,
    imagesFirst
  }
`

export const homeProjectQuery = `
  *[_type == "project" && isHome == true][0] {
    _id,
    title,
    slug,
    images[] {
      ...,
      asset->
    },
    body,
    imagesFirst
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    siteTitle,
    headerText,
    footerText
  }
`

export const allSlugsQuery = `
  *[_type == "project" && defined(slug.current)].slug.current
`
