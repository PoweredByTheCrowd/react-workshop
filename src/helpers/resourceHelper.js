export function getResourceId(url) {
  const urlParts =  url.split('/')
  return urlParts[urlParts.length - 2]
}

export function setIdToResource(resource) {
  resource.id = getResourceId(resource.url)
  return resource
}