class Posts {
  constructor (data = [], wrap) {
    this.data = data
    this.wrap = wrap

    this._init()
  }

  _init () {
    this._render()
  }

  _templatePost ({ username, name, email, website }) {
    const template = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${username}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${name}</li>
        <li class="list-group-item">E-Mail: ${email}</li>
        <li class="list-group-item">${website}</li>
      </ul>
    </div>
    `

    return template
  }

  _templatePosts () {
    let template = ''

    this.data.forEach((item) => {
      template = template + this._templatePost(item)
    })

    return template
  }

  _render() {
    if (this.wrap) {
      this.wrap.innerHTML = this._templatePosts()
    }
  }
}

export { Posts }