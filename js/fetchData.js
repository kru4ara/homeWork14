function fetchData(method, url, callback) {
  const xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = () => {
    if (xhr.status == 200) {
      callback(xhr.response)
    } else {
      console.error(`Error: ${xhr.status} ${xhr.statusText}`)
    }
  };

  xhr.onerror = () => {
    console.error(`Error: ${xhr.status} ${xhr.statusText}`)
  };

  xhr.send()
}

export { fetchData }