export default function getResourceId(url) {
  const urlParts =  url.split('/')
  return urlParts[urlParts.length - 2]
}